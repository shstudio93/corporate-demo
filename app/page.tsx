import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Projects } from "@/components/Projects";
import { Impact } from "@/components/Impact";
import { Approach } from "@/components/Approach";
import { Insights } from "@/components/Insights";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Impact />
        <Approach />
        <Insights />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
