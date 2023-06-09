"use client"
import React, { use, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import './Day3.css';
import { FaRedo, FaExpand ,FaTimesCircle } from "react-icons/fa";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);



type Props = {}

export default function Day3({}: Props) {
  const [expand , setExpand] = React.useState(true);
  const [play , setPlay] = React.useState(false);

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
  let radius =70;

  useEffect(() => {
    
    const split = new SplitType("#trget");
    let cursorr = document.querySelector('.cursorr');

 
  rounded(radius);
  // window.addEventListener('mousemove', cursorMove);
    // animate();
  }, []);


  const rounded =  (radius: number) =>  {
    let cursorr = document.querySelector('.cursorr');
    let cursortext =  document.querySelectorAll('.char'); 
     for(let i = 0; i < cursortext.length; i++) {
     let rotation =   i * (480/ cursortext.length);
       gsap.set(cursortext[i], {
      transformOrigin: `0px ${radius}px`,
      x: radius,
      rotate: rotation
     });

    
    }
    gsap.set(cursorr, {
      transformOrigin: `center center`,
       rotation: 0,
       width: radius * 2,
       height: radius * 2,
     });
   
    let rotate = gsap.timeline({repeat: -1,});
    rotate.to(cursorr , {rotation: 360, duration: 3, ease: "none"});
   
  }

  const cursorMove = (e: any) => {
    var mouseX = e.clientX ,
     mouseY = e.clientY ,
     tl = gsap.timeline();
     if(mouseX < window.innerWidth- radius && mouseY < window.innerHeight- radius && play){
      tl.to('.cursorr', {
      x: mouseX - radius,
      y: mouseY - radius,
      duration: 0.2,
      
    });}
  }


  const animate = () => {
    const tg = textf.current;
    
    }
  return (
    <div className='w-full  flex flex-col overflow-hidden items-center p-2 justify-center rounded-md border  border-slate-600 '>
        {/*  BoilerPlate code for day page */}
        <div className={`effect text-3xl  overflow-hidden
        text-black ${
          expand ? 'w-[100%] min-h-[200px]  relative' : 'w-[100%] h-[100%] fixed z-20 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] '
        } w-full h-full flex justify-center 
        font-semibold font-sans bg-white rounded-md `}
        onMouseOver={
          (e) => {
            setPlay(true);
          }
        }
        onMouseLeave={
          (e) => {
            setPlay(false);
          }
        }
        onMouseMoveCapture={
          (e) => {
            cursorMove(e);
          }
        }
        >
           {
          !expand ?
          <div className=' fixed top-7 right-7 flex gap-5'>
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
          :""
         }
         {/*  BoilerPlate code for day page ends here*/} 
         <div  className='flex flex-col justify-center items-center' >
         <h1>Max Screen to View</h1>
         <p  ref={textf} className={`cursorr text-[14px] font-[400px] font-mono pointer-events-none`} 
>
  
  <p id='trget'>ROUNDED-GSAP-CURSOR-ANIMATION-</p>

  </p>
  </div>
   {/*  BoilerPlate code for day page */}
        </div>
        <div className="buttons inline-flex pt-3 justify-between w-full">
          <div className='btntext'>
            <h1>Day 3: Rotating Folloeing Cursor
            </h1>
            <h2>
              Created a rotating cursor that follows the mouse movement on the page.
            </h2>
          </div>
          <p className='flex gap-4'>
        <FaRedo onClick={
          () => {
            reset();
          }
        }/>
        <FaExpand onClick={
          () => {
          setExpand(!expand);
          }
        }/>
        </p>
        </div>
     {/*  BoilerPlate code for day page ends here*/}
    </div>
  )
}