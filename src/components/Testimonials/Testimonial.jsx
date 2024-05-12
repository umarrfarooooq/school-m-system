import React from "react";
import Client from "./img/avatar.svg"
import star from "./img/Star.svg"
import Image from "next/image";
const Testimonial = (props)=>{
    return(
        <>
        <div className="flex items-center justify-center flex-col">
            <div>
                <Image className="w-[3.5rem] h-[3.5rem]" src={Client} alt="testimonialPic"/>
              </div>
            <div className="stars flex items-center gap-1 mt-2">
              <Image src={star} alt="Star"/>
              <Image src={star} alt="Star"/>
              <Image src={star} alt="Star"/>
              <Image src={star} alt="Star"/>
              <Image src={star} alt="Star"/>
            </div>
            <div className="flex items-center mt-2">
              
              <div className="flex flex-col items-center gap-1">
                <div className="font-medium">
                  {props.testimonial.name}
                </div>
                <div className="text-xs font-normal">{props.testimonial.position}</div>
              </div>
            </div>
            <div className="font-normal mt-3 text-sm">
            {props.testimonial.msg}
            </div>
            
        </div>
            
        </>
        
    )
}
export default Testimonial;