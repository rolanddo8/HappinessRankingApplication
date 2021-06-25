import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton
} from "../common";
import { Marginer } from "../Marginer/marginer";
import { AccountContext } from "../accountContext";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const URL = "http://131.181.190.87:3000/user/login";

export function LoginForm({ setLogin }) {
    const { switchToRegister } = useContext(AccountContext);
    const history = useHistory();
    const [account, setAccount] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);

    const loginHandler = async () => {
        try {
            const token = await axios.post(URL, { email: account.email, password: account.password })
            localStorage.setItem("token", token.data.token)
            setLogin(true)
            history.push('/')
        }
        catch {
            setError(true);
        }

    }

    const acccountLoginHandler = (e, field) => {
        const value = e.target.value;
        setAccount(prev => ({ ...prev, [field]: value }))
    }

    return (
        <>
            <Modal
                show={error}
                onHide={() => setError(null)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title color="red">Email or password is incorrect!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please try to login your account again!!!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setError(null)} > Continue</Button>
                </Modal.Footer>
            </Modal>
            <BoxContainer>
                <FormContainer>
                    <Input type="email" placeholder="Email" onChange={(e) => acccountLoginHandler(e, "email")} value={account.email} />
                    <Input type="password" placeholder="Password" onChange={(e) => acccountLoginHandler(e, "password")} value={account.password} />
                </FormContainer>
                <Marginer direction="vertical" margin={10} />
                <Marginer direction="vertical" margin="1.6em" />
                <SubmitButton type="submit" onClick={loginHandler} value="Login">Login</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">Do not have an account?</MutedLink>
                <BoldLink href="#" onClick={switchToRegister}>
                    Register
                </BoldLink>
            </BoxContainer>
        </>
    );
}