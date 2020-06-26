import React, { Component } from "react";
import "./Profile.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { logoutUser } from "../../ducks/reducer";
import axios from "axios";
import Chart from '../Chart/Chart'

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
      this.setState({dailyGoal: res.data, isDone: false})
    })
  }

  logout = () => {
    axios.delete("/auth/logout").then(() => {
      console.log(this.props);
      this.props.logoutUser();
      this.props.history.push("/");
    });
  };

  handleCheckBoxClick = () => {
    if(!this.state.isDone){
      console.log(this.state.dailyGoal)
      axios.put(`/api/update/${this.state.dailyGoal.goal_type_id}`)
      .then(res => this.setState({isDone: !this.state.isDone}))
      .catch(error => console.log(error))
    }
  }

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
            {this.state.dailyGoal.goal
             ? <p className="goal-populate-box"><span id="goal">{this.state.dailyGoal.goal}</span></p>
             : <p className="goal-populate-box">Goal will appear here...</p>}
              <input onClick={this.handleCheckBoxClick} className="checkbox-btn" type="checkbox" />
            </div>
          </div>
          <Chart dailyGoal={this.state.dailyGoal.goal}
                  isDone ={this.state.isDone}/>
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
