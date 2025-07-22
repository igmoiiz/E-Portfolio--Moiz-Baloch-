"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <div className="relative rounded-lg overflow-hidden shadow-xl shadow-cyan-500/10">
            <img src="/images/profile-about.jpg" alt="Abdul Moiz" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-2/3"
        >
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Flutter Developer & Mobile Engineer</h3>

          <p className="text-gray-300 mb-6 text-lg">
            Passionate Flutter developer with 1 year of experience building scalable cross-platform apps. Skilled in
            Supabase, Firebase, Node.js, and real-time UI development. Currently studying BSCS at Air University,
            Multan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Calendar className="mr-2 text-cyan-400" size={20} />
              <span>Born: 31st October 2006</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 text-cyan-400" size={20} />
              <span>Based in: Multan, Pakistan</span>
            </div>
          </div>

          <p className="text-gray-300 mb-6">
            I'm passionate about creating intuitive, performant mobile applications that solve real-world problems. My
            journey in software development began with a curiosity about how apps work, and has evolved into a deep
            expertise in Flutter and cross-platform development.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Flutter</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Dart</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Firebase</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Supabase</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">REST APIs</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
