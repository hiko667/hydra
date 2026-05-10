import {User, Building2, Plus, Ellipsis} from "lucide-react";
import { useState } from "react";
import { Button } from "react-bootstrap";

interface NavBarProps {
    firstName? : string;
    lastName? : string;
    profilePicture? : string;
    isDarkMode: boolean;
    onOpenProfileModal?: () => void;
    onOpenOrganizationsModal?: () => void;
    onOpenNewProjectModal?: () => void; 
    onSwitchCurrentProject: (project : string, projectName : string) => void;
    onOpenProjectModal?: () => void; 
}

export default function NavBar({firstName = "Name", lastName = "Unknown", profilePicture = "../../public/placeholder_pfp.webp", 
    isDarkMode, onOpenProfileModal, onOpenNewProjectModal, onOpenOrganizationsModal, 
    onSwitchCurrentProject, onOpenProjectModal} : NavBarProps){
    
    const fetchProjects = () => {
        return {
            x2137 : "Project A",
            y2137: "Project B",
            z2137: "Project C"
        }
    };
    const handleNewProject = () => {
        console.log("NewProject");
    }
    const [projects, setProjects] = useState(fetchProjects);
    const updateProjects = () => {
        setProjects(fetchProjects());
    }
    return(
        <>
            <div className={`min-wh-20 border-end border-dark h-full w-[20%] flex flex-col p-6 border-r ${
            isDarkMode
                ? "text-white border-gray-800"
                : "text-black border-gray-200"
            }`}
            style={{overflow:'hidden', minWidth: '15vw', maxWidth: '15vw', padding: '5px', backgroundColor: isDarkMode ? "#000000" : "#177b99"}}>
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-center w-100">
                        <button className="bg-transparent border-0">
                            <img className="w-50 rounded-circle justify-center"
                            src={profilePicture}
                            alt = "Profile Picture"
                            style={{padding: '15px'}}
                            onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "0.5";
                            }}
                            onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "1";
                            }}/>
                            
                        </button>
                    </div>
                    <h3>{`${firstName} ${lastName}`} </h3>
                    <div className="w-100">
                        <nav className={`mb-4 pb-4 border-bottom border-dark d-flex flex-column align-items-center ${
                        isDarkMode ? "border-gray-800" : "border-gray-200"
                        }`}>
                            <ul className="list-unstyled">
                                <li>
                                    <button className={`bg-transparent border-0 ${
                                    isDarkMode ? "text-white" : "text-black"
                                    }`}
                                    style={{padding: '10px'}}
                                    onClick={() => {
                                        onOpenProfileModal;
                                    }}
                                    onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = "0.5";
                                    }}
                                    onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = "1";
                                    }}
                                    >
                                    <User></User>
                                    <span style={{padding: '10px'}}>Profile</span>
                                    </button>
                                </li>
                                <li>
                                    <button className={`bg-transparent border-0 ${
                                    isDarkMode ? "text-white" : "text-black"
                                    }`}
                                    style={{padding: '5px'}}
                                    onClick={() => {
                                        onOpenOrganizationsModal;
                                    }}
                                    onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = "0.5";
                                    }}
                                    onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = "1";
                                    }}
                                    >
                                    <Building2></Building2>
                                    <span style={{padding: '5px'}}>Organization</span>
                                    </button>
                                </li>
                            </ul>
                            
                        </nav>
                    </div>
                    <div className="w-100 d-flex flex-column align-items-center">
                        <h3>Projects</h3>
                        <ul className="list-unstyled">
                            {Object.entries(projects).map(([pKey, pName]) => (
                                <li key={pKey}>
                                    <button key = {pKey}
                                        className={`bg-transparent border-0 ${
                                        isDarkMode ? "text-white" : "text-black"
                                        }`}
                                        onClick={() => onSwitchCurrentProject(pKey, pName)}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.opacity = "0.5";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.opacity = "1";
                                        }}>
                                        {pName}
                                    </button>
                                    <button  key = {pKey}
                                        className={`bg-transparent border-0 ${
                                        isDarkMode ? "text-white" : "text-black"
                                        }`}
                                        onClick={() => onOpenProjectModal}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.opacity = "0.5";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.opacity = "1";
                                        }}>
                                        <Ellipsis></Ellipsis>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button
                        className={`mt-6 w-full flex items-center justify-center space-x-2 py-3 px-4 rounded font-medium transition-colors ${
                            isDarkMode
                            ? "bg-white text-black hover:bg-gray-200"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                        onClick={handleNewProject}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "0.5";
                            }}
                            onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "1";
                            }}
                        >
                            <Plus size={20} />
                            <span>NEW PROJECT</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}