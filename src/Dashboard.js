import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <div>
          <Link to="/food">Order Food</Link>
        </div>
        <div>
          <Link to="/bookings">View Bookings</Link>
        </div>
      </div>
    )
  }
}
