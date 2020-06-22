import React, { Component } from "react";
import "./Profile.css";
import Nav from "../Nav/Nav";
import { connect } from "react-redux";
import { logoutUser } from "../../ducks/reducer";
import axios from "axios";

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

  logout = () => {
    axios.delete("/auth/logout").then(() => {
      console.log(this.props);
      this.props.logoutUser();
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="profile-container">
        <Nav />
        <div className="profile-content">
          <div className="goal-content">
            <p className="paragraph-content-profile">
              <span className="pink-span">{this.props.username}</span>, ready
              for your HeartTaken Daily Goal?{" "}
              <span className="blue-span">Click a button below to start!</span>
            </p>
            <div className="row-appearance-check-container">
              <p className="goal-populate-box">Your Goal will appear here...</p>
              <input className="checkbox-btn" type="checkbox" />
            </div>
          </div>
          <p>*WheelChart Here*</p>
        </div>
        <div className="goal-btns-container">
          <button className="goal-btn">Affirmation</button>
          <button className="goal-btn">Gifts</button>
          <button className="goal-btn">Quality Time</button>
          <button className="goal-btn">Service</button>
          <button className="goal-btn">Touch</button>
        </div>
        <button onClick={() => this.logout()} className="logout-btn">
          Logout
        </button>
      </div>
    );
  }
}

const mapToStateProps = (reduxState) => reduxState;

export default connect(mapToStateProps, { logoutUser })(Profile);
