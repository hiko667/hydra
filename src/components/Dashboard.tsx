import { useState } from "react";
import NavBar from "./NavBar";

interface DashboardProps {
    data : any;
    isDarkMode: boolean;
}



export default function Dashboard({data, isDarkMode} : DashboardProps){
    const [isProfileModal, setIsProfileModal] = useState(false);
    const [isOrganizationsModal, setIsOrganizationsModal] = useState(false);
    const [isNewProjectModal, setIsNewProjectModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(["", ""]);

    const swtichCurrentProject = (projectKey : string, projectName : string) => {
        setCurrentProject([projectKey, projectName]);
    }
    const toggleProfileModal = () => {
        setIsProfileModal(!isProfileModal);
    }
    return(
        <>
            <NavBar isDarkMode={isDarkMode} onSwitchCurrentProject={swtichCurrentProject} onOpenProfileModal={toggleProfileModal}></NavBar>
        {/* Project graph */}
        <div>
            {currentProject[0] !== "" &&
            <>
                <h1 style={{color: isDarkMode ? "#FFFFFF" : "#013220",}}>{currentProject[1]}</h1>
            </>}
        </div>
        </>
    );
}