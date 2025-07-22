"use client"

import { motion } from "framer-motion"
import { Calendar, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Certifications</h2>
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
              <Award className="mr-2 text-cyan-400" size={20} />
              <h3 className="text-xl font-bold">Web Enumeration</h3>
            </div>

            <h4 className="text-lg font-medium mb-2">Udemy</h4>

            <div className="flex items-center mb-4 text-gray-400">
              <Calendar className="mr-2" size={16} />
              <span>Completed: July 26, 2024</span>
            </div>

            <p className="text-gray-300 mb-4">
              Comprehensive course on Ethical Hacking & Web Enumeration techniques, covering vulnerability assessment,
              penetration testing methodologies, and security best practices.
            </p>

            <div className="flex items-center">
              <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 bg-transparent">
                <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
