// @ts-nocheck
import { buttonStyles } from "@/app/Components/SpecialButton";
import {VariantProps } from "class-variance-authority";
import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";





  

export type buttonType  =  VariantProps<typeof buttonStyles> & {
    image:StaticImageData,
    title?:string,
    iconPosition:"left" | "right",
    onClick?:()=>void

}


type itemsPack = {
    icon:StaticImageData,
    price:number
}


export type packType = {
    title:string,
    bigImage:StaticImageData,
    listOfItems:itemsPack[],
    finalPrice:number,
    allowAnimation?:boolean

}

export type productType = {
    number:string,
    image:StaticImageData,
    price:number,
    allowAnimation:boolean
}


export type workComponentType = {
    title:string,
    subtitle:string,
    link:string,
    icon:ReactNode 
}

export type specialLinkType = {
    link:string | Url
}