import { useState, type JSX } from 'react'
 import { Sun, Moon, LoaderCircle } from "lucide-react";

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './spinner.css';

import './App.css'
import AuthForm from './components/AuthForm'
import Dashboard from './components/Dashboard'

export type ViewName = 'auth' | 'dashboard';

export interface UserData  {
  firstName : string;
  lastName : string;
  profilePicture? : string;
}

function App() {
  const handleLoginSucces = () => {
    setIsLoading(true);
    setTimeout(() => {
        try {
            const data : UserData= {
              firstName : "Default",
              lastName : "Name"        
            }
            setCurrentView('dashboard');
            setUserData(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, 2000); 
};

  const [currentView, setCurrentView] = useState<ViewName>('auth');
  const [userData, setUserData] = useState<UserData>({
    firstName : "",
    lastName : "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
    });
  const views: Record<ViewName, JSX.Element>  = {
    auth: <AuthForm onLoginSuccess={handleLoginSucces} isDarkMode = {isDarkMode}/>,
    dashboard: <Dashboard data = {userData} isDarkMode = {isDarkMode}/>,
  }

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };
  
  return(
    <>
      <div className="min-vh-100 d-flex" style={{
                backgroundColor: isDarkMode ? "#177b99" : "#FFFFFF",
                transition: "background-color 0.3s ease",
                overflow: 'hidden',
            }}>
                {/* {currentView !== 'dashboard' &&
                  <div
                    className="position-absolute"
                    style={{
                    top: "2rem",
                    left: "2rem",
                    }}>
                    <img
                        src = "https://cdn.esportfire-services.com/4b464327f4d23e4df04f3c63b729033e16d6386771791e9b02aa1c334b2f444e"
                        alt="Logo"
                        style={{
                            height: "180px",
                            width: "auto",
                            transition: "filter 0.3s ease",
                        }}
                    />
                </div>
                } */}
                {/* toggle dark mode */}
                <button
                    onClick={toggleTheme}
                    className="position-absolute border-0 bg-transparent"
                    style={{
                    top: "2rem",
                    right: "2rem",
                    cursor: "pointer",
                    color: isDarkMode ? "#FFFFFF" : "#013220",
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.5";
                    }}
                    onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    }}
                >
                    {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                {isLoading &&
                <div className='justify-content-center d-flex align-items-center w-100'>
                  <div className='spinner-wrapper'>
                    
                    <CircularProgressbar value={50} styles={isDarkMode? buildStyles({
                          pathColor : 'rgb(0, 0, 0)'
                      }):
                        buildStyles({
                          pathColor : 'rgb(0, 61, 102)'
                      })
                      }/>
                    
                  </div>
                </div>
                }
                {!isLoading && (views[currentView] || views['auth'])}
        </div>
    </>
  )
}

export default App
