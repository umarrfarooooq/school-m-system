import React from 'react'
import "@/app/globals.css"
import Link from 'next/link'
const CustomBtn = (props) => {
  return (
    <Link className={`dark-bg-color ${props.borderClr && "border"} darkBtn white-text-color ${props.width ? "w-full" : "w-auto"} inline-block text-center transition-all font-bold rounded-lg ${props.px ? props.px : "px-8"} ${props.py ? props.py : "py-4"}`} href={props.redirect ? props.redirect : "#"}>
        {props.btnTxt ? props.btnTxt : "Learn More"}
    </Link>
  )
}

export default CustomBtn
