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

  const reset = async () =>  {
    const tg = text.current;
    await gsap.to(tg, { 
        rotate: 0 ,
      delay: 1,
      duration: 0.5,
      ease: "bounce",});
      animate();
  }

  useEffect(() => {
    animate();
  }, []);


  const animate = () => {
    const tg = text.current;
    gsap.to(tg, {
        scrollTrigger: {
            trigger: tg,
          },
      rotate: 180,
      duration: 2,
      ease: "bounce",
      delay: 1,
      
    });
    }

  return (
    <div className='w-full  flex flex-col overflow-hidden items-center p-2 justify-center rounded-md border  border-slate-600 '>
        {/*  BoilerPlate code for day page */}
        <div className={`effect text-3xl  overflow-y-scroll overflow-x-hidden 
        text-black ${
          expand ? 'w-[100%] h-[101px] ' : 'w-[100%] fixed z-20 h-[100%]  top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] '
        } w-full h-full flex justify-center  
        font-semibold font-sans bg-white rounded-md `}>
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
         <div  className='flex flex-col items-center' >
         <p className='inline-flex text-5xl  min-h-[100%] max-h-[100vh] items-center'  >
 Scrole Down ⬇️
  </p>
  <p className='inline-flex text-5xl min-h-[100%] max-h-[100vh] items-center'  >
 More ❗
  </p>
<p ref={text} id='triggerbox' className='box inline-flex text-5xl mb-7 min-h-[100%] max-h-[100vh] items-center' 
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
            <h1>Day 2: Scroll Trigger Animation 
            </h1>
            <h2>
              Created a scroll trigger animation with gsap scroll trigger api.
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