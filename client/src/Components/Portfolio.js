import React, { Component } from 'react';

class Portfolio extends Component {
  // render below layout for portfolio projects
  render() {
    // map project props to use.
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        // assign image (via link) to projectImage variable.
        var projectImage = 'images/portfolio/' + projects.image;
        // returns project image with details. Project image wraps title, etc. data.
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            {/* Show project title on image with linkability */}
            <h1 align-text="center" id="portfolio-titles"><br></br>{projects.title}</h1>
            <a href={projects.url} title={projects.title} target="_blank">
              <img alt={projects.title} src={projectImage} />
              {/*Hover overlay  */}
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })

// Marketing Plans

if (this.props.data) {
      var marketing = this.props.data.marketing.map(function (marketing) {
        // assign image (via link) to projectImage variable.
        var marketingImage = 'images/marketing/' + marketing.image;
        // returns project image with details. Project image wraps title, etc. data.
        return <div key={marketing.title} className="columns portfolio-item">
          <div className="item-wrap">
             <h1 align-text="center"><br></br>{marketing.title}</h1>
            {/* Show project title on image with linkability */}
            <a href={marketing.url} title={marketing.title} target="_blank">
              <img alt={marketing.title} src={marketingImage} />
              {/*Hover overlay  */}
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{marketing.title}</h5>
                  <p>{marketing.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
 })
// Logos 

 if (this.props.data) {
      var logos = this.props.data.logos.map(function (logos) {
        // assign image (via link) to projectImage variable.
        var logosImage = 'images/logos/' + logos.image;
        // returns project image with details. Project image wraps title, etc. data.
        return <div key={logos.title} className="columns portfolio-item">
          <div className="item-wrap">
            {/* Show project title on image with linkability */}
            <h1 align-text="center"><br></br>{logos.title}</h1>
              <img alt={logos.title} src={logosImage} />
              {/*Hover overlay  */}
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{logos.title}</h5>
                  <p>{logos.category}</p>
                </div>
              </div>
             
          </div>
        </div>
 })

    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out My Web Development Portfolio. <br></br>(right click to open in a new tab or window.)</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {/* display portfolio projects following above layout, below */}
              {projects}
            </div>

{/* marketing */}
<h1>Check Out My Marketing Portfolio. <br></br>(right click to open in a new tab or window.)</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {/* display portfolio projects following above layout, below */}
              {marketing}
            </div>

{/* logos */}
<h1>Check Out My Logo Portfolio. <br></br>(right click to open in a new tab or window.)</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {/* display portfolio projects following above layout, below */}
              {logos}
            </div>

          </div>
        </div>
      </section >
    );
  }
}
}
}

export default Portfolio;