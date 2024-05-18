import ContactUsComponent from '@/components/Contact-Us/Contact-Us-component'
import NewBreadCrumb from '@/components/ui/NewBreadcrumb/NewBreadCrumb';
import React from 'react'

const ContactPage = () => {
    const backgroundImageUrl = 'https://res.cloudinary.com/dtcz2zuev/image/upload/v1707893084/alghawalimanpower/qubkrpihvvdey8uznlpm.jpg';
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
            <NewBreadCrumb
                pageName="Contact Us"
                title="Contact Us"
             />
            <ContactUsComponent />
        </div>
  )
}

export default ContactPage
