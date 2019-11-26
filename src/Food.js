import React, { Component } from 'react'
import axios from "axios";
export default class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validationError: {
        date:true,
        time: true,
        venue: true,
        vegCount: true,
        nonvegCount: true,
      },
      foodDetails: {
        date: "",
        time: "",
        venue: "",
        vegCount: "",
        nonvegCount: "",
      },
      disabled: true,
      bookings: null,
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        // this.setState({
        //   bookings: res.data
        // })
        console.log("res delete", res)
      })
      .catch((err) => console.log("err", err))

  }
  getBookings = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      this.setState({
        bookings: res.data
      })
      console.log("res get", res.data)
    })
    .catch((err) => console.log("err", err))

  }
  handleChange = (e) => {
    const { date, time, venue, vegCount, nonvegCount } = this.state.foodDetails

    this.setState({
      foodDetails: {
        ...this.state.foodDetails,
        [e.target.name]: e.target.value
      }
    })

  }
 
  validateDate = (e) => {
    console.log("e", e.target.value)
  }
  render() {
    const { date, time, venue, vegCount, nonvegCount } = this.state.foodDetails
    // const { disabled } = this.state;
    let disabled = true;
    if (date && time && venue && vegCount && nonvegCount) {
      console.log("make disable as false now")
      disabled = false
    }
    console.log("state", this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Date</label>
            <input type="date" name="date" value={date} onChange={this.handleChange} onKeyPress={this.validateDate} />
          </div>
          <div>
            <label htmlFor="">Time</label>
            <input type="time" name="time" value={time} onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="">Venue</label>
            <input type="text" name="venue" minLength="5" value={venue} onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="">Veg Count</label>
            <input type="number" name="vegCount" min="1" max="5" value={vegCount} onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="">Nonveg Count</label>
            <input type="text" name="nonvegCount" min="1" max="5" value={nonvegCount} onChange={this.handleChange} />
          </div>

          <button onClick={this.getBookings} type="button">Test Get</button>
          <button type="submit" disabled={disabled}>Book Dinner</button>
        </form>
        <div>
          {this.state.bookings && this.state.bookings.title}
        </div>
      </div>
    )
  }
}
