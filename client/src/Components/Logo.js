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

             <div className="row">
            <h1>Check Out My Marketing Porfolio. <br></br>(right click to open in a new tab or window.)</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {/* display portfolio projects following above layout, below */}
              {projects}
            </div>
</div>

 <div className="row"></div>
<h1>Check Out Logo Portfolio. <br></br>(right click to open in a new tab or window.)</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {/* display portfolio projects following above layout, below */}
              {projects}
            </div>


          </div>
        </div>
      </section >
    );
  }
}

export default Portfolio;