
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class UserList extends Component {
  constructor(props) {
      super(props);

      this.state = {

      }
  }

  renderItem(item, ind) {
    return (
        <div className="Repo">
            <img src={item.avatar_url} alt={item.login} width="100" height="100" />
          <h3>
            <Link to={'/user/' + item.login}>
              {item.login}
            </Link>
          </h3>
        </div>
    )
  }

  render() {
    const {
      items
    } = this.props

    const isEmpty = items.length === 0

    if (isEmpty) {
      return <h1><i>Nothing here!</i></h1>
    }

    return (
      <div className="user-list-container">
        {items.map(this.renderItem)}
      </div>
    )
  }
}
