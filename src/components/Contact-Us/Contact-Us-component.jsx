import React from "react";
import './Contact-us.css';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import CustomBtn from "../ui/CustomBtn";

const ContactUsComponent = () => {
  
  return (
    <div className="contact-us-main container">
      <div className="contact-form-page pt-4 pb-12 flex items-start gap-x-8">
        <div className="contact-inTouch-form">
          <h2 className="font-bold text-3xl py-4">
            Get In Touch
          </h2>
          <form className="contactUsForm">
          <div className="inputts flex items-center justify-between">
          <Input
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <Input className="rtlinputt ml-2"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
          </div>
            
            <Input
              className="block w-full"
              placeholder="Phone Number"
              type="number"
              name="number"
            />
            <Textarea
              required
              className="block w-full resize-none"
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
             />
            <CustomBtn width="true" btnTxt="Send Message" py="py-2"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
