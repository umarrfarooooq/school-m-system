import React from "react";
import Link from "next/link";
import mainImage from "./services-breadcrumb.png"
import Image from "next/image";
const NewBreadCrumb = (props) =>{

    const imageStyle = {
        height:"fit-content",
        width:"100%",
        height: "auto",
        borderBottomLeftRadius:"35rem",
        borderBottomRightRadius:"35rem"
    }
    return(
        <>
            <section className="py-10 container">
                <div className="grid rounded-3xl py-10 lg:gap-8 xl:gap-0 lg:grid-cols-12 lg:bg-[#FFFBFA]">
                    <div className="mainCont lg:pl-10 mr-auto place-self-center lg:col-span-7">
                    <p className="max-w-2xl text-xs mb-6 font-medium lg:mb-8 md:text-base" style={{color: "#8C979C"}}>
                    Home / <span className="text-[#262F32]">{props.pageName}</span>
                    </p>
                    <h1 style={{color: "#262F32", lineHeight:"1.3"}} className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    {props.title}
                    </h1>
                    
                    <p style={{color: "var(--neutral-700, #434146)"}} className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-lg">
                    {props.discription}                    
                    </p>
                    {props.buttonTxt && <span>
                        <Link href="/contact" className="font-medium text-center rounded-lg">
                            <button className="text-[#FFFBFA] bg-[#107243] px-3 py-1">Learn More</button>
                        </Link>
                    </span>}
                    
                    </div>
                    <div className={`${props.pageName === "Blogs" ? "inline-block" : "hidden" } lg:mt-0 lg:col-span-5 lg:flex justify-end items-center`}>
                    {props.pageName === "Courses" ?
                    <Image loading="lazy" style={imageStyle} src={mainImage} alt="A cheerful Nepali domestic worker in a white shirt holding a cleaning kit in one hand and wearing yellow gloves in the other, smiling." />
                    : props.pageName === "Blogs" ? <div style={{border:"1px solid #C3D0D4"}} className="flex h-max items-center gap-2 bg-[#EBEBEB] p-3 rounded-xl">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.0002 21.4992L16.7002 17.1992" stroke="#434146" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span>
                        <input type="text" placeholder="Search Topic" className="outline-none bg-transparent"/>
                    </span>
                        </div> : ""
                    }
                    </div>
                </div>
            </section>

        </>
    )
}

export default NewBreadCrumb;