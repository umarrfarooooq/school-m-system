import About from "@/components/Main/About";
import Hero from "@/components/Main/Hero";
import Services from "@/components/Services/Services";
import NewsLetter from "@/components/Newsletter/NewsLetter";
import { Testimonial2 } from "@/components/Testimonial2/Testimonial2";
import CourseHomeComponent from "@/components/Main/Course";
export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Testimonial2 />
    <CourseHomeComponent />
    <NewsLetter />
    </>
  );
}
