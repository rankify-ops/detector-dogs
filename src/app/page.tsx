import { Hero } from "@/components/Hero";
import { Clients, Capabilities, Standards, WhyCanine, Process, Testimonials, Scope } from "@/components/Sections";
import { Odours } from "@/components/Odours";
import { Coverage } from "@/components/Coverage";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Capabilities />
      <Standards />
      <WhyCanine />
      <Odours />
      <Coverage />
      <Process />
      <Testimonials />
      <Scope />
      <Contact />
    </>
  );
}
