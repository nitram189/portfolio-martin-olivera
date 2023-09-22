'use client'

import { AboutSection, ContactSection, Footer, HeroSection, NavBar, ProjectsSection, ScrollToTop } from "@/components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    })
  }, [])

  return (
    <main className="bg-white/80">
      <NavBar />
      <div className="xl:w-3/4 lg:w-10/12 mx-auto py-5 px-10">
        <HeroSection/>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer/>
      <ScrollToTop/>
    </main>
  );
};
