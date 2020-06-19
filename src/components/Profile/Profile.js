import React, { Component } from "react";
import "./Profile.css";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Nav from "../Nav/Nav";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      profilePic: "",
      isDone: false,
      dailyGoal: "",
      wheelChart: "",
    };
  }
  render() {
    return (
      <div className="profile-container">
        <Nav />
        <div className="profile-content">
            <div className="goal-content">
            <p>Profile Component</p>
            <p>test</p>
            </div>
          <p>*WheelChart Here*</p>

          <UpdateProfile
            username={this.state.username}
            password={this.state.password}
            profilePic={this.state.profilePic}
          />
        </div>
        <div className="goal-btns-container">
        <button className="goal-btn">Affirmation</button>
            <button className="goal-btn">Gifts</button>
            <button className="goal-btn">Quality Time</button>
            <button className="goal-btn">Service</button>
            <button className="goal-btn">Touch</button>
        </div>
      </div>
    );
  }
}

export default Profile;
