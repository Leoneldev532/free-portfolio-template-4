// @ts-nocheck

"use client";
import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import SpecialLink from '../Components/SpecialLink';
import SplitType from 'split-type';
import Image from 'next/image';
import image1 from "@/public/1.jpg"
import image2 from "@/public/5.png"
import image3 from "@/public/3.png"
const Page = () => {
    const elementsRef = useRef<HTMLElement[] | null>([]);
    const [content, setContent] = useState({
        title: "Google Dev Fest 2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt fugiat eaque dolorum. Necessitatibus aut omnis reiciendis illum est qui esse excepturi numquam rerum labore. Sapiente voluptate tempore et quam."
    });

    const contents = [
        {
            title: "Google Dev Fest 2024",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt fugiat eaque dolorum. Necessitatibus aut omnis reiciendis illum est qui esse excepturi numquam rerum labore. Sapiente voluptate tempore et quam."
        },
        {
            title: "Event 2",
            description: "This is the description for Event 2. It provides details about the event and what to expect."
        },
        {
            title: "Event 3",
            description: "This is the description for Event 3. It provides details about the event and what to expect."
        }
    ];

    const [index, setIndex] = useState(0);
    const contentTitleRef = useRef<HTMLParagraphElement>(null)
    const contentDescriptionRef = useRef<HTMLParagraphElement>(null)


    

    useEffect(() => {
        const elements = document.querySelectorAll('.talkcomp');
        const txt = document.querySelectorAll('.txt');

        gsap.fromTo([elements,txt], {
            delay: 1,
            x: (index) =>  (index + 2) * -300,
            filter:"blur(5px)",
            ease: "power4.inOut",
            duration: 1,
            stagger: 0.1
        },{
            filter:"blur(0px)",
            delay: 1,
            x: 0,
            ease: "power4.inOut",
            duration: 1,
            stagger: 0.1
        });
    }, []);

    const handleClick = (newIndex: number) => {

        const elements = elementsRef.current;
        const clickedElement = elements[newIndex];

        console.log(elements[0].getBoundingClientRect().x, elements[0].getBoundingClientRect().y, "----==***")

        console.log(newIndex, "-----000")
        clickedElement.style.zIndex = '30';

        // Réinitialiser le zIndex des autres éléments
        elements.forEach((element, i) => {
            if (i !== newIndex) {
                element.style.zIndex = '20';
            }
        });

        // Mettre à jour le contenu
        setContent(contents[newIndex]);
        setIndex(newIndex);
    };

    // useLayoutEffect(() => {
    //     const contentTitle = contentTitleRef.current
    //     const descriptionSplitTxt = contentDescriptionRef.current

    //     if (contentTitle && descriptionSplitTxt) {

    //         const titleSplit = new SplitType(contentTitle, { types: "lines" });
    //         const descriptionSplit = new SplitType(descriptionSplitTxt, { types: "lines" });

    //         gsap.fromTo(titleSplit.lines, {
    //             opacity: 0,
    //             y: -20,
    //         }, {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.5,
    //             ease: "power4.out",
    //             stagger: 0.05,
    //         });

    //         gsap.fromTo(descriptionSplit.lines, {
    //             opacity: 0,
    //             y: -20,
    //         }, {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.5,
    //             ease: "power4.out",
    //             stagger: 0.05,
    //         });
    //     }
    // }, [index]);

    return (
        <section className="relative min-h-[670px] py-12 gap-y-8 justify-start items-center overflow-hidden h-full w-full flex flex-col">

            <div className='h-auto  w-full relative flex justify-start px-44 overflow-hidden my-2  gap-x-3 items-start'>
                <div
                    ref={el => elementsRef.current[0] = el}
                    onClick={() => handleClick(0)}
                    className={` h-56 w-56   rounded-lg cursor-pointer talkcomp overflow-hidden flex justify-center items-center bg-neutral-50 z-20`}
                >
                    <Image src={image1} className="object-cover h-full w-full" />

                </div >
                <div className="flex flex-col h-full  justify-between items-start gap-y-4 ">
                    <div
                        ref={el => elementsRef.current[1] = el}

                        onClick={() => handleClick(1) }

                        className='h-[6.5rem] w-24   rounded-lg cursor-pointer talkcomp overflow-hidden flex justify-center items-center bg-neutral-50 z-10'
                    >
                        <Image src={image2} className="object-cover h-full w-full" />
                    </div>
                    <div
                        ref={el => elementsRef.current[2] = el}
                        onClick={() => handleClick(2)}
                        className='h-[6.5rem] w-24  rounded-lg  cursor-pointer talkcomp overflow-hidden flex justify-center items-center bg-neutral-50 z-0'
                    >
                        <Image src={image3} className="object-cover h-full w-full" />

                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-y-4 px-44  txt justify-start items-start">
                <h3 ref={contentTitleRef} className="text-3xl font-bold content-title">{content.title}</h3>
                <p ref={contentDescriptionRef} className="content-description">
                    {content.description}
                </p>
                <SpecialLink SpecialLinkProps={{ link: "/" }} />
            </div>
        </section>
    );
};

export default Page;
