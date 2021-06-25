import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Ranking from "../Components/Ranking/Ranking";
import Search from "../Components/Search/Search";
import Factors from "../Components/Factors/Factors";
import Logout from "../Components/Account/Logout/Logout";
import Logo from "../Logo/Logo";
import { AccountBox } from "../Components/Account/account"
import Home from "../Home/Home";
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavLinkHome
} from './NavBar';
import "../App.css"

const Nagivation = () => {
    const [isLoggedIn, setLogIn] = useState(false);

    return (
        <div className="background-app">
            <Nav>
                <NavLinkHome to='/'><Logo /></NavLinkHome>
                <NavMenu>
                    <NavLink to='/ranking' activeStyle>Ranking</NavLink>
                    <NavLink to='/search' activeStyle>Searh</NavLink>
                    <NavLink to='/factors' activeStyle>Factors</NavLink>
                </NavMenu>
                <NavBtn>
                    {!isLoggedIn && (<NavBtnLink to='/account'>Login/Register</NavBtnLink>)}
                    {isLoggedIn && (<NavBtnLink to='/logout'>Logout</NavBtnLink>)}
                </NavBtn>
            </Nav>
            <Switch>
                <Route path="/ranking"><Ranking /></Route>
                <Route path="/search" ><Search /></Route>
                <Route path="/factors"><Factors isLoggedIn={isLoggedIn} /></Route>
                <Route path="/logout"><Logout setLogIn={setLogIn} /></Route>
                <Route path="/account"><AccountBox setLogIn={setLogIn} /></Route>
                <Route exact path='/' ><Home /></Route>
            </Switch>
        </div>
    );
};

export default Nagivation;