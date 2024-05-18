import React from "react";
import ServiceCard from "./Service-Card";
import Link from "next/link";
import Teacher from "./images/teacher.png"
import CustomBtn from "../ui/CustomBtn";
const Services = () =>{
    return(
        <section className="services-section dark-bg-low-opacity">
            <div className="py-8 sm:py-16 container">
                <div className=" mb-4 lg:mb-8 flex items-center justify-center flex-col sm:flex-row">
                <h2 className="text-lg sm:text-xl md:text-4xl tracking-tight font-semibold">Our Teachers</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 md:space-y-0">
                    <ServiceCard
                        key={1}
                        name="Umar"
                        rank="Principal"
                        image={Teacher}
                    />            
                    <ServiceCard
                        key={2}
                        name="Umar"
                        rank="Principal"
                        image={Teacher}
                    />            
                    <ServiceCard
                        key={3}
                        name="Umar"
                        rank="Principal"
                        image={Teacher}
                    />            
                    <ServiceCard
                        key={4}
                        name="Umar"
                        rank="Principal"
                        image={Teacher}
                    />            
                </div>
                <div className="w-full flex items-center justify-center my-4 lg:my-16">
                <button>
                    <div className="flex items-center">
                    <CustomBtn />
                    </div>
 
                </button>

                </div>

            </div>
        </section>
    )
}

export default Services;