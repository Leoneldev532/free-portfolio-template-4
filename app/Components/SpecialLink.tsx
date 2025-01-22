"use client"
import { specialLinkType } from '@/lib/type'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useRef } from 'react'

const SpecialLink = (SpecialLinkProps:{SpecialLinkProps:specialLinkType}) => {

    const gl = gsap.timeline()

    const linkSeeMoreRef1 = useRef<HTMLDivElement>(null)
    const linkSeeMoreRef2 = useRef<HTMLDivElement>(null)

    const handleHoverLink = () => {
        if(!linkSeeMoreRef1 && !linkSeeMoreRef2 ) return ; 

        gl.to(linkSeeMoreRef1.current, {
            y: -20,
            duration: 0.3,
            skew: 3,
        }).to(linkSeeMoreRef2.current, {
            y: -20,
            duration: 0.3,
            skew: 3,
        }, "<")
    }

    const handleLeaveLink = () => {

        if(!linkSeeMoreRef1 && !linkSeeMoreRef2  ) return ; 
        

        gl.to(linkSeeMoreRef2.current, {
            y: 0,
            skew: 3,
            duration: 0.3
        }).to(linkSeeMoreRef1.current, {
            y: 0,
            skew: 3,
            duration: 0.3
        }, "<")
    }


    return (
        <Link onMouseOver={handleHoverLink} onMouseLeave={handleLeaveLink}
         href={SpecialLinkProps?.SpecialLinkProps}
         className="relative flex flex-col h-7 justify-start items-center  overflow-hidden">
                    <div ref={linkSeeMoreRef1} className="italic h-9  flex gap-x-2 justify-center hover:text-neutral-600 items-center text-neutral-400 " >

                        <span>See more here </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </div>
                    <div ref={linkSeeMoreRef2} className="italic h-9  flex gap-x-2 justify-center hover:text-neutral-600 items-center text-neutral-400 " >

                        <span>See more here </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </div>
                </Link>
    )
}

export default SpecialLink
