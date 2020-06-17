import React, { Component } from 'react';

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
                <p>Register Component</p>
            </div>
        )
    }

}

export default Register;