import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./UpdateProfile.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from '../../ducks/reducer';
import axios from "axios";

class UpdateProfile extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            profile_pic: ""
        }
    }

    filesSelectedHandler = (event) => {
        console.log(event.target.files[0])
        this.setState({profile_pic: this.props.profile_pic})
        // const data = new FormData();
        // data.append('file', event.target.files[0]);
        // data.append('name', 'some value user types');
        // data.append('description', 'some value user types');
        // // '/files' is your node.js route that triggers our middleware
        // axios.post('/files', data).then((response) => {
        //   console.log(response); // do something with the response
        // });
    }

    changeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

    updateProfile = (id) => {
        const {username, profile_pic} = this.props
        const body = {username, profile_pic}

        axios.put(`/auth/update/${id}`, body)
        .then(res => {
            this.props.updateUser(res.data);
        }).catch((error) => alert(error, "Could not update profile at this time"))
      }

  render() {
    const { username } = this.props;

    return (
      <div className="updateProfile-container">
        <Nav />
        <div className="updateProfile-content">
          <p className="update-title-content">Update Profile</p>
        {/* This is where I can update my profile pic */}
          <input style={{display:"none"}} className="file-btn"type="file" onChange={this.filesSelectedHandler}
          ref={fileInput => this.fileInput = fileInput}/>
          <form className="update-form-content" onSubmit={this.updateProfile}>   
              <img  onClick={() => this.fileInput.click()} className="update-profile-pic" src={this.props.profile_pic} alt="profile"/>
        {/* This is the user input fields to update their profile */}
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

export default connect(mapToStateProps, {updateUser})(UpdateProfile);
