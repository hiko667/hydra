import { useState } from "react";
import NavBar from "./NavBar";
import ForceGraph from "react-force-graph-2d";

import ProjectGraph from "./ProjectGraph"
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
    const onNodeClicked = (nodeId : string) => {
        console.log(nodeId);
    }

    return(
        <>
            <NavBar isDarkMode={isDarkMode} onSwitchCurrentProject={swtichCurrentProject} onOpenProfileModal={toggleProfileModal}></NavBar>
            {currentProject[0] !== "" &&
            <>
                <div className="bg-transparent flex" style={{overflow: "hidden", height: "100vh"}}>
                    <h1 style={{color: isDarkMode ? "#FFFFFF" : "#013220", padding: '15px'}}>{currentProject[1]}</h1>
                    <ProjectGraph onNodeClicked={onNodeClicked}></ProjectGraph>
                </div>
            </>}
            
        </>
    );
}