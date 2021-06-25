import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "./HeroSection.css";
import video from '../../media/video.mp4';
import { useHistory } from "react-router-dom";

function HeroSection() {
    const history = useHistory();
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            <h1>WELCOME TO THE HAPPINESS DATA WEBSITE</h1>
            <p>Ready to discover ?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                    onClick={() => { history.push('/account') }}
                >
                    LOGIN NOW
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    onClick={() => { history.push('/ranking') }}
                >
                    GET STARTED< i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
