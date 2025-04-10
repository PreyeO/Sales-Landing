import FAQ from "@/components/landing-sections/FAQ";
import Hero from "@/components/landing-sections/Hero";
import HowItWorks from "@/components/landing-sections/HowItWorks";
import PastProjects from "@/components/landing-sections/PastProjects";
import Testimonials from "@/components/landing-sections/Testimonials";
import WhatYouGet from "@/components/landing-sections/WhatYouGet";
import WhyWebsite from "@/components/landing-sections/WhyWebsite";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyWebsite />
      <WhatYouGet />
      <HowItWorks />
      <PastProjects />
      <Testimonials />
      <FAQ />
    </>
  );
}
