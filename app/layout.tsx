// @ts-nocheck
"use client"
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { tl } from "@/lib/utils";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--var-inter-font" });

// export const metadata: Metadata = {
//     title: "Ui Game build by Leonel Yimga ",
//     description: "Ui Game build ",
// };



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    const pathname = usePathname()
    const pageName = pathname.split("/")[1] === "" ? "About" : pathname.split("/")[1]

    const handleAnimatedSvg= () =>{
        tl.to('.bluee', {
            duration: .8,
            attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z'},
            ease: 'power2.in',
        }).set(".bluee",{opacity:0})
       
      }

      const handleShotDownMenu = () =>{
        tl.fromTo('.menu', {
            y:-200,

        },{
            y:0,
            ease: 'power2.out',
            duration: .4,

        })
      }

      useEffect(()=>{
        handleAnimatedSvg()
        handleShotDownMenu()
      },[])


    return (

        <html lang="en" className="light" >
            <meta charSet="utf-8" />
            <body className={`flex justify-center h-full   bg-white items-center w-full ` + inter.className}>
                <div className="flex w-full gap-x-4 max-w-[740px] md:py-8 py-4 px-4 md:px-8 h-full flex-col">

                    <div className="w-full  relative  flex  flex-col overflow-hidden  justify-start items-start">

                    <svg  viewBox="0 0 1000 1000" className="h-[900px] pointer-events-none -top-[10px] absolute z-50 w-full"  preserveAspectRatio="none">
                                      <path className="bluee" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                                  </svg>   

                        <div className="absolute w-8 h-8 -left-[3.88%]  md:-left-[1.8%] lg:-left-[2%] -top-[6.30%] ">
                            <div className="relative top-[50%]  h-full border-b-2 border-neutral-700/50">  </div>
                            <div className="relative top-0 -left-[50%] h-full border-r-2 border-neutral-700/50"> </div>
                        </div>

                        <div className="absolute w-8 h-8  left-[96%]  md:left-[97.70%] lg:left-[97.70%] md:-top-[6.3%] -top-[6.90%] ">
                            <div className="relative top-[50%]  h-full border-b-2 border-neutral-700/50">  </div>
                            <div className="relative top-0 -left-[50%] h-full border-r-2 border-neutral-700/50"> </div>
                        </div>

                        <div className="absolute w-8 h-8  lg:-left-[2%] md:-left-[1.8%] md:top-[93.44%]  top-[93.44%]">
                            <div className="relative top-[50%]  h-full border-b-2 border-neutral-700/50">  </div>
                            <div className="relative top-0 -left-[50%] h-full border-r-2 border-neutral-700/50"> </div>
                        </div>

                        <div className="absolute w-8 h-8 left-[96%] md:left-[98%] md:top-[93.78%] top-[94%]  ">
                            <div className="relative top-[50%]  h-full border-b-2 border-neutral-700/50">  </div>
                            <div className="relative top-0 -left-[50%] h-full border-r-2 border-neutral-700/50"> </div>
                        </div>
                        
                           
                        <div className="border h-full flex flex-col justify-center items-center  border-dashed w-full">

                            <div className=" z-10  py-2 px-2 border rounded-full mt-4 menu  divide-x-2 flex justify-center items-center gap-x-3 h-full  ">



                                <Link href="/">
                                    <button type="button" className="flex justify-center items-center  px-2" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#404040b3" className="size-7  hover:stroke-black transition-all ease duration-300 rounded-lg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                        </svg>
                                    </button>
                                </Link>

                                <Link href="/works">
                                    <button type="button" className="flex justify-center ml-3 items-center  px-2 " >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#404040b3" className="size-7  hover:stroke-black transition-all ease duration-300 rounded-lg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                        </svg>

                                    </button>
                                </Link>



                                <Link href="/talk">
                                    <button type="button" className="flex justify-center  ml-2 items-center  px-2" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#404040b3" className="size-7  hover:stroke-black transition-all ease duration-300 rounded-lg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                                        </svg>

                                    </button>
                                </Link>

                                <Link href="/gallerie">
                                    <button type="button" className="flex justify-center items-center  px-2" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#404040b3" className="size-7  hover:stroke-black transition-all ease duration-300 rounded-lg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>

                                    </button>
                                </Link>

                            </div>
                            <span className='uppercase mt-3 font-bold text-neutral-700'>  {pageName}  </span>


                            {children}
                        </div>
                    </div>
                    <footer className="flex w-full my-4 px-4  justify-center items-center ">
                        <div className="flex w-full  justify-between py-4 text-xs md:text-sm items-center ">
                            <Link href="https://leonelyimga.com" className="text-neutral-600"><span className="text-neutral-700">Build By</span> <b>Leonel Yimga</b> </Link>
                            <Link href="https://www.figma.com/design/9kI9yPEyWVhnkW79wpvtHy/Game-Shop-Cat-Game-(Community)?node-id=2-2&t=QZ2SjEMn2a8kHYEu-0" className="text-neutral-600"><span className="text-neutral-700/30">Inspired By</span> <b>This design </b> </Link>
                        </div>
                    </footer>
                </div>


            </body>
        </html>
    );
}
