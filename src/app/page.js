import { Navbar } from "@/components/Header/Navbar";
import About from "@/components/Main/About";
import Hero from "@/components/Main/Hero";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import NewsLetter from "@/components/Newsletter/NewsLetter";
import Footer from "@/components/Footer/Footer";
import { Testimonial2 } from "@/components/Testimonial2/Testimonial2";
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <Testimonial2 />
    <NewsLetter />
    <Footer />
    
    </>
  );
}
