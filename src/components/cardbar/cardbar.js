import {  Instagram, Twitter, YouTube } from '@mui/icons-material';
import { ArrowBack, ArrowForward, ChevronLeft, ChevronRight, GitHub, LinkedIn, MailOutline } from '@mui/icons-material';
import React, { Component } from 'react';
import "./cardbar.css"
import img from './img/img.JPG'
import {motion} from 'framer-motion'
class Card_componnt extends Component {
    state = {  } 
    render() { 
        const animae=[
	    	


            {
                id:1,
		color:'about_heading',
                item:<GitHub />
            },
           {
               id:2,
	       color:'about_heading',
               item: <Twitter style={{color:'#00ACEE'}}/>,
           },
           {
               id:3,
	       color:'about_heading',
               item:<MailOutline style={{color:'#DB4437'}}/>
		   
           },
	    
        {
            id:4,
	    color:'about_heading',
            item:<LinkedIn style={{color:'#0072b1'}} />
        },
	    {
		id:5,
		color:'about_heading',
		item:  <YouTube style={{color:'#FF0000'}}/>
            }
        ]
        return (
        <>
		<div className="card_to" style={{minHeight:'400px'}}>
                <img src={img} alt="John" style={{width:'130px',height:'130px',borderRadius:'50%',}}/>
                <h1 className="about_heading">Hi &#x1F44B; I am Kingley</h1>
                <p className="title">Full-Stack Developer</p>
				<p className='about_short_text'>
		And I’ve spent the last three years learning everything there is to know about Software Designs – from Great App/Web
	    UI designs with Reactjs to To building Restful Apis with Django and Nodejs. I’m currently applying this knowledge in my role as a full-stack Developer at Algophile.com a coming of Age AI task automation system.I love workin on new tasks and collaborating to build great projects so I am open to new opportunities &#x1F44F;.
		I’m a solution-oriented Full-Stack Web Developer  with a liking for Building web interfaces ,Maths ,Technical Writing &#x1F4DD;, Music &#x1F3B8;, Basket-ball  and Reading &#x1F4DA;.. See some of my very interesting project ideas and articles below &#128640; ; .

		</p>
                <div  className='ba'>
                {
                    animae.map((anim,i)=>{
                        return(
                            <motion.div href="#" className='div'
                                key={anim.id}
                                initial={{opacity:0, translateX:-40}}
                                animate={{opacity:1, translateX: 0}}
                                transition={{duration:0.5,delay:i*0.5}}
                            >{anim.item }</motion.div>
                        )
                    })
                }
                </div>
                <p></p>
            </div>
       </>
        );
    }
}



class Carded extends Component {
    state = {  } 
    render() { 
        const animae=[
            {
                id:1,
                item:<FacebookTwoTone/>,
            },
           {
               id:2,
               item: <Twitter/>,
           },
           {
            id:3,
            item:   <Instagram/>
        },
        {
            id:4,
            item:  <FacebookTwoTone/>
        }
        ]
	
        return (
        <>
		<div className="card_to" style={{minHeight:'400px'}}>
                <img src={img} alt="John" style={{width:'130px',height:'130px',borderRadius:'50%',}}/>
                <h2>React/React-Native</h2>
                <p className="title">CEO & co-Founer, Algophile.com</p>
				<p>
		I am a react front end developer with three years of working experience
	         I have collaborated on many team projects and have enjoyed working on all these projects
		</p>
                <div  className='ba'>

                </div>
                <p></p>
            </div>
       </>
        );
    }
}
 
export default Card_componnt;
export {Carded}
