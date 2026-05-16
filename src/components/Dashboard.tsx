import { useState } from "react";
import NavBar from "./NavBar";
import NewProjectModal from "./NewProjectModal";
import ForceGraph from "react-force-graph-2d";
import type { UserData } from "../App";

import ProjectGraph from "./ProjectGraph"
interface DashboardProps {
    data : UserData;
    isDarkMode: boolean;
}

export interface ProjectGraphData {
    id? : number;
    name? : string;
}

let globalProjects : ProjectGraphData[] = [{id: 1, name: "Project A"}, {id: 2, name: "Project B"}]

const fetchProjects = () : ProjectGraphData[] => {
        return globalProjects;
    };


export default function Dashboard({data, isDarkMode} : DashboardProps){
    const [isProfileModal, setIsProfileModal] = useState(false);
    const [isOrganizationsModal, setIsOrganizationsModal] = useState(false);
    const [isNewProjectModal, setIsNewProjectModal] = useState(false);
    const [currentProject, setCurrentProject] = useState<ProjectGraphData>();
    const [projects, setProjects] = useState(fetchProjects());

    
    const swtichCurrentProject = (projectKey : number | undefined, projectName : string | undefined) => {
        setCurrentProject({id : projectKey, name : projectName});
    }
    const toggleProfileModal = () => {
        setIsProfileModal(!isProfileModal);
    }
    const onNodeClicked = (nodeId : string) => {
        console.log(nodeId);
    }
    const onNewProject = () => {
        setIsNewProjectModal(true);
    }
    const handleNewProject = (id : number) => {
        const mockId = Math.floor(Math.random() * 1000); 
        globalProjects.push({id: mockId, name : "example"});
        setProjects(fetchProjects);
    }
    return(
        <>
            <NavBar data = {data} isDarkMode={isDarkMode} projects = {projects} onOpenNewProjectModal={onNewProject} onSwitchCurrentProject={swtichCurrentProject} onOpenProfileModal={toggleProfileModal}></NavBar>
            {currentProject?.id !==undefined &&
            <>

                <div className="bg-transparent flex" style={{overflow: "hidden", height: "100vh"}}>
                    <h1 style={{color: isDarkMode ? "#FFFFFF" : "#013220", padding: '15px'}}>{currentProject.name}</h1> 
                    <ProjectGraph graph = {currentProject} onNodeClicked={onNodeClicked}></ProjectGraph>
                    
                </div>
            </>}
            <NewProjectModal isDarkMode = {isDarkMode} show = {isNewProjectModal} handleNewProject={handleNewProject} 
            onHide={() => setIsNewProjectModal(false)} userEmail={data.email}/>
        </>
    );
}