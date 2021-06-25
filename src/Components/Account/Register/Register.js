import React, { useContext, useState } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "../common";
import { Marginer } from "../Marginer/marginer";
import { AccountContext } from "../accountContext";
import "./Register.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const URL = "http://131.181.190.87:3000/user/register";


export function RegisterForm() {
    const { switchToSignin } = useContext(AccountContext);
    const [account, setAccount] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const submitionHandler = async () => {
        try {
            await axios.post(URL, { email: account.email, password: account.password })
            switchToSignin();
        }
        catch {
            setError(true);
        }
    };
    const accountRegisterHandler = (e, field) => {
        const value = e.target.value;
        setAccount(prev => ({ ...prev, [field]: value }))
    };
    return (
        <>
            <Modal
                show={error}
                onHide={() => setError(null)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title color="red">Can not register the account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please try another email and password!!!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setError(null)} > Continue</Button>
                </Modal.Footer>
            </Modal>
            <BoxContainer className="Register">
                <FormContainer>
                    <Input type="email" placeholder="Email" onChange={(e) => accountRegisterHandler(e, "email")} value={account.email} />
                    <Input type="password" placeholder="Password" onChange={(e) => accountRegisterHandler(e, "password")} value={account.password} />
                </FormContainer>
                <Marginer direction="vertical" margin={10} />
                <SubmitButton type="submit" onClick={submitionHandler} value={"Submit"}>Signup</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">
                    Already have an account?
                    <BoldLink href="#" onClick={switchToSignin}>
                        Signin
                    </BoldLink>
                </MutedLink>
            </BoxContainer>
        </>
    );
}
