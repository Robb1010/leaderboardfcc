import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <h1><img src={require('./images/freecodecamp_logo.svg')}
               alt="logo" height='40px' />
      </h1>
    )
  }
}

export default Header;
