/* eslint-disable no-undef */

import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import UserList from './UserList.js';
import * as API from './api.js';

export default class Search extends Component {
  constructor(props) {
      super(props);

      this.state = {
        data: undefined,
        fetching: false
      }

    this.handleGoClick = this.handleGoClick.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
  }

  getInputValue() {
    return this.input.value
  }

  setInputValue(val) {
    this.input.value = val
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
        this.handleGoClick()
    }
  }

  handleGoClick() {
    this.setState({fetching: true}, function() {
      API.get("/search/users?q=" + this.getInputValue())
      .then(function(response) {
          var total_count = response.data.total_count;
          var data = response.data.items;
          if (total_count > 20) {
              data = data.slice(0,20);
          }
          this.setState({
              data: data,
              fetching: false
          })
      }.bind(this))
      .catch(function(err) {
          console.log("Search User API Request Failed!!", err);
        })
      }.bind(this)
    )
  }

  render() {
    return (
      <div className="main-container">
        <input size="45"
               ref={(input) => this.input = input}
               defaultValue={this.props.value}
               onKeyUp={this.handleKeyUp} />
        <button onClick={this.handleGoClick}>
          Go!
        </button>
        {
          this.state.fetching ?
          <div className="loading"> Fetching User Data ... </div>
          : null
        }
        {
            this.state.data ?
            <UserList items={this.state.data} />
            : null
        }
      </div>
    )
  }
}
