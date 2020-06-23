import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./UpdateProfile.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../../ducks/reducer";
import axios from "axios";

class UpdateProfile extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      profile_pic: "",
    };
  }

  componentDidMount = () => {
    const {username, profile_pic} = this.props
    this.setState({username, profile_pic})
  } 

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updateProfile = (event) => {
    event.preventDefault();
    const { username, profile_pic} = this.state;
    const {id, history} = this.props;
    const body = { username, profile_pic };

    axios
      .put(`/auth/update/${id}`, body)
      .then((res) => {
        this.props.updateUser(res.data);
        history.push("/profile")
      })
      .catch((error) => alert(error, "Could not update profile at this time"));
  };

  render() {
    const { username, profile_pic } = this.state;

    return (
      <div className="updateProfile-container">
        <Nav />
        <div className="updateProfile-content">
          <p className="update-title-content">Update Profile</p>
          {/* This is where I can update my profile pic */}
          <form className="update-form-content" onSubmit={this.updateProfile}>
          <input
            className="file-btn"
            value={profile_pic}
            name="profile_pic"
            type="text"
            onChange={this.changeHandler}
            ref={(fileInput) => (this.fileInput = fileInput)}
          />
            <img
              onClick={() => this.fileInput.click()}
              className="update-profile-pic"
              src={this.props.profile_pic}
              alt="profile"
            />
            {/* This is the user input fields to update their profile */}
            <p>{this.props.username}</p>
            <input
              className="update-input-box"
              placeholder="New Username"
              type="text"
              name="username"
              value={username}
              onChange={(event) => this.changeHandler(event)}
            />

            {/* This is where the buttons are clicked in order to update the user */}
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

export default connect(mapToStateProps, { updateUser })(UpdateProfile);
