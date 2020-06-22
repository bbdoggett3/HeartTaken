import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./UpdateProfile.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UpdateProfile extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            image: ""
        }
    }

    changeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

      update = () => {
        
      }

  render() {
    const { username } = this.props;

    return (
      <div className="updateProfile-container">
        <Nav />
        <div className="updateProfile-content">
          <p className="update-title-content">Update Profile</p>
          {/* MAKE SURE TO ADD THE UPDATE ON SUBMIT BELOW ON LINE 36 REFER TO OTHER CODE */}
          <form className="update-form-content">   
              <img className="update-profile-pic" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fme.jpg?v=1569425179160" alt="profile"/>
            <input
              className="update-input-box"
              placeholder={this.props.username}
              type="text"
              name="username"
              value={username}
              onChange={(event) => this.changeHandler(event)}
            />
            <input
              className="update-input-box"
              placeholder="New Username"
              type="text"
              name="username"
            //   value={username}
              onChange={(event) => this.changeHandler(event)}
            />
            <div className="update-form-btns">
              <input
                className="update-form-blue-btn"
                type="submit"
                value="Update"
              />
              <Link to="/profile">
                <input
                  className="update-form-blue-btn"
                  type="button"
                  value="Back"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapToStateProps = (reduxState) => reduxState;

export default connect(mapToStateProps)(UpdateProfile);
