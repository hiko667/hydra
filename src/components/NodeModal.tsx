import {  useState } from "react";
import { Modal, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import type { ProjectGraphData } from "./Dashboard";
import type { ProjectNodeData } from "./Dashboard";

interface NewNodeData{
    name : string;
    parentId : number;
    description? : string;
    group : string;
}
interface NodeModalProps{
    show : boolean;
    isDarkMode : boolean;
    onHide : () => void;
    project : ProjectGraphData;
    node : ProjectNodeData;
}

export default function NodeModal({show, isDarkMode, onHide, project, node} : NodeModalProps){
    const [isAddingChildren, setIsAddingChildren] = useState(false);
    const [formData, setFormData] = useState<NewNodeData>({
        name : "",
        parentId : -1,
        group : "head",
        description : ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
    const cleanInput = () => {
        setFormData({name : "",
        parentId : -1,
        group : "head",
        description : ""})
    }
    const handleOnHide = () => {
        onHide();
        setIsAddingChildren(false);
        cleanInput();
    }
    async function handleSubmit() {
        
    }
    return(
        <>  <Modal
            show = {show} onHide={handleOnHide} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
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
                        {node.group !== "head" && 
                            <div className="d-grid gap-2">
                                <Button variant={isDarkMode ? "light" : "dark"} onClick={() => {setIsAddingChildren(!isAddingChildren)}}>Add Child?</Button>
                            </div>}
                        
                        {isAddingChildren && 
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup className="mt-3" controlId="newNodeName">
                                    <FormLabel>Name your new node</FormLabel>
                                    <FormControl
                                    required
                                    placeholder="Example: My new node etc."
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    style={{
                                        borderRadius: "0.5rem",
                                        borderColor: isDarkMode
                                        ? "#FFFFFF"
                                        : "#ced4da",
                                        backgroundColor: isDarkMode
                                        ? "#000000"
                                        : "#FFFFFF",
                                        color: isDarkMode
                                        ? "#FFFFFF"
                                        : "#177b99",
                                        transition: "all 0.3s ease",
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor =
                                        isDarkMode
                                            ? "#FFFFFF"
                                            : "#177b99";
                                        e.currentTarget.style.boxShadow = `0 0 0 0.2rem ${isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(23, 123, 153, 0.25)"}`;
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor =
                                        isDarkMode
                                            ? "#FFFFFF"
                                            : "#ced4da";
                                        e.currentTarget.style.boxShadow =
                                        "none";
                                    }}>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup controlId = "nodeType" className="mt-3">
                                    <FormLabel>Type</FormLabel>
                                    <div>
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Head"
                                            name="group"
                                            value="head"
                                            id="group-head"
                                            checked={formData.group === "head"}
                                            onChange={handleInputChange}
                                            className={isDarkMode ? "text-white" : "text-black"}
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Neck"
                                            name="group"
                                            value="neck"
                                            id="group-neck"
                                            checked={formData.group === "neck"}
                                            onChange={handleInputChange}
                                            className={isDarkMode ? "text-white" : "text-black"}
                                        />
                                    </div>
                                </FormGroup>
                                <FormGroup className="mt-3">
                                    <FormLabel>Description</FormLabel>
                                    <FormControl
                                        placeholder="Let loose of your imagination"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        as="textarea" rows={3}
                                        style={{
                                            borderRadius: "0.5rem",
                                            borderColor: isDarkMode
                                            ? "#FFFFFF"
                                            : "#ced4da",
                                            backgroundColor: isDarkMode
                                            ? "#000000"
                                            : "#FFFFFF",
                                            color: isDarkMode
                                            ? "#FFFFFF"
                                            : "#177b99",
                                            transition: "all 0.3s ease",
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.borderColor =
                                            isDarkMode
                                                ? "#FFFFFF"
                                                : "#177b99";
                                            e.currentTarget.style.boxShadow = `0 0 0 0.2rem ${isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(23, 123, 153, 0.25)"}`;
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.borderColor =
                                            isDarkMode
                                                ? "#FFFFFF"
                                                : "#ced4da";
                                            e.currentTarget.style.boxShadow =
                                            "none";
                                        }}
                                    >
                                    </FormControl>
                                </FormGroup>
                            </Form>
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