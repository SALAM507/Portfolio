import React from 'react';
import ERbuddyLogo from '../assets/ERbuddy.png';
import reactLogo from '../assets/React.png'


const MainPage = () => {
  return (
    <div className='site-container'>

      <div className='centered-section'>
        <div className='title-box'>
          <div className='title-text'>
            Shihab Alam
          </div>
        </div> 
      </div>

      <div className='centered-section body-text' style={{marginTop: '-10px', marginBottom: '10px', color: '#FFFFFF', textAlign: 'center'}}>
        <div> Full Stack Developer</div>
      </div>
      
      <div className='centered-section'>

        <div className='links-container'>

          <a href='https://github.com/SALAM507' target='_blank' rel='noopener noreferrer' className='content-link'>
            <i className='bi bi-github'></i>
          </a>

          <a href='mailto:shihabalam02@gmail.com' className= 'content-link'>
            <i className='bi bi-envelope-fill'></i> 
          </a>

          <a href='https://www.linkedin.com/in/shihabalam/' target='_blank' rel='noopener noreferrer' className= 'content-link'>
            <i className='bi bi-linkedin'></i>
          </a>

        </div>
        
      </div>

      <div className='centered-section' style={{marginTop: '-10px'}}>
        <div className='about-me-section'>
        
        <div className='about-me-container'>
          <div className='header-text'>
            
            About

          </div>
        </div>

        <div className='about-me-container'>
          <div className='body-text'>
            
            I'm a software engineer with a passion for full-stack development and creating impactful solutions. Currently, I'm a Full Stack Developer Intern at <a href="https://myerbuddy.com/" target="_blank" rel="noopener noreferrer" className= 'link-text'>ERBuddy</a>, where I’ve been building React Native apps and developing firmware for their Smart Pillbox.

          </div>
        </div>

        <div className='about-me-container'>
          <div className='body-text'>
            
            I've also interned at Morgan Stanley, designing Splunk dashboards and Python algorithms to enhance security by monitoring traffic discrepencies, and at the NYC Department of Transportation, developing educational games and ML models for database optimization.

          </div>
        </div>

        <div className='about-me-container'>
          <div className='body-text'>
            
            I'm pursuing a computer science degree at CUNY Hunter College, with skills in C++, Python, JavaScript, React, and more. Outside of work, I love basketball, video games, and everything related to airplanes.

          </div>
        </div>

        <div className='about-me-container'>
          <div className='body-text'>
            
            I'm excited about the opportunity to bring my skills and passion to your team.

          </div>
        </div>

        </div>

      </div>

      <div className='centered-section' style={{marginTop: '-10px'}}>
        <div className='projects-section'>
        
        <div className='header-section'>
          <div className='header-text'>
            
            Projects

          </div>
        </div>

        <div className='project-card'>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-12">
                    <div className="p-2 text-white">

                      <img src={ERbuddyLogo} style={{width: '150px'}} alt="ERBuddy Logo"/>

                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className=" text-white">

                    <img src={reactLogo} style={{width: '25px'}} alt="ERBuddy Logo"/>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 mb-2 bg-success text-white">Column 2</div>
              </div>
            </div>
          </div>
        </div>
          
        </div>
      </div>

    </div>
  );
};

export default MainPage;
