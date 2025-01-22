"use client";
import { workComponentType } from '@/lib/type';
import { tl } from '@/lib/utils';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useRef } from 'react';
import SplitType from 'split-type';

const WorkComponent = ({ WorkComponentProps }: { WorkComponentProps: workComponentType }) => {
    const titleRef = useRef<HTMLDivElement>(null);
    const subTitleRef = useRef<HTMLDivElement>(null);
    const containerComponentRef = useRef<HTMLAnchorElement>(null);
    const container = containerComponentRef.current;


    const rl  = gsap.timeline()
   
    const handleMouseEnter = () => {

       

        if (titleRef.current && subTitleRef.current && containerComponentRef.current) {
            const titleText = titleRef.current;
            const subTitleText = subTitleRef.current;
            const container = containerComponentRef.current;

            const allWorkComp = document.querySelectorAll(".workcomp");
            const otherWorkComp = Array.from(allWorkComp).filter(comp => comp !== container)

            rl.fromTo(container, {
                scale: 1,
                zIndex: 0,
            }, {
                scale: 1.4,
                ease: "expo",
                zIndex: 50,
                duration: 0.3, 
            }).to(otherWorkComp,{
               filter:"blur(4px)"      
            },"<")
            .fromTo([titleText, subTitleText], {
                yPercent: 125,
                skew: -20, 
                scale: 1.1, 
            }, {
                yPercent: 0,
                skew: 0, 
                scale: 1, 
                ease: 'power4.out',
                duration: 0.3, 
            }, "-=0.3"); 
        }
    };
    const handleMouseLeave = () => {
        if (containerComponentRef.current) {
            const container = containerComponentRef.current;

            
            const allWorkComp = document.querySelectorAll(".workcomp");
            const otherWorkComp = Array.from(allWorkComp).filter(comp => comp !== container)

            rl.to(otherWorkComp,{
                filter:"blur(0px)"      
             }).
            fromTo(container, {
                scale: 1.4,
                zIndex: 50,
            }, {
                scale: 1,
                ease: "expo",
                zIndex: 0,
                duration: 0.3, 
            },"<");
        }
    };;


    return (
        <Link
            ref={containerComponentRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href={WorkComponentProps?.link}
            className='flex justify-start top-0  left-0 absolute overflow-hidden workcomp items-center gap-4 p-3 border rounded-xl border-neutral-300/40 bg-[#f5f5f5b3] w-full'
        >
            <div className='w-1/6 border border-neutral-400/40 py-4 flex justify-center items-center h-full rounded-lg'>
                {WorkComponentProps.icon && WorkComponentProps.icon}
            </div>
            <div className='w-full flex flex-col justify-start items-start h-full'>
                <div className="w-full overflow-hidden flex justify-between items-center">
                    <h5 className="text-lg text-neutral-700/90 font-bold h-7 overflow-hidden">
                        <div ref={titleRef}>{WorkComponentProps?.title}</div>
                    </h5>
                </div>
                <div  className="h-6 overflow-hidden">
                    <div  ref={subTitleRef} className="italic text-sm w-full text-neutral-500/70">{WorkComponentProps.subtitle}</div>
                </div>
            </div>
        </Link>
    );
};

export default WorkComponent;
