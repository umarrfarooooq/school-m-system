import React from "react";

const NewsLetter = () => {

  return (
    <div style={{backgroundColor:"#fff"}} className="flex flex-col items-start py-24 gap-[48px] relative">
    <div className="relative w-full container">
    <div style={{backgroundColor:"#FFFBFA"}} className="border shadow-lg flex items-center justify-center gap-[10px] py-8 px-1 sm:p-[88px] relative self-stretch w-full flex-[0_0_auto] rounded-[16px] overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-[32px] relative flex-1 grow">
          <div className="flex flex-col items-start gap-[8px]  py-0 relative self-stretch w-full flex-[0_0_auto]">
            <p className="text-base sm:text-lg md:text-xl lg:text-[2rem] lg:leading-[1.2] font-[550] md:font-semibold lg:font-bold w-full lg:w-3/4 mx-auto relative self-stretch font-16-phragraph-title3 text-colors-neutral-700 text-[length:var(--16-phragraph-title3-font-size)] text-center tracking-[var(--16-phragraph-title3-letter-spacing)] leading-[var(--16-phragraph-title3-line-height)] [font-style:var(--16-phragraph-title3-font-style)]">
            Subscribe to get information, latest news and other
            interesting News about <span className="text-[#9747FF]">EDUBRAINS</span> 
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[24px] relative self-stretch w-full flex-[0_0_auto] rounded-[8px]">
            <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
              <div style={{borderRadius:".5rem"}} className="rtlNeedHInput flex w-full sm:w-[390px] items-center gap-[10px] py-[.5rem] px-3 md:px-4 relative self-stretch bg-colors-background-color overflow-hidden border border-solid border-colors-stroke-color shadow-[0px_30px_27px_#000c2b14]">
              <span className="svgEmail">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#8C979C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="#8C979C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </span>
                <input className="w-full h-full outline-none bg-transparent" type="email" placeholder="Your Email"/>
                <div style={{borderRadius:".5rem", color:"white"}} className="bg-[#9747FF] transition-all hover:bg-[#8c44e9] active:bg-[#7631d1] inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]  shadow-[0px_30px_27px_#000c2b14]">
                <button style={{paddingBlock:".75rem"}} className="w-full h-full outline-none px-6">Submit</button>
              </div>
              </div>
              
            </div>
          </div>
          </div>
        
      </div>
    </div>
      
    </div>
  );
};
export default NewsLetter;