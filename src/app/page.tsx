import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stat from "@/components/Stat";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import ImageSlider from "@/components/ImageSlider";
import CardContainer from "@/components/CardContainer";
import Blog from "@/components/Blog";
import TestimonialsSection from "@/components/TestimonialsSection";
import Download from "@/components/Download";
import Features from "@/components/Features";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <div>
       
        {/* <Hero/> */}
       
        <Form/>
        <Stat/>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <CardContainer />
        </div>
        <Features/>
        <Blog/>
        <Download/>
        <TestimonialsSection/>
        <Footer/>
      </div>     
    </main>
  );
}
//sm:p-5 justify-between