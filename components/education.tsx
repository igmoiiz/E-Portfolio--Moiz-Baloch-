"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative pl-8 pb-12 border-l-2 border-gray-700"
        >
          <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-cyan-400"></div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <GraduationCap className="mr-2 text-cyan-400" size={20} />
              <h3 className="text-xl font-bold">Bachelor of Science in Computer Science (BSCS)</h3>
            </div>

            <h4 className="text-lg font-medium mb-2">Air University, Multan Campus</h4>

            <div className="flex items-center mb-4 text-gray-400">
              <Calendar className="mr-2" size={16} />
              <span>October 2023 – Present</span>
            </div>

            <div className="space-y-3 text-gray-300">
              <p>Currently in 5th Semester</p>
              <p>CGPA: 3.01</p>
              <p>Relevant Coursework:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Data Structures and Algorithms</li>
                <li>Object-Oriented Programming</li>
                <li>Database Management Systems</li>
                <li>Web Development</li>
                <li>Mobile Application Development</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
