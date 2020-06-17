import React, { Component } from 'react';
import UpdateProfile from '../UpdateProfile/UpdateProfile';


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