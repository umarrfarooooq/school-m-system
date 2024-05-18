"use client"
import React, { useEffect, useState } from "react";

const AnimatedDiv = () => {
    const [isExpanded, setIsExpanded] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsExpanded((prev) => !prev);
      }, 500);
  
      return () => clearInterval(interval);
    }, []);
  
    const divStyle = {
      width: isExpanded ? '1.5rem' : '1.25rem',
      height: isExpanded ? '1.5rem' : '1.25rem',
      backgroundColor: '#A91D3A',
      borderRadius: '50%',
    };
  
    return <div style={divStyle}></div>;
  };

const Loader = () =>{
    return(
        <>
            <div className="flex items-center justify-center h-screen">
            <div>
                <div className="flex items-center justify-center gap-2 mt-4">
                    <AnimatedDiv />
                    <div className="w-6 h-6 bg-[#A91D3A] rounded-full"></div>
                    <div className="w-6 h-6 bg-[#A91D3A] rounded-full"></div>
                </div>
            </div>
                
            </div>
        </>
    )
}

export default Loader;