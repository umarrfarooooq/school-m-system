import Link from "next/link";
import AboutSectionImage from "./images/About.png"
import React from "react";
import Image from "next/image";
const About = () =>{
    const imageStyle = {
        width:"100%"
    }
    return(
        <>
            <section style={{background:'#FFF'}}>
                <div className="py-8 lg:py-0 flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto lg:gap-6">
                    <div className="mainCont w-full lg:ml-12 xl:ml-20 2xl:mr-20 2xl:ml-0 h-full lg:flex items-end justify-end lg:p-0 container">
                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-12">
                    <h1 style={{lineHeight:"1.3"}} className="max-w-2xl text-gray-800 mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-bold tracking-tight leading-none md:text-5xl dark:text-white">
                    About <br></br><span>EDUBRAINS</span>
                    <div className="h-5 w-1/2 bg-[#9747FF] rounded-2xl mt-2"></div>
                    </h1>
                    
                    <p className="max-w-2xl text-gray-800 mb-6 text-justify font-normal lg:mb-8 text-sm md:text-lg lg:text-2xl">
                    Lorem ipsum dolor sit amet consectetur. A et lacus elit malesuada pellentesque. Accumsan in quis et cursus enim at risus. Magna massa arcu sapien metus sit tortor. Eget metus eget massa tempor.
                    </p>
                    <span  className="hidden lg:inline-block">
                    <Link className="bg-[#FFF500] text-gray-800 font-bold rounded-lg px-8 py-4" href="#">
                        Learn More
                    </Link>
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