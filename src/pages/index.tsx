import Image from "next/image";
import { Inter } from "next/font/google";
import Experience from "@/components/experience";
import Seniordeveloper from "@/components/seniordeveloper";
import Projects from "@/components/projects";
import Service from "@/components/service";
import Contact from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return ( 
    <main
      className={`w-full`}
    >
      <Seniordeveloper />
      <Experience />
      <Projects />
      <Service />
      <Contact />
    </main>
  );
}
