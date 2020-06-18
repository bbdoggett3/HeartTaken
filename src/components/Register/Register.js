import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Register extends Component {
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
                <p>Register Component</p>
            </div>
        )
    }

}

export default Register;