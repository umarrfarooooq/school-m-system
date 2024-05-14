import React from 'react'
import { Courses } from '@/components/Courses/Courses'
import NewBreadCrumb from '@/components/ui/NewBreadcrumb/NewBreadCrumb';
const CoursePage = () => {
    const backgroundImageUrl = 'https://res.cloudinary.com/dtcz2zuev/image/upload/v1707893084/alghawalimanpower/qubkrpihvvdey8uznlpm.jpg';
  return (
    <div className="bg-cover bg-opacity-90" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
        <NewBreadCrumb
            pageName="Courses"
            title="Courses"
            discription="Lorem ipsum dolor sit amet consectetur. Justo arcu massa purus dictum a odio. Elementum quis morbi sagittis sit sed ut amet est posuere. Egestas condimentum porttitor nulla amet vestibulum vitae fusce consectetur accumsan."
            />
        <Courses />
    </div>
  )
}

export default CoursePage;
