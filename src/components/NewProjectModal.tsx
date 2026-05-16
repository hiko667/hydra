import {  useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { X } from "lucide-react";

interface NewProjectModalProps {
    show : boolean;
    isDarkMode : boolean;
    onHide : () => void;
    userEmail : string;
    handleNewProject : (id : number) => void;
}

interface NewProjectData {
    name : string;
    bodyName : string;
    email : string;
    users : string[];
}

export default function NewProjectModal({show, isDarkMode, onHide, userEmail, handleNewProject} : NewProjectModalProps){
    const [formData, setFormData] = useState<NewProjectData>({
        name : "",
        bodyName : "",
        email : "",
        users : [userEmail],
    });
    const [errorMessage, setErrorMessage] = useState("Wrong format");
    const [showEmailError, setShowEmailError] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
    const handleOnHide = () =>{
        cleanInput();
        onHide();
    }
    const cleanInput = () => {
        setShowEmailError(false);
        setFormData({name : "", bodyName : "", email : "", users : [userEmail]})
    }
    const addUser = () => {
        const email = formData.email.trim();
        if (email !== "" && email.includes("@") && !formData.users.includes(email)) {
            setShowEmailError(false)
            setFormData({
                ...formData,
                users : [...formData.users, email], 
                email : ""
        })}
        else if (formData.users.includes(email)){
            setErrorMessage("Emails must not repeat")
            setShowEmailError(true);

        }else{
            setErrorMessage("Wrong format. Try again")
            setShowEmailError(true);
        }
    }
    const removeUser = (indexToRemove: number) => {
    setFormData({
        ...formData,
        users: formData.users.filter((_, index) => index !== indexToRemove)
    });
    
};
    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
        if(formData.users.length <= 0){
            setErrorMessage("There must be at least one contributor")
            setShowEmailError(true);
        }
        e.preventDefault();
        
        const newProjectId : number = 6767; //hardcoded for now
        cleanInput();
        handleNewProject(newProjectId);
        onHide();

    }
    return(
        <>
            <Modal show = {show} onHide={handleOnHide} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static">
                <div className ={`rounded ${isDarkMode ? 
                    "bg-black text-white" :
                    "bg-white text-black"
                }`}>
                    <Modal.Header closeButton closeVariant={isDarkMode ? "white" : "black"}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            NEW PROJECT
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="newProjectName" className="mt-3">
                                <Form.Label>New Project Name</Form.Label>
                                <Form.Control
                                required
                                type="text"
                                placeholder="Example: My New Project etc."
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

                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="bodyNodeName" className="mt-3">
                                <Form.Label>Name your body note</Form.Label>
                                <Form.Control
                                required
                                type="text"
                                placeholder="Example: The Aplication, The Website etc."
                                name="bodyName"
                                value={formData.bodyName}
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
                                </Form.Control>
                            </Form.Group>

                            <div className="mt-2">
                                <h3>Contributors:</h3>
                                {formData.users.map((email, index) => (
                                    <span key={index} className="badge bg-primary me-1 d-inline-flex align-items-center" 
                                    style={{padding: "5px"}}>{email} 
                                    <button 
                                    type="button"
                                    onClick={() => removeUser(index)}
                                    className={`bg-transparent border-0 ${
                                    isDarkMode ? "text-white" : "text-black"
                                    }`}>
                                        <X size={14}></X>
                                    </button></span>
                                ))}
                            </div>
                            <Form.Group controlId="email" className="mt-3">
                                <Form.Label>Add Contributors</Form.Label>
                                <Form.Control
                                type="email"
                                placeholder="me@example.com"
                                name="email"
                                value={formData.email}
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
                                </Form.Control>
                                {showEmailError && <p style={{color : 'red', opacity : 0.5}}>{errorMessage}</p>}
                                <Button className={`bg-transparent border ${
                                    isDarkMode ? "text-white" : "text-black"
                                    }`}
                                    onClick={addUser}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = "0.5";
                                    }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = "1";
                                    }}>
                                    Add User
                                </Button>
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100 mb-3"
                                style={{
                                    backgroundColor: isDarkMode
                                    ? "#FFFFFF"
                                    : "#177b99",
                                    borderColor: isDarkMode
                                    ? "#FFFFFF"
                                    : "#177b99",
                                    color: isDarkMode ? "#013220" : "#FFFFFF",
                                    borderRadius: "0.5rem",
                                    padding: "10px",
                                    fontWeight: "500",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = "0.5";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = "1";
                                }}
                                >
                                    Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* placeholder */}
                        <p>Learn <a href="https://scontent.fqyy1-1.fna.fbcdn.net/v/t39.30808-6/497855375_4006275769689015_6134049614174476755_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=aSJC_xPckgAQ7kNvwHSR7uc&_nc_oc=Adpa_jnMBIS87gfG2EQRxzV_wwl-vRXqccaxKfaNHGLrFvo8DHvNDZL5KALHxuGD12Q&_nc_zt=23&_nc_ht=scontent.fqyy1-1.fna&_nc_gid=kRHjwB11371Bw9-eJKsvrA&_nc_ss=7b2a8&oh=00_Af74vVsjCyXYMHJ5XXVx9Wd927datr5183-RuD51dnZprw&oe=6A0BF058">how we colect data</a></p>
                        <Button onClick={handleOnHide}>Close</Button>
                    </Modal.Footer>
                </div>
            </Modal>

        </>
    )
}

