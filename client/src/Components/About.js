import React, { Component } from 'react';

class About extends Component {
  render() {
//pull in prop data from resumeData object and assigns to variable
    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var bio2 = this.props.data.bio2;
      var service1 = this.props.data.service1;
      var service2 = this.props.data.service2;
      var service3 = this.props.data.service3;
      var service4 = this.props.data.service4;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      
    }

    //Returns About Me section data
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Ashly Mayle Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About The Secret Path LLC</h2>

            <p>{bio}</p>
            <li>{service1}</li>
            <li>{service2}</li>
            <li>{service3}</li>
            <li>{service4}</li>
            <p>{bio2}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{state}<br />						         
                   </span>                  					  
                     <span>{email}</span>
					   </p>
               </div>
               
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
