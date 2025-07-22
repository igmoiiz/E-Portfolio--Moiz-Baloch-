"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export default function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Abdul_Moiz_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/20">
          <img src="/images/profile-hero.jpg" alt="Abdul Moiz" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-2"
      >
        Abdul Moiz
      </motion.h1>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xl md:text-2xl font-medium text-cyan-400 mb-4"
      >
        Flutter Developer | Full-Stack Mobile Engineer
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-gray-300 max-w-2xl mb-8"
      >
        Crafting cross-platform experiences with Flutter, Firebase & Supabase.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Button
          onClick={handleResumeDownload}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
        >
          <FileText className="mr-2 h-4 w-4" /> View Resume
        </Button>

        <Button
          variant="outline"
          onClick={() => window.open("https://github.com/igmoiiz", "_blank")}
          className="border-gray-500 text-gray-300 hover:border-white hover:text-white"
        >
          <Github className="mr-2 h-4 w-4" /> GitHub
        </Button>

        <Button
          variant="outline"
          onClick={() => window.open("https://www.linkedin.com/in/moaiz-baloch-a615392b4", "_blank")}
          className="border-gray-500 text-gray-300 hover:border-white hover:text-white"
        >
          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </Button>

        <Button
          variant="outline"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="border-gray-500 text-gray-300 hover:border-white hover:text-white"
        >
          <Mail className="mr-2 h-4 w-4" /> Contact Me
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10"
      >
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
