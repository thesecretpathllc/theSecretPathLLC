// returns Education, Work Experience, and Skill info from resumeData.json object
import React, { Component } from 'react';

class Resume extends Component {
  render() {
// assign variables to props pulled from json object 
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      // maps education data for education section
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      //maps work data for work section
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      //maps skills data for skill section
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }
// returns Education, Work Experience, and Skill info from resumeData.json object data pulled and styled above.
    return (
      <section id="resume">

         {/* work section displayed */}
      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Background</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
        {/* education section displayed */}
      {/* <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div> */}

     
    </div>


{/* Skills section displayed */}
      {/* <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col"> */}


				{/* <div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div> */}
			{/* </div>
      </div> */}
   </section>
    );
  }
}

export default Resume;
