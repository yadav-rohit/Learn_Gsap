"use client"
import React, { use, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import './Day2.css';
import { FaRedo, FaExpand ,FaTimesCircle } from "react-icons/fa";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



type Props = {}

export default function Day2({}: Props) {
  const [expand , setExpand] = React.useState(true);

  const text = useRef(null);
  const box = useRef(null);

  const reset = async () =>  {
    await gsap.to(".box", { x: 0 ,
      delay: 0.2,
      duration: 0.5,
      ease: "bounce",});
      animate();
  }

  useEffect(() => {
    animate();
  }, []);


  const animate = () => {
    gsap.to("#triggerbox", {
      x: 100,
      duration: 2,
      ease: "bounce",
      delay: 1,
      scrollTrigger: {
        trigger: "#triggerbox",
      }
    });
    }

  return (
    <div className='w-full  flex flex-col overflow-hidden items-center p-2 justify-center rounded-md border  border-slate-600 '>
        {/*  BoilerPlate code for day page */}
        <div className={`effect text-3xl  overflow-scroll
        text-black ${
          expand ? 'w-[100%] h-44 ' : 'w-[100%] h-[100%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] '
        } w-full h-full flex justify-center 
        font-semibold font-sans bg-white rounded-md `}>
           {
          !expand ?
          <div>
          <FaTimesCircle
          className='absolute top-7 right-7 cursor-pointer'
          onClick={
            () => {
            setExpand(!expand);
            } 
          }/> 
          < FaRedo
           className='absolute bottom-7 left-[50%] translate-x-[-50%] cursor-pointer'
          onClick={
            () => {
              reset();
            }
          }/> 
          </div>
          :""
         }
         {/*  BoilerPlate code for day page ends here*/} 
         <div  className='flex flex-col ' >
         <p className='inline-flex text-3xl mt-7'  >
 Scrole Down ⬇️
  </p>
  <p className='inline-flex text-3xl mt-20 '  >
 More ❗
  </p>
<p ref={text} id='triggerbox' className='box inline-flex text-3xl mt-20 mb-7 ' 
// onMouseOver={
//   () => {
//     animate();
//   }
// } 
>
I am triggered 🤯
  </p>
  </div>
   {/*  BoilerPlate code for day page */}
        </div>
        <div className="buttons inline-flex pt-3 justify-between w-full">
          <div className='btntext'>
            <h1>Day 1: Staggered Text Animation
            </h1>
            <h2>
              Created a Staggered Text Animation using GSAP and SplitType.
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