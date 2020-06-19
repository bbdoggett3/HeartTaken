import React, { Component } from 'react';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
import Nav from '../Nav/Nav';


class Profile extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            profilePic: "",
            isDone: false,
            dailyGoal: "",
            wheelChart: ""
        }
    }
    render() {
        return(
            <div>
                <Nav/>
                <p>Profile Component</p>
                <UpdateProfile 
                    username = {this.state.username}
                    password = {this.state.password}
                    profilePic = {this.state.profilePic}
                /> 
            </div>
        )
    }

}

export default Profile;