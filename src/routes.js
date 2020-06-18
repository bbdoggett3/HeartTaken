import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Features from './components/Features/Features';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';

export default(
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/register" component={Register}/>
        <Route path="/features" component={Features}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/updateProfile" component={UpdateProfile}/>
    </Switch>
);