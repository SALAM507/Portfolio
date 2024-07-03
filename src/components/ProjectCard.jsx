import React from 'react';

function ProjectCard({ link, mainImage, logos, description }) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' style={{ zIndex: 100, textDecoration: 'none' }} className='project-card'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">  
            <div className="text-center mb-3">
              {/* Apply the passed style directly to the img tag */}
              <img src={mainImage.src} style={mainImage.style} alt={mainImage.alt}/>
            </div>
            <div className="d-flex justify-content-around w-100" style={{maxWidth: '180px', paddingBottom: "20px"}}>
              {logos.map((logo, index) => (
                <img key={index} src={logo.src} style={{width: '25px'}} alt={logo.alt}/>
              ))}
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="text-white body-text text-center project-description fade-in">
              {description}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;