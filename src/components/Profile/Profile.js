import React, { Component } from "react";
import "./Profile.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
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

  handleClick = ({currentTarget}) => {
    console.log(currentTarget.value)
    axios.get(`/api/goal/${currentTarget.value}`)
    .then(res => {
      console.log(res.data);
      this.setState({dailyGoal: res.data.goal})
    })
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
            {this.state.dailyGoal
             ? <p className="goal-populate-box">{this.state.dailyGoal}</p>
             : <p className="goal-populate-box">Goal will appear here...</p>}
              <input className="checkbox-btn" type="checkbox" />
            </div>
          </div>
          <p>*WheelChart Here*</p>
        </div>
        <div className="goal-btns-container">
          <button value={1} onClick={this.handleClick} className="goal-btn">Affirmation</button>
          <button value={2} onClick={this.handleClick} className="goal-btn">Gifts</button>
          <button value={3} onClick={this.handleClick} className="goal-btn">Quality Time</button>
          <button value={4} onClick={this.handleClick} className="goal-btn">Service</button>
          <button value={5} onClick={this.handleClick} className="goal-btn">Touch</button>
        </div>
        <button onClick={() => this.logout()} className="logout-btn">
          Logout
        </button>
        <Footer/>
      </div>
    );
  }
}

const mapToStateProps = (reduxState) => reduxState;

export default connect(mapToStateProps, { logoutUser })(Profile);
