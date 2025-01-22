
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


  const handleAnimateTxt = (lines:NodeListOf<Element>) => {
   
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
        duration: 0.,
        opacity:1,
    })
  }
  


useEffect(()=>{

  const lines = document.querySelectorAll('.split');

  handleAnimatedSvg()
  animeProfilePicture()
  handleAnimateTxt(lines)
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

        <div className="bx-shd h-10 w-10  contactlink rounded-full bg-neutral-300/40 ">

        </div>
        <div className="bx-shd h-10 w-10 contactlink  rounded-full bg-neutral-300/40 ">


        </div>
        <div className="bx-shd h-10 w-10 contactlink  rounded-full bg-neutral-300/40 ">

        </div> 

      </div>
      </div>


    </section>
  )
}

export default App
