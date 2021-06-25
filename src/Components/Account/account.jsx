import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./Login/Login";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { RegisterForm } from "./Register/Register";

const BoxContainer = styled.div`
  width: 350px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgb(14 61 177) 20%, rgb(18 188 243)
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30
};
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToRegister = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("register");
        }, 400);
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    };

    const contextValue = { switchToRegister, switchToSignin };

    return (
        <AppContainer>
            <AccountContext.Provider value={contextValue}>
                <BoxContainer>
                    <TopContainer>
                        <BackDrop
                            initial={false}
                            animate={isExpanded ? "expanded" : "collapsed"}
                            variants={backdropVariants}
                            transition={expandingTransition}
                        />
                        {active === "signin" && (
                            <HeaderContainer>
                                <HeaderText>Welcome</HeaderText>
                                <HeaderText>Back</HeaderText>
                                <SmallText>Please sign-in to continue!</SmallText>
                            </HeaderContainer>
                        )}
                        {active === "register" && (
                            <HeaderContainer>
                                <HeaderText>Create</HeaderText>
                                <HeaderText>Account</HeaderText>
                                <SmallText>Please sign-up to continue!</SmallText>
                            </HeaderContainer>
                        )}
                    </TopContainer>
                    <InnerContainer>
                        {active === "signin" && <LoginForm setLogin={props.setLogIn} />}
                        {active === "register" && <RegisterForm />}
                    </InnerContainer>
                </BoxContainer>
            </AccountContext.Provider>
        </AppContainer>
    );
}
