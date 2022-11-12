import React, { Component } from 'react';

class Header extends Component {
  render() {
// pulls props from resumeData object and assigns them variables.
    if(this.props.data){
      var name = this.props.data.name;
      var intro = this.props.data.intro;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var state= this.props.data.address.state;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
      })
    }

    return (
      // assigns id to home - used to return to the top of the page from the bottom via button (like an anchor).
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
 {/* Add smooth scroll effect when selecting each menu option */}
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>
{/* Welcome message */}
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Welcome to <br></br>{name}.</h1>
            <h3> {intro} </h3>
            <hr />
            <ul className="social">
              {/* Pulls social network props */}
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
       );
       
  }
}

export default Header;
