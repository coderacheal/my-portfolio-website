import React from 'react';
import { useState } from 'react';
import arrow from '../assets/arrows.png'
import violin from '../assets/violin.png'
import atom from '../assets/atom.png'
import downArrow from '../assets/down-arrow.png'
import moon from '../assets/new-moon.png'
import ml from '../assets/deep-learning.png'
import ai from '../assets/artificial-intelligence.png'
import palette from '../assets/palette.png'

const Floating = () => { 
    
    // const [position, setPosition] = useState({ x: 0, y: 0 });
    // const handleMouseMove = (event) => {
    // setPosition({ x: event.clientX, y: event.clientY });
    // };

    return (
        <div >
            <div className='floating-div'>
                <img src={arrow} alt="" className='floating f1'/>
                <img src={violin} alt=""  className='floating f2'/>
                <img src={atom} alt=""  className='floating f3'/>
                <img src={downArrow} alt=""  className='floating f4'/>
                {/* <img src={moon} alt=""  className='floating f5'/> */}
                {/* <img src={ml} alt=""  className='floating f6'/> */}
                <img src={ai} alt=""  className='floating f7'/>
                <img src={palette} alt=""  className='floating f8'/>
            </div>
            
        </div>
    )
}

// const container = document.querySelector('.floating-div');
// const item = document.querySelector('.floating');

// container.addEventListener('mousemove', (e) => {
//   const x = e.clientX;
//   const y = e.clientY;

//   item.style.top = ;
// });

export default Floating
