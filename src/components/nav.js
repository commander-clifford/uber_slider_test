import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  nav: {
    width: "fit-content",
    height: "fit-content",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: 99,
    boxShadow: "inset 0 0 4px rgba(0,0,0,0.5)",
    padding: "0 1em 0 0",

  },
  ul: {
    float: "left"
  }
};

{/* TODO: This could be DRY but is only a place holder at the moment */}

class Nav extends Component {

  render() {
    return (

      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li><Link to='/01'>0.1</Link></li>
          <li><Link to='/02'>0.2</Link></li>
          <li><Link to='/03'>0.3</Link></li>
        </ul>
        <ul style={styles.ul}>
          <li><Link to='/11'>1.1</Link></li>
          <li><Link to='/12'>1.2</Link></li>
          <li><Link to='/13'>1.3</Link></li>
          <li><Link to='/14'>1.4</Link></li>
        </ul>
        <ul style={styles.ul}>
          <li><Link to='/21'>2.1</Link></li>
          <li><Link to='/22'>2.2</Link></li>
          <li><Link to='/23'>2.3</Link></li>
          <li><Link to='/24'>2.4</Link></li>
        </ul>
      </nav>

    );
  }
}

export default Nav;
