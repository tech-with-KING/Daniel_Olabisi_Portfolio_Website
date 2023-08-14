import React from 'react';
import "./about.css"
const About=(props)=>{
    const {toggle}=props
    const coloring={
      darkbg:'black',
      lightbg:'white',
      darkcl:'black',
      lightcl:'white',
      darkbd:'',
  }
    return(
    <section id="know_me">
        <div className="know_me container">
            <div className="col-left">
            <div className="col-img" style={{}}>
	         <div className="imgd"></div>
                </div>
            </div>

            <div id='class-action' className="col-right">
                <h1 className="section-title">About <span>Me</span></h1>
                <h2 >Data Analyst</h2>
                <p  className='class-action'>
                    Daniel Olabisi is a graduate of the Federal University of Technology with a degree in Telecommunication Engineering. His journey in the field of engineering provided him with the
                     opportunity to intern with an Internet Service Provider, where he discovered his passion for problem-solving and providing solutions to clients.
Currently, Daniel is dedicated to advancing his skills in the field of data analytics through comprehensive soft and 
technical training with ALX Africa. His strong desire for effective problem-solving and data-driven decision-making fuels his commitment to learning and growth.
  
    Aspiring to dominate the data space, he is driven to proffer innovative solutions to brands 
    in the industry and aims to keep climbing high. Daniel's goal is to make a significant impact in the
     data analytics field, contributing to data-driven strategies that empower businesses to achieve their goals.
His achievements encompass a constant pursuit of growth and purpose, as well as a transformative impact on 
the lives of people around him. He looks forward to connecting with potential opportunities and exploring how he can 
contribute his passion and skills to an organization's success.
                </p>
            </div>
        </div>
    </section>
 
    )
}
export default About;



