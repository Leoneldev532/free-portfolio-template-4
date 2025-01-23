
"use client"
import piece from "@/public/piece.png"
import storm from "@/public/energy.png"
import Union from "@/public/Union.png"
import Inb from "@/public/B.png"
import diamant from "@/public/Group.png"
import groupdiamant from "@/public/Group 24.png"
import groupCat from "@/public/Group 21.png"

import image4 from "@/public/4.jpg"
import im1 from "@/public/Group 13.png"
import im2 from "@/public/Group 19.png"

import hear1 from "@/public/hear1.png"
import hear2 from "@/public/hear2.png"
import play from "@/public/play.svg"

import cat from "@/public/cat.png"

import { SpecialButton } from "./Components/SpecialButton"
import { packType, productType } from "@/lib/type"
import caisse from "@/public/Groupo.png"
import PackComponent from "./Components/PackComponent"
import ProductComponent from "./Components/ProductComponent"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import confetti from "canvas-confetti"
import SplitType from "split-type"
import { tl } from "@/lib/utils"


const App = () => {



  const handleAnimatedSvg= () =>{

    tl.to('.bluee', {
        duration: .8,
        attr: { d: 'M0 502S175 272 500 272s500 230 500 230V0H0Z'},
        ease: 'power2.in',
    })
    .to('.bluee', {
        duration: .8,
        attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z'},
        ease: 'power2.out',

    })
  }

  const animeProfilePicture = () =>{

    tl.
    fromTo(".profileImage",{
        scale:0,
    },{
      scale:1,
      duration:0.5,
      ease:"power2.in"
    }).fromTo(".name,.cap,.firstdescription",{
      opacity:0,
    },{
      opacity:1,
      ease:"power2.in",
      duration:0.5,
      stagger:0.3
    })

  }


  const handleAnimateTxt = () => {
   
  const lines = document.querySelectorAll('.split');
    lines.forEach(line => {
      const mySplitText = new SplitType(line, { types: 'lines' });

      if(!mySplitText) return;
  
      mySplitText.lines.forEach(line => {
        line.style.willChange = 'transform';
      });
  
      // Animez les lignes de texte
      tl.fromTo(mySplitText.lines, {
        opacity:0,
        yPercent: 105,
      },{
        yPercent: 0,
        stagger: 0.2,
        ease: 'power4.out',
        duration: 1.2,
        opacity:1,
        onComplete: () => {
          mySplitText.lines.forEach(line => {
            line.style.willChange = 'auto';
          });
         
        }
      });
    });
  };

  const handleAnimeSocialMedia = () =>{
    tl.fromTo(".contactlink",{
        opacity:0,
        xPercent: 105,
      },{
        xPercent: 0,
        stagger: {
          each:0.2
        },
       
      ease:"power2.in",
        duration: 0.3,
        opacity:1,
    })
  }
  


useEffect(()=>{


  handleAnimatedSvg()
  animeProfilePicture()
  handleAnimateTxt()
  handleAnimeSocialMedia()
},[])


  return (
    <section className="  relative min-h-[670px] py-12 justify-center 
     items-center  overflow-hidden  h-full w-full   flex flex-col  ">

<div className="absolute flex flex-col w-full h-full justify-center items-center overflow-hidden top-0 left-0 z-10">
      <div className="relative h-36 w-36 profileImage overflow-hidden rounded-lg grayscale bg-neutral-300/10 border border-neutral-300/40 ">

        <Image  src={image4} height={"200"} width={"200"} className="object-cover h-full object-center w-full" alt="profil" />
      </div>

      <div className="flex flex-col py-3 gap-y-1  justify-center items-center">

        <h2 className="font-semibold name text-xl">@Leoy</h2>
        <span className="text-neutral-400 cap"> Dev Front </span>
      </div>

      <p className="max-w-sm text-center firstdescription font-medium text-balance">
        passionate about art , 
        <span className="px-2 pb-1 rounded-full  border align-middle border-neutral-300 text-neutral-400">design</span> , 
        motion and   <span className="px-2 pb-1 rounded-full  border align-middle border-neutral-300 text-neutral-400">technologies</span> . Let’Us Connect
      </p>

      <p className="max-w-sm text-center overflow-hidden  split  mt-4 py-2 text-balance text-neutral-600">
        I&apos;m a front-end developer with a strong focus on creating engaging brand experiences and intuitive
        user interfaces. #237
      </p>

      <div className="rounded-full flex  gap-3 justify-center mt-4 overflow-hidden items-center h-12 border border-neutral-300  px-1.5 py-2 ">

        <div className="bx-shd h-10 w-10  contactlink flex justify-center items-center rounded-full bg-neutral-300/40 ">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

        </div>
        <div className="bx-shd h-10 w-10 contactlink flex justify-center items-center  rounded-full bg-neutral-300/40 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>


        </div>
        <div className="bx-shd h-10 w-10 contactlink flex justify-center items-center  rounded-full bg-neutral-300/40 ">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
        color="currentColor"
      ></path>
    </svg>

        </div> 

      </div>
      </div>


    </section>
  )
}

export default App
