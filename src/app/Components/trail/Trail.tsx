"use client"
import React, { use, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { FaRedo, FaExpand ,FaTimesCircle } from "react-icons/fa";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import './Trail.css';

gsap.registerPlugin(ScrollTrigger);



type Props = {}

export default function Trail({}: Props) {
  const [expand , setExpand] = React.useState(true);

  const textf = useRef(null);
  

 

  const reset = async () =>  {
    const tg = textf.current;
    await gsap.to(tg, { 
        rotate: 0 ,
      delay: 1,
      duration: 0.5,
      ease: "bounce",});
      animate();
  }


  useEffect(() => {
    let radius =70;
    const split = new SplitType("#trget");
    let cursorr = document.querySelectorAll('.cursorr');
   const rounded = async (radius: number) =>  {
    let cursorr = document.querySelectorAll('.cursorr');
    let cursortext =  document.querySelectorAll('.char'); 
     for(let i = 0; i < cursortext.length; i++) {
     let rotation =   i* (360/ cursortext.length);
      gsap.set(cursortext[i], {
      transformOrigin: `0px ${radius}px`,
      x: radius,
      rotate: rotation,
     });

      gsap.set(cursorr, {
      transformOrigin: `center center`,
       rotation: 0,
       width: radius * 2,
       height: radius * 2,
     });
   
    }
    let rotate = gsap.timeline({repeat: -1,});
    rotate.to(cursorr , {rotation: 360, duration: 5, ease: "none"});
   
  }
  const cursorMove = (e: any) => {
    var mouseX = e.clientX ,
     mouseY = e.clientY ,
     tl = gsap.timeline();
      tl.to('.cursorr', {
      x: mouseX - radius,
      y: mouseY - radius,
      duration: 0.2,
      
    });
  }
  rounded(radius);
  window.addEventListener('mousemove', cursorMove);
    animate();
  }, []);




  const animate = () => {
    const tg = textf.current;
    
    }

  return (
    <div className='w-full relative  flex overflow-hidden  p-2 justify-center items-center rounded-md border  border-slate-600 '>
      <p  ref={textf} className='cursorr text-sm font-thin' 
// onMouseOver={
//   () => {
//     animate();
//   }
// } 
>
  <p id='trget'>Round-Gsap-cursor-Animation</p>

  </p>
       <div className=' absolute top-7 right-7 flex gap-5'>
           < FaRedo
           className=' cursor-pointer'
          onClick={
            () => {
              reset();
            }
          }/> 
          <FaTimesCircle
          className='cursor-pointer'
          onClick={
            () => {
            setExpand(!expand);
            } 
          }/> 
          </div>
       
         <p className='inline-flex text-5xl  h-[100vh] items-center'  >
 Scrole Down ⬇️
  </p>
  
  <div id='pdiv' className=' z-10'>

  </div>
 
   {/*  BoilerPlate code for day page */}
        
     {/*  BoilerPlate code for day page ends here*/}
    </div>
  )
}