import React from 'react';
import './glassy.css'; // Import your CSS file for styling
import img from './WhatsApp Image 2023-08-13 at 5.24.05 PM.jpeg'
import { Link } from 'react-router-dom';
const GlassyProfile = () => {
    const text = `Daniel Olabisi is a graduate of the Federal University of Technology with a degree in Telecommunication Engineering. His journey in the field of engineering provided him with the opportunity to intern with an Internet Service Provider, where he discovered his passion for problem-solving and providing solutions to clients.
    Currently, Daniel is dedicated to advancing his skills in the field of data analytics through comprehensive soft and technical training with ALX Africa. 
  
`
  return (
    <div className="glassy-profile">
      <div className="text-side">
        <h2 className='glassytitle'>BIO :</h2>
        <h1 className='glassy-header'>"Passionate about Data Analytics | Solving Problems, Driving Growth"</h1>
        <p>{text}
        <a className='personally' href='#class-action'> Continue Reading</a>
        </p>
      </div>
      <div className="image-side">
        <img src={img} alt="Profile" />
      </div>
    </div>
  );
};

export default GlassyProfile;
