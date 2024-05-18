import React from 'react'
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image";
import CustomBtn from '../ui/CustomBtn';
const CourseCard = () => {
  return (
    <>
        <Card>
            <Image
              alt="Course 1"
              className="object-cover w-full h-48 rounded-t-lg"
              height={225}
              src="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/c0q23b7tcfpixbcssrrh"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400} />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
              </p>
              <div className="mt-4">
              <CustomBtn py="py-2" width="true"/>
              </div>
            </CardContent>
        </Card>
    </>
  )
}

export default CourseCard
