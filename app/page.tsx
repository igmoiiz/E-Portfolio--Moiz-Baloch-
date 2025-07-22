"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const mainRef = useRef<HTMLDivElement>(null)

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main ref={mainRef} className="relative bg-gray-900 text-white">
      <Navbar scrollToSection={scrollToSection} />

      <section id="hero" className="relative min-h-screen">
        <ParticleBackground />
        <Hero />
      </section>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <section id="about" className="py-20 px-4 md:px-8 lg:px-16">
          <About />
        </section>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800">
          <Skills />
        </section>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <section id="projects" className="py-20 px-4 md:px-8 lg:px-16">
          <Projects />
        </section>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800">
          <Experience />
        </section>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <section id="education" className="py-20 px-4 md:px-8 lg:px-16">
          <Education />
        </section>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <section id="certifications" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800">
          <Certifications />
        </section>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
          <Contact />
        </section>
      </motion.div>
    </main>
  )
}
