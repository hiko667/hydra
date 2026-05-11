import { useState, type JSX } from 'react'
 import { Sun, Moon } from "lucide-react";

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './spinner.css';

import './App.css'
import AuthForm from './components/AuthForm'
import Dashboard from './components/Dashboard'

export type ViewName = 'auth' | 'dashboard';

function App() {
  const handleLoginSucces = async () => {
      setIsLoading(true);
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        console.log(result);
        setCurrentView('dashboard');
      }
      catch (error){

      }
      finally{
        setIsLoading(false);
      }
  }

  const [currentView, setCurrentView] = useState<ViewName>('auth');
  const [userData, setUserData] = useState<any>(null);
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
      <div className="min-vh-100 d-flex position-relative" style={{
                backgroundColor: isDarkMode ? "#177b99" : "#FFFFFF",
                transition: "background-color 0.3s ease",
            }}>
                {currentView !== 'dashboard' &&
                  <div
                    className="position-absolute"
                    style={{
                    top: "2rem",
                    left: "2rem",
                    }}>
                    {/* <img
                        src = {isDarkMode? "../../public/favicon2.svg" : "../../public/favicon.svg"}
                        alt="Logo"
                        style={{
                            height: "180px",
                            width: "auto",
                            transition: "filter 0.3s ease",
                        }}
                    /> */}
                </div>
                }
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
                  <div className='spinner-wrapper d-flex align-items-center justify-content-center position-relative'>
                    <CircularProgressbar 
                      value={65} 
                      counterClockwise = {true} 
                      styles={isDarkMode? buildStyles({
                        pathColor : 'rgb(0, 0, 0)'
                    }):
                      buildStyles({
                        pathColor : 'rgb(24, 102, 0)'
                    })
                    }/>
                  </div>}

                  {!isLoading && (views[currentView] || views['auth'])}
        </div>
    </>
  )
}

export default App
