import { useState } from "react";
import type { ViewName } from "../App";


import {
    Form,
    Button,
    Container,
    Row,
    Col,
} from "react-bootstrap";

interface LoginDataPayload {
    email : string;
    password : string;
}
interface RegisterDataPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface AuthFormProps {
    onLoginSuccess: () => void;
    isDarkMode: boolean;
}

function stringNvl(argument : any) : string{
    const nvl = argument === null ? "" : argument;
    return nvl;
}

export default function AuthForm({onLoginSuccess, isDarkMode} : AuthFormProps){
    const [isLogin, setIsLogin] = useState(true);
    
    const [rememberMe, setRememberMe] = useState(false);
    const [isPaswordError, setIsPasswordError] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: stringNvl(localStorage.getItem("email")),
        password: stringNvl(localStorage.getItem("password")),
        confirmPassword: "",
    });
    
    const cleanInput = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
        setIsPasswordError(false);
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
    async function handleSubmit (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (isLogin) {
            try{
                    const data: LoginDataPayload = {
                    email : formData.email,
                    password : formData.password
                };
                // const response = fetch();
                //mock token
                const result = {
                    status: "success",
                    token: "fake_token"
                }
                if(rememberMe){
                    localStorage.setItem("email", formData.email);
                    localStorage.setItem("password", formData.password);
                }
                cleanInput();
                sessionStorage.setItem("token", result.token);
                onLoginSuccess()
            }
            catch(error){

            }
            } else {
            if(formData.password !== formData.confirmPassword){
                setIsPasswordError(true);
            }else{
                try{
                    const data : RegisterDataPayload = {
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        password: formData.password
                    };
                    //const response = fetch();
                    
                }
                catch{

                }
                cleanInput();
                setIsLogin(true);
            }
            
        }
    };

    return(
        <> 
            <Container className="m-auto">
                <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={6} xl={5}>
                    <div
                    className="p-4 p-md-5"
                    style={{
                        backgroundColor: isDarkMode
                        ? "#000000"
                        : "#FFFFFF",
                        borderRadius: "0.5rem",
                        border: isDarkMode
                        ? "1px solid #FFFFFF"
                        : "1px solid #e9ecef",
                        transition: "all 0.3s ease",
                        color: isDarkMode ? "#FFFFFF" : "#212529",
                    }}
                    >
                    {/* Toggle between Login and Register */}
                    <div className="text-center mb-4">
                        <h2
                        className="mb-3"
                        style={{ fontWeight: "600" }}
                        >
                        {isLogin ? "Sign In" : "Create Account"}
                        </h2>
                    </div>

                    {/* Form */}
                    <Form onSubmit={handleSubmit}>
                        {!isLogin && (
                        <Row>
                            <Col md={6} className="mb-3">
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="Joe"
                                required
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
                                />
                            </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Mum"
                                required
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
                                />
                            </Form.Group>
                            </Col>
                        </Row>
                        )}

                        <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="me@example.com"
                            required
                            style={{
                            borderRadius: "0.5rem",
                            borderColor: isDarkMode
                                ? "#FFFFFF"
                                : "#ced4da",
                            backgroundColor: isDarkMode
                                ? "#000000"
                                : "#FFFFFF",
                            color: isDarkMode ? "#FFFFFF" : "#212529",
                            transition: "all 0.3s ease",
                            }}
                            onFocus={(e) => {
                            e.currentTarget.style.borderColor =
                                isDarkMode ? "#FFFFFF" : "#177b99";
                            e.currentTarget.style.boxShadow = `0 0 0 0.2rem ${isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(23, 123, 153, 0.25)"}`;
                            }}
                            onBlur={(e) => {
                            e.currentTarget.style.borderColor =
                                isDarkMode ? "#FFFFFF" : "#ced4da";
                            e.currentTarget.style.boxShadow = "none";
                            }}
                        />
                        </Form.Group>

                        <Form.Group
                        className="mb-3"
                        controlId="password"
                        >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            required
                            style={{
                            borderRadius: "0.5rem",
                            borderColor: isDarkMode
                                ? "#FFFFFF"
                                : "#ced4da",
                            backgroundColor: isDarkMode
                                ? "#000000"
                                : "#FFFFFF",
                            color: isDarkMode ? "#FFFFFF" : "#212529",
                            transition: "all 0.3s ease",
                            }}
                            onFocus={(e) => {
                            e.currentTarget.style.borderColor =
                                isDarkMode ? "#FFFFFF" : "#177b99";
                            e.currentTarget.style.boxShadow = `0 0 0 0.2rem ${isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(23, 123, 153, 0.25)"}`;
                            }}
                            onBlur={(e) => {
                            e.currentTarget.style.borderColor =
                                isDarkMode ? "#FFFFFF" : "#ced4da";
                            e.currentTarget.style.boxShadow = "none";
                            }}
                        />
                        </Form.Group>

                        {!isLogin && (
                        <Form.Group
                            className="mb-3"
                            controlId="confirmPassword"
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm your password"
                            required
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
                                : "#212529",
                                transition: "all 0.3s ease",
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor =
                                isDarkMode ? "#FFFFFF" : "#177b99";
                                e.currentTarget.style.boxShadow = `0 0 0 0.2rem ${isDarkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(23, 123, 153, 0.25)"}`;
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor =
                                isDarkMode ? "#FFFFFF" : "#ced4da";
                                e.currentTarget.style.boxShadow =
                                "none";
                            }}
                            />
                            {isPaswordError && <p style={{color : 'red', opacity : 0.5}}>Passwords need to be identical</p>}
                        </Form.Group>
                        )}

                        {isLogin && (
                        <Form.Group
                            className="mb-3"
                            controlId="rememberMe"
                        >
                            <Form.Check
                            type="checkbox"
                            label="Remember me"
                            checked={rememberMe}
                            onChange={(e) =>
                                setRememberMe(e.target.checked)
                            }
                            style={{
                                color: isDarkMode
                                ? "#FFFFFF"
                                : "#212529",
                            }}
                            />
                        </Form.Group>
                        )}

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
                            padding: "0.75rem",
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
                        {isLogin ? "Sign In" : "Create Account"}
                        </Button>

                        <div className="text-center">
                        <small
                            style={{
                            color: isDarkMode ? "#FFFFFF" : "#6c757d",
                            }}
                        >
                            {isLogin
                            ? "Don't have an account? "
                            : "Already have an account? "}
                            <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsLogin(!isLogin);
                                cleanInput();
                            }}
                            style={{
                                color: isDarkMode
                                ? "#FFFFFF"
                                : "#177b99",
                                textDecoration: "underline",
                                fontWeight: "500",
                            }}
                            >
                            {isLogin ? "Register here" : "Log in"}
                            </a>
                        </small>
                        </div>
                    </Form>
                    </div>
                </Col>
                </Row>
            </Container>       
            </>
    )
}