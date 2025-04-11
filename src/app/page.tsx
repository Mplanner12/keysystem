import Offerings from "@/components/Offerings";
import Hero from "../components/Hero";
import LogoCarousel from "../components/LogoCarousel";
import Navbar from "../components/Navbar";
import Trust from "../components/Trust";
import WhatWeRepresent from "@/components/WhatWeRepresent";
import Compliance from "@/components/Compliance";
import TheyTrustUs from "@/components/TheyTrust";
import OurProcess from "@/components/OurProcess";
import OurPartners from "@/components/OurPartners";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-r from-[#05071E] via-[#05071E] to-[#111A89] h-full flex flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Trust />
      <Offerings />
      <WhatWeRepresent />
      <Compliance />
      <TheyTrustUs />
      <OurProcess />
      <OurPartners />
      <GetStarted />
      <Footer />
    </main>
  );
}
