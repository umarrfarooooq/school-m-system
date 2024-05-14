import React from 'react'
import Link from "next/link"
import Image from 'next/image';
import CourseImage from "./images/course.jpg"
const CourseHomeComponent = () => {
  return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#9747FF]">
      <div className="container">
        <div
          className="grid gap-4 md:grid-cols-2 md:gap-16">
          <div>
            <h1
              className="lg:leading-tighter text-3xl text-gray-100 font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Explore Our Diverse Course Offerings
            </h1>
            <p
              className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              From beginner to advanced, we have a wide range of courses to help you achieve your learning goals.
            </p>
            <div className="mt-6">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#FFF500] px-4 py-2 text-sm font-medium text-gray-700 shadow transition-colors hover:bg-[#fffc98] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                href="/courses">
                View All Courses
              </Link>
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
