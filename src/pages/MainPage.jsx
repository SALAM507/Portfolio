import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ERbuddyLogo from '../assets/ERbuddy.png';
import reactLogo from '../assets/React.png';
import tailwindLogo from '../assets/TailwindCSS.png';
import AWSLogo from '../assets/AWS.png';
import LocallyLogo from '../assets/Locally.png';
import BootstrapLogo from '../assets/Bootstrap.png';
import GoogleMapsLogo from '../assets/GoogleMaps.png';


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

      <div className='centered-section body-text' style={{marginTop: '-20px', marginBottom: '15px', color: '#FFFFFF', textAlign: 'center'}}>
        <div> Full Stack Developer</div>
      </div>
      
      <div className='centered-section'>

        <div className='links-container'>

          <a href='https://github.com/SALAM507' target='_blank' rel='noopener noreferrer' className='content-link'>
            <i className='bi bi-github'></i>
          </a>

          <a href='mailto:shihabalam02@gmail.com' className='content-link'>
            <i className='bi bi-envelope-fill'></i> 
          </a>

          <a href='https://www.linkedin.com/in/shihabalam/' target='_blank' rel='noopener noreferrer' className='content-link'>
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
            
            I'm a software engineer with a passion for application development and creating impactful solutions. Currently, I'm a Full Stack Developer Intern at <a href="https://myerbuddy.com/" target="_blank" rel="noopener noreferrer" className= 'link-text'>ERBuddy</a>, where I’ve been building React Native apps and developing firmware for their Smart Pillbox.

          </div>
        </div>

        <div className='about-me-container'>
          <div className='body-text'>
            
            I've also interned at Morgan Stanley, designing Splunk dashboards and Python algorithms to enhance security by monitoring traffic discrepencies, and at the NYC Department of Transportation, developing educational games and ML models for database optimization.

          </div>
        </div>

        <div className='about-me-container'>
          <div className='body-text'>
            
            I'm pursuing a computer science degree at CUNY Hunter College, with skills in C++, Python, JavaScript, React, and more. Outside of work, I love basketball, video games, and my two geckos Noodles and Rango.

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

        <ProjectCard 
        link="https://myerbuddy.com/"
        mainImage={{ src: ERbuddyLogo, alt: "ERBuddy Logo" }}
        logos={[
          { src: reactLogo, alt: "React Logo" },
          { src: tailwindLogo, alt: "Tailwind CSS Logo" },
          { src: AWSLogo, alt: "AWS Logo" }
        ]}
        description="Built and deployed a React app on AWS S3, managing DNS with Route53 and CloudFront, and SSL certification. Debugged and reconfigured to users feedback."
        />

        <ProjectCard 
        link="https://myerbuddy.com/"
        mainImage={{ src: LocallyLogo, alt: "Locally Logo", style: {width: '180px'} }}
        logos={[
          { src: reactLogo, alt: "React Logo" },
          { src: BootstrapLogo, alt: "Bootstrap Logo"},
          { src: GoogleMapsLogo, alt: "Google Maps Logo" }
        ]}
        description="Built a React app using Google Maps API and MongoDB, allowing users to pin local spots and describe neighborhood events."
        />

          
        </div>
      </div>

    </div>
  );
};

export default MainPage;
