import {  useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


interface NodeModalProps{
    projectId : number;
    projectName : string;
    nodeId : number;
    nodeName : string;
    nodeGroup : string;
    nodeDescription? : string;
}
export default function NodeModal({projectId, projectName, nodeId, nodeName, nodeGroup, nodeDescription} : NodeModalProps){
    const [isAddingChildren, setIsAddingChildren] = useState(false);
    
}