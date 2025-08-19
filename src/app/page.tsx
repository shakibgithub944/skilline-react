import Image from "next/image";
import Hero from "../components/Hero";
import Trusted from "../components/Trusted";
import AllInOne from "../components/AllInOne";
import WhatSkilline from "../components/WhatSkilline";
import Everything from "../components/Everything";
import UserInterface from "../components/UserInterface";
import Tools from "../components/Tools";
import Assessments from "../components/Assessments";
import ClassManagement from "../components/ClassManagement";
import Testimonial from "../components/Testimonial";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
        <Trusted />
        <AllInOne />
        <WhatSkilline />
        <Everything />
        <UserInterface />
        <Tools />
        <Assessments />
        <ClassManagement />
        <Testimonial />
        <LatestNews />
      </div>
      <Footer />
    </div>
  );
}
