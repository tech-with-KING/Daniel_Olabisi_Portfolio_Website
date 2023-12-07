import React from 'react';
import './portfolio.css'
const PortfolioPage = () => {
  const name = 'Daniel Olabisi';
  const message = `Daniel Olabisi is a 
  Proficient in data analysis, with the ability to extract valuable insights from data sets.
An enthusiastic learner with a commitment to professional growth and adaptability.
Skilled in data visualization and presentation, translating complex data into clear, actionable reports
Strong problem-solving and critical thinking abilities, contributing to effective decision-making.
`
  const videoUrl = 'https://www.youtube.com/embed/your-video-id';
  const cvUrl = 'link-to-your-cv';
  const projectPdfUrl = 'link-to-your-project-pdf';
  const linkedInUrl ='https://docs.google.com/document/d/1hwHiT_Owq2RzMvsY05Ki8pTA9f0VDi-44IkmI-AqzWA/edit?usp=sharing'

  const handleScrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='portfolio'>
      <main style={{ padding: '20px' }}>
        <section>
        <div className="col-right">
                <h3 className="portfols">PORTFOlIO</h3>
                <a href=''></a>
                <h1 className='section-title'>STUDY BUDDY</h1>
                <p>
                Studybuddy is a mobile application that provides
                 quality learning to junior secondary school students.
                  It offers a variety of features that are tailored to 
                  each student's individual needs, including 
                  interactive lessons, a personalized learning dashboard, and a community of students and teachers who can offer support and encouragement.
Studybuddy is the perfect way for junior secondary school students to 
get the support they need to succeed in school. It is easy to use and fun, 
and it can help students learn more effectively.

                </p>
                <p>{}</p>
                    
            </div>
        </section>
        <section id="video-section" style={{ marginBottom: '40px' }}>

          
          <h1 className='section-title'>PITCH VIDEO</h1>
          <div className='video_container'>
            <iframe src="https://www.youtube.com/embed/jJPmhXbgqpo" 
            title="18 July 2023" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" allowfullscreen>
            </iframe>
            
          </div>
        </section>

        <section id="downloads-section" style={{ marginBottom: '40px' }}>
        <div className="">
               <h1 className='section-title'>Pitch Slides Deck</h1>
               <GoogleSlides />
               <h1 className='section-title'>Resume</h1>
               <Cv />
           </div>
           <h1 className='portfols'>Contributors :</h1>
           
            <a>Daniel </a>
            <a>Phebean Adeniji</a>
            <a>Kingsley Okpo</a>
           
        </section>
      </main>
      <footer style={{ padding: '20px', backgroundColor: '#f0f0f0', borderTop: '1px solid #ccc' }}>
        &copy; {new Date().getFullYear()} {name}
      </footer>
    </div>
  );
};

export default PortfolioPage;
// GoogleSlides.js

const GoogleSlides = () => {
  const googleSlidesEmbedUrl = 'https://docs.google.com/presentation/d/1uzMGw-mBBkNuHwgzNz8ImnT4tE1Mjs-BYX2H86PBrwE/embed';

  return (
    <div className="google-slides-container">
      <iframe
        src={googleSlidesEmbedUrl}
        title="Pitch Slides Deck"
        allowFullScreen
      ></iframe>
    </div>
  );
};


const Cv = () => {
  const googleSlidesEmbedUrl = 'https://docs.google.com/presentation/d/1uzMGw-mBBkNuHwgzNz8ImnT4tE1Mjs-BYX2H86PBrwE/embed';
  const linkedInUrl ='https://docs.google.com/document/d/1hwHiT_Owq2RzMvsY05Ki8pTA9f0VDi-44IkmI-AqzWA/edit?usp=sharing/embed'
  return (
    <div className="google-slides-container">
      <iframe
        src={linkedInUrl}
        title="Cv"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const LinkedIn = () => {
  const googleSlidesEmbedUrl = 'https://docs.google.com/presentation/d/1uzMGw-mBBkNuHwgzNz8ImnT4tE1Mjs-BYX2H86PBrwE/embed';
  const linkedInUrl ='https://www.linkedin.com/in/dee-analyst'
  return (
    <div className="google-slides-container">
      <iframe
        src={linkedInUrl}
        title="LinkedIn"
        allowFullScreen
      ></iframe>
    </div>
  );
};