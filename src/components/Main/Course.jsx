import React from 'react'
import Image from 'next/image';
import CourseImage from "./images/course.jpg"
import CustomBtn from '../ui/CustomBtn';
const CourseHomeComponent = () => {
  return (
      <section className="w-full py-12 md:py-24 lg:py-32 dark-bg-low-opacity">
      <div className="container">
        <div
          className="grid gap-4 md:grid-cols-2 md:gap-16">
          <div>
            <h1
              className="lg:leading-tighter text-3xl black-text-color font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Explore Our Diverse Course Offerings
            </h1>
            <p
              className="mx-auto max-w-[700px] black-text-color md:text-xl">
              From beginner to advanced, we have a wide range of courses to help you achieve your learning goals.
            </p>
            <div className="mt-6">
              <CustomBtn redirect="/courses" btnTxt="View All Courses"/>
            </div>
          </div>
          <Image
            alt="Courses"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            height="550"
            src={CourseImage}
            width="550" />
        </div>
      </div>
    </section>
  )
}

export default CourseHomeComponent;
