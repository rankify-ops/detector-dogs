import { Hero } from "@/components/Hero";
import { KeepSafe, Services, Standards, WhyCanine, Process, Testimonials, Scope } from "@/components/Sections";
import { Odours } from "@/components/Odours";
import { Coverage } from "@/components/Coverage";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <KeepSafe />
      <Services />
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
