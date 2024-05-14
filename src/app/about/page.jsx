import AboutUsMain from '@/components/About/About';
import NewBreadCrumb from '@/components/ui/NewBreadcrumb/NewBreadCrumb';
import React from 'react'

const About = () => {
    const backgroundImageUrl = 'https://res.cloudinary.com/dtcz2zuev/image/upload/v1707893084/alghawalimanpower/qubkrpihvvdey8uznlpm.jpg';
  return (
    <>
        <div className="bg-cover" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
            <NewBreadCrumb
                pageName="About Us"
                title="Edu Brains"
                discription="Lorem ipsum dolor sit amet consectetur. Justo arcu massa purus dictum a odio. Elementum quis morbi sagittis sit sed ut amet est posuere. Egestas condimentum porttitor nulla amet vestibulum vitae fusce consectetur accumsan."
             />
            <AboutUsMain />
        </div>
    </>
  )
}

export default About
