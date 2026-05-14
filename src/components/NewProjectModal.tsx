import { useState } from "react";
import { Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

interface NewProjectModalProps {
    show : boolean;
    onHide : () => void;
    userEmail : string;
}
interface NewProjectData {
    name : string;
    bodyName : string;
    users : string[];
}

export default function NewProjectModal({show, onHide, userEmail} : NewProjectModalProps){
    const [formData, setFormData] = useState<NewProjectData>({
        name : "",
        bodyName : "",
        users : [userEmail],
    });

    return(
        <>
            <Modal show = {show} onHide={onHide} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Header closeButton>  
                    <Modal.Title id="contained-modal-title-vcenter">
                        NEW PROJECT
                    </Modal.Title>
                </Modal.Header>   
                <Modal.Body>
                    <Form>

                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

        </>
    )
}

