import Link from "next/link";
import HeroSectionImage from "./images/HeroImage.svg"
import React from "react";
import Image from "next/image";
const Hero = () =>{
    const imageStyle = {
        height:"fit-content",
        width:"100%"
    }
    return(
        <>
            <section style={{background:'#9747FF'}}>
                <div className="grid py-8 mx-auto lg:gap-6 lg:py-16 lg:grid-cols-12 container">
                    <div className="mainCont mr-auto place-self-center lg:col-span-7">
                    <h1 style={{color: "#FFFBFA", lineHeight:"1.3"}} className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-bold tracking-tight leading-none md:text-5xl dark:text-white">
                    WHERE EDUCATION MEETS <br></br><span style={{color: "#FFF500"}}>INSPIRATION</span>
                    </h1>
                    
                    <p style={{color: "var(--neutral-700, #FFFBFA)"}} className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-[1rem]">
                    Lorem ipsum dolor sit amet consectetur. Justo arcu massa purus dictum a odio. Elementum quis morbi sagittis sit sed ut amet est posuere. Egestas condimentum porttitor nulla amet vestibulum vitae fusce consectetur accumsan. Id augue senectus eget nunc a elementum netus volutpat cursus. Mauris nunc massa nascetur vel purus semper. Ultricies massa nunc a viverra sodales morbi risus nibh. Volutpat velit purus magna nisl arcu sit. Lectus eleifend quam et volutpat lorem pellentesque egestas. Feugiat pellentesque in felis nec at tellus placerat.
                    </p>
                    <span  className="hidden lg:inline-block">
                    <Link className="bg-[#FFF500] text-gray-800 font-bold rounded-lg px-8 py-4" href="#">
                        Enroll Now
                    </Link>
                    </span>
                    
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex justify-end">
                    
                    <Image loading="lazy" width={500} height={300} style={imageStyle} src={HeroSectionImage.src} alt="A cheerful Nepali domestic worker in a white shirt holding a cleaning kit in one hand and wearing yellow gloves in the other, smiling." />
                    <span className="inline-block lg:hidden mt-6 w-full">
                    <Link className="bg-[#FFF500] w-full inline-block text-center text-gray-800 font-bold rounded-lg px-8 py-4" href="#">
                        Enroll Now
                    </Link>
                    </span>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero;