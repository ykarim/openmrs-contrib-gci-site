import React, { Component } from 'react';
import Navbar from "../NavigationBar/navigationBar";
import Footer from "../Footer/Footer";
import './homePage.css';

export default class Home extends Component {
  render(){
    return (
      <React.Fragment>
        <div>
          <Navbar />
        </div>
        <div className="randomPadding">
          <h1>This is the body for the site!</h1>
        </div>
        <div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
