// @ts-nocheck
"use client"

import Image from "next/image"
import image11 from "@/public/1.png"
import image12 from "@/public/2.png"
import image13 from "@/public/3.png"
import { tl } from "@/lib/utils"
import { useEffect } from "react"
import gsap from "gsap"

const Page = () => {

    const handleSlideGallerieImage = () =>{
        tl.fromTo(".gallerie-block ",{
           y:100,
           opacity:0

        },{
            y:-30,
            opacity:1,
            ease:"power1.in",
            stagger:0.1,

           duration:0.2,

        })
    }
    

    useEffect(()=>{
        handleSlideGallerieImage()
    },[])

 

  return (
    <section className="  relative min-h-[69vh] py-12 justify-start 
     items-center   h-full w-full   flex flex-col  ">

         <div className="flex  relative justify-center items-center  w-full h-full">

        <div className="grid  absolute z-0  top-0 left-0 grid-cols-2 w-full px-8 lg:px-32 gap-4 "> 


            <div className="w-full gallerie-block  p-2 flex relative overflow-hidden   cursor-pointer rounded-lg justify-center border grayscale items-center ease duration-200 border-neutral-300 group hover:p-0 transition-all ">
                <Image src={image11} alt={"photo1"} height={200} width={200}  className="object-contain w-full rounded-lg  h-full group-hover:scale-110" />
                <div className="absolute w-8 h-8 top-[74%] bg-white rounded-lg  border border-red left-[84%] flex justify-center items-center text-xl group-hover:scale-105 "> 1 </div>
            </div>

            <div className="w-full gallerie-block  p-2 flex relative overflow-hidden   cursor-pointer rounded-lg justify-center border grayscale items-center ease duration-200 border-neutral-300 group hover:p-0 transition-all ">
                <Image src={image12} alt={"photo1"} height={200} width={200}  className="object-contain w-full rounded-lg  h-full group-hover:scale-110" />
                <div className="absolute w-8 h-8 top-[74%] bg-white rounded-lg  border border-red left-[84%] flex justify-center items-center text-xl group-hover:opacity-0 transition-opacity ease duration-300"> 2 </div>
            </div>   
            <div className="w-full gallerie-block  p-2 flex relative overflow-hidden   cursor-pointer rounded-lg justify-center border grayscale items-center ease duration-200 border-neutral-300 group hover:p-0 transition-all ">
                <Image src={image13} alt={"photo1"} height={200} width={200}  className="object-contain w-full rounded-lg  h-full group-hover:scale-110" />
                <div className="absolute w-8 h-8 top-[74%] bg-white rounded-lg  border border-red left-[84%] flex justify-center items-center text-xl group-hover:opacity-0 transition-opacity ease duration-300"> 3 </div>
            </div>  
            <div className="w-full gallerie-block  p-2 flex relative overflow-hidden   cursor-pointer rounded-lg justify-center border grayscale items-center ease duration-200 border-neutral-300 group hover:p-0 transition-all ">
                <Image src={image11} alt={"photo1"} height={200} width={200}  className="object-contain w-full rounded-lg  h-full group-hover:scale-110" />
                <div className="absolute w-8 h-8 top-[74%] bg-white rounded-lg  border border-red left-[84%] flex justify-center items-center text-xl group-hover:opacity-0 transition-opacity ease duration-300"> 4 </div>
            </div>  

            <div className="w-full gallerie-block  p-2 flex relative overflow-hidden   cursor-pointer rounded-lg justify-center border grayscale items-center ease duration-200 border-neutral-300 group hover:p-0 transition-all ">
                <Image src={image11} alt={"photo1"} height={200} width={200}  className="object-contain w-full rounded-lg  h-full group-hover:scale-110" />
                <div className="absolute w-8 h-8 top-[74%] bg-white rounded-lg  border border-red left-[84%] flex justify-center items-center text-xl group-hover:scale-105 "> 1 </div>
            </div>

            <div className="w-full gallerie-block  p-2 flex relative overflow-hidden   cursor-pointer rounded-lg justify-center border grayscale items-center ease duration-200 border-neutral-300 group hover:p-0 transition-all ">
                <Image src={image12} alt={"photo1"} height={200} width={200}  className="object-contain w-full rounded-lg  h-full group-hover:scale-110" />
                <div className="absolute w-8 h-8 top-[74%] bg-white rounded-lg  border border-red left-[84%] flex justify-center items-center text-xl group-hover:opacity-0 transition-opacity ease duration-300"> 2 </div>
            </div>   
            <div className="w-full gallerie-block  p-2 flex relative overflow-hidden   cursor-pointer rounded-lg justify-center border grayscale items-center ease duration-200 border-neutral-300 group hover:p-0 transition-all ">
                <Image src={image13} alt={"photo1"} height={200} width={200}  className="object-contain w-full rounded-lg  h-full group-hover:scale-110" />
                <div className="absolute w-8 h-8 top-[74%] bg-white rounded-lg  border border-red left-[84%] flex justify-center items-center text-xl group-hover:opacity-0 transition-opacity ease duration-300"> 3 </div>
            </div>  
            <div className="w-full gallerie-block  p-2 flex relative overflow-hidden   cursor-pointer rounded-lg justify-center border grayscale items-center ease duration-200 border-neutral-300 group hover:p-0 transition-all ">
                <Image src={image11} alt={"photo1"} height={200} width={200}  className="object-contain w-full rounded-lg  h-full group-hover:scale-110" />
                <div className="absolute w-8 h-8 top-[74%] bg-white rounded-lg  border border-red left-[84%] flex justify-center items-center text-xl group-hover:opacity-0 transition-opacity ease duration-300"> 4 </div>
            </div>


        </div>

        {/* <div className="absolute z-10 pointer-events-none w-96 bg-black  h-[60vh] flex items-center justify-center top-0  ">
        <Image src={image11} alt={"photo1"} height={200} width={200}  className="object-cover w-96 rounded-lg  h-[60vh]" />
               
        </div> */}

        </div>   


    </section>
  )
}

export default Page
