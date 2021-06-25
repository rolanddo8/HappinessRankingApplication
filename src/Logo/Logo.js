import React from "react";
import homeLogo from "../media/home-icon.png";
import "./Logo.css";
const Logo = (props) => {
    return (
        <div className="Logo" style={{ height: props.height }}>
            <img src={homeLogo} alt="MyLogo" />
        </div>
    );

};

export default Logo;