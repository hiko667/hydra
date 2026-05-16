import {  useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import type { ProjectGraphData } from "./Dashboard";
import type { ProjectNodeData } from "./Dashboard";


interface NodeModalProps{
    show : boolean;
    isDarkMode : boolean;
    onHide : () => void;
    project : ProjectGraphData;
    node : ProjectNodeData;
}
export default function NodeModal({show, isDarkMode, onHide, project, node} : NodeModalProps){
    const [isAddingChildren, setIsAddingChildren] = useState(false);
    const handleOnHide = () => {
        onHide();
    }
    return(
        <>  <Modal
            show = {show} onHide={handleOnHide} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static">
                <div className ={`rounded ${isDarkMode ? 
                    "bg-black text-white" :
                    "bg-white text-black"
                }`}>
                    <Modal.Header closeButton closeVariant={isDarkMode ? "white" : "black"}>
                        <Modal.Title id="contained-modal-title-vcenter">
                                {project.name} - {node.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{node.description}</p>
                        {node.group !== "head" && <Button>Add Child</Button>}
                        {isAddingChildren && 
                        <div>
                            
                        </div>} 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleOnHide}>Close</Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}