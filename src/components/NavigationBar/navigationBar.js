import React, { Component } from 'react';
import './navigationBar.css';

export default class Navbar extends Component {

  url = {
    OpenMRS_URL : "https://openmrs.org/",
    OpenMRS_Image_URL : "https://camo.githubusercontent.com/93680c923c12178e9fa6b523b1bbb644d32f4039/68747470733a2f2f74616c6b2e6f70656e6d72732e6f72672f75706c6f6164732f64656661756c742f6f726967696e616c2f32582f662f663165633537396230333938636230346338306135346335366461323139623234343066653234392e6a7067",
  };

  render(){
    return (
      <header className="navbar">
        <nav className="navbar_contents">
          <div className="navbar_logo"><a href={this.url.OpenMRS_URL}  target="_blank" rel="noopener noreferrer"><img src={this.url.OpenMRS_Image_URL} alt="OpenMRS Logo" width="20%" height="60px"></img></a></div>
          <div className="navbar_contents-items">
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Tasks</a></li>
              <li><a href="/">Mentors</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
