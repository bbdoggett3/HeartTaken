import React from 'react';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Nav from '../Nav/Nav';
import Features from '../Features/Features';
import About from '../About/About';
import Contact from '../Contact/Contact';

function Landing() {
    return(
        <div>
            <p>Landing Component</p>
            <Nav />
            <Features />
            <About />
            <Contact />
            <SignIn />
            <Register />
            <Profile />
        </div>
    )
}

export default Landing;