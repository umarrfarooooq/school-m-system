import Link from "next/link";
import AboutSectionImage from "./images/About.png"
import React from "react";
import "@/app/globals.css"

import Image from "next/image";
import CustomBtn from "../ui/CustomBtn";
const About = () =>{
    const imageStyle = {
        width:"100%"
    }
    return(
        <>
            <section style={{background:'linear-gradient(90deg, rgba(199,54,89,.1) 0%, rgba(238,238,238,1) 100%)'}}>
                <div className="py-8 lg:py-0 flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto lg:gap-6">
                    <div className="mainCont w-full lg:ml-12 xl:ml-20 2xl:mr-20 2xl:ml-0 h-full lg:flex items-end justify-end lg:p-0 container">
                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-12">
                    <h1 style={{lineHeight:"1.3"}} className="max-w-2xl black-text-color mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-bold tracking-tight leading-none md:text-5xl">
                    About <br></br><span>EDUBRAINS</span>
                    <div className="h-5 w-1/2 dark-bg-color rounded-2xl mt-2"></div>
                    </h1>
                    
                    <p className="max-w-2xl black-text-color mb-6 text-justify font-normal lg:mb-8 text-sm md:text-lg lg:text-2xl">
                    Lorem ipsum dolor sit amet consectetur. A et lacus elit malesuada pellentesque. Accumsan in quis et cursus enim at risus. Magna massa arcu sapien metus sit tortor. Eget metus eget massa tempor.
                    </p>
                    <span  className="hidden lg:inline-block">
                    <CustomBtn />
                    </span>
                    
                    </div>
                    
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex justify-end h-full container lg:w-full lg:p-0">
                    <Image className="object-cover object-top h-[20rem] lg:h-[45rem]" style={imageStyle} src={AboutSectionImage} alt="About section Main Image" />
                    <img />
                    <span className="inline-block lg:hidden mt-6 w-full">
                    <Link className="bg-[#FFF500] w-full inline-block text-center text-gray-800 font-bold rounded-lg px-8 py-4" href="#">
                        Learn More
                    </Link>
                    </span>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About;