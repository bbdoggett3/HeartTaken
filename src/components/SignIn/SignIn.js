import React, { Component } from 'react';

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
                <p>SignIn Component</p>
            </div>
        )
    }

}

export default SignIn;