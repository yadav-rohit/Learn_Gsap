"use client"
import React, { use, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { FaRedo, FaExpand ,FaTimesCircle } from "react-icons/fa";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



type Props = {}

export default function Trail({}: Props) {
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
    <div className='w-full relative  flex flex-col overflow-hidden items-center p-2 justify-center rounded-md border  border-slate-600 '>
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
         <div  className='flex flex-col items-center' >
         <p className='inline-flex text-5xl  h-[100vh] items-center'  >
 Scrole Down ⬇️
  </p>
  <p className='inline-flex text-5xl h-[100vh] items-center'  >
 More ❗
  </p>
<p ref={text} id='triggerbox' className='box inline-flex text-5xl mb-7 h-[100vh] items-center' 
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
        
     {/*  BoilerPlate code for day page ends here*/}
    </div>
  )
}