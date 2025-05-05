import React from 'react';
import Footer from "../Footer";
import { Typewriter } from "react-simple-typewriter";
import'../Components/Navbar.css';

const Home = () => {
  return (
    <div>
    <div className="bgimage"></div>
    <div className="typewriter" style={{ textAlign: 'center', fontSize: '30px' }}>
      <h1 style={{color:'white'}}>
        I'm a{' '}
        <span style={{ color: 'orange' }}>
          <Typewriter
            words={['Software Developer', 'Frontend Developer', 'DSA Enthusiastic','React.js Developer']}
            loop={true}
            cursor
            cursorStyle='>'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
     <Footer />   
    </div>
    
  )
}

export default Home;