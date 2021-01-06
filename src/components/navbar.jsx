import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-light'>
        <h1 className='navbar-bred'>
          NavBar
          <span className='badge badge-dark m-2'>{this.props.numbers}</span>
        </h1>
      </nav>
    );
  }
}

export default NavBar;
