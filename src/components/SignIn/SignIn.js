import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import "./SignIn.css"

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        }
    }
    render() {
        return(
            <div>
                <Nav/>
                <p>SignIn Component</p>
            </div>
        )
    }

}

export default SignIn;