import React from 'react';
import './Home.css';
import Video from './Video/HeroSection';
import Footer from './Footer/Footer';
import Cards from './Card/Cards';
const Home = () => {
    return (
        <>
            <Video />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;
