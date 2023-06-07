"use client"
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import SplitType from 'split-type';
import './Day2.css';
import { FaRedo, FaExpand ,FaTimesCircle } from "react-icons/fa";



type Props = {}

export default function Day2({}: Props) {
  const [expand , setExpand] = React.useState(true);
  const animate = () => {
    const split = new SplitType("#taget");
    gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.5,
        });
    }
      useEffect(() => {
        animate();
        }, []);

  return (
    <div className='w-full  flex flex-col overflow-hidden items-center p-2 justify-center rounded-md border  border-slate-600 '>
        {/*  BoilerPlate code for day page */}
        <div className={`effect text-3xl overflow-hidden
        text-black ${
          expand ? 'w-[100%] h-[100%] ' : 'w-[100%] h-[100%] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] '
        } w-full h-full flex justify-center items-center
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
              animate();
            }
          }/> 
          </div>
          :""
         }
         {/*  BoilerPlate code for day page ends here*/}
           <p id="taget"  className='inline-flex text-5xl transition-transform duration-[0.5s]'  >
 Rohit.Yadav 2
  </p>
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
            animate();
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