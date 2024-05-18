import Image from "next/image";
import React from "react";
import "@/app/globals.css"

const ServiceCard = (props) =>{
    
    return(
        <>
            <div className="rounded-2xl white-bg-color h-fit md:my-0 cursor-pointer relative overflow-hidden hover:shadow-md p-3 hover:outline hover:outline-[#FFF500] outline-1 transition-all">
                    <Image loading="lazy" className="w-full shadow-md rounded-md max-h-[17rem] md:max-h-[13rem]" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top"}} src={props.image} alt={props.imageAlt || "Service Detail"} />
                    <div className="service-detail mt-2 text-center flex flex-col justify-between">
                        <h3 className="text-xs sm:text-2xl font-bold" style={{color:"#1A1A1A"}}>
                        {props.name.slice(0, 15)}{props.name.length > 15 ? "..." : ""}
                        </h3>
                        <p className="text-xs sm:text-lg font-semibold" style={{color:"#1A1A1A"}}>
                        {props.rank.slice(0, 15)}{props.rank.length > 15 ? "..." : ""}
                        </p>
                    </div>
            </div>
        </>
    )
}

export default ServiceCard;
