import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as API from "./api";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        data: undefined,
        fetching: true
    }
    this.doGet = this.doGet.bind(this);
  }

  componentDidMount() {
    this.doGet();
  }

  componentDidUpdate() {
    this.doGet();
  }

  doGet() {
    var username = this.props.match && this.props.match && this.props.match.params.name ? this.props.match.params.name : "tom";  
    API.get("/users/" + username)
    .then(function(response) {
        this.setState({
            data: response.data,
            fetching: false
        })
    }.bind(this))
    .catch(function(err) {
        console.log("Error in fetching " + username + " Details");
    });
  }

  render() {
    var data = this.state.data;
    return (
        <div>
            {
                this.state.fetching 
                ? <div className="loading"> Fetching User Data ... </div>
                : (
                <div className="user-profile">
                    <img src={data.avatar_url} alt={data.login} width="250" height="250" />
                    <div className="user-details">
                        <div className="user-profile-name">{data.name}</div>
                        <div>
                            <span>GitHub URL:</span>
                            <span>{data.html_url}</span>
                        </div>
                        <div>
                            <span>Company Name: </span>
                            <span>{data.company}</span>
                        </div>
                        <div>
                            <span>Location: </span>
                            <span>{data.location}</span>
                        </div>
                        <div>
                            <span>No. of Public Repos: </span>
                            <span>{data.public_repos}</span>
                        </div>
                        <div>
                            <span>Followers: </span>
                            <span>{data.followers}</span>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
  }
}



