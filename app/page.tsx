import { Navbar } from "@/app/sections/navbar";
import { Hero } from "@/app/sections/hero";
import { About } from "@/app/sections/about";
import { Services } from "@/app/sections/services";
import { Packages } from "@/app/sections/packages";
import { Process } from "@/app/sections/process";
import { Testimonials } from "@/app/sections/testimonials";
import { FAQ } from "@/app/sections/faq";
import { Contact } from "@/app/sections/contact";
import { Footer } from "@/app/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
