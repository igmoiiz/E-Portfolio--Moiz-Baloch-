"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase } from "lucide-react"

const experiences = [
  {
    id: 1,
    company: "Brain Hub Technologies",
    position: "Flutter Developer",
    duration: "October 2024 – December 2024",
    description: [
      "Developed cross-platform mobile applications for various clients using Flutter",
      "Collaborated with design teams to implement pixel-perfect UI/UX designs",
      "Integrated REST APIs and third-party services for enhanced app functionality",
      "Optimized app performance and implemented state management solutions",
      "Participated in code reviews and maintained high code quality standards",
    ],
  },
  {
    id: 2,
    company: "NOCTEX",
    position: "Freelance Software Maintenance",
    duration: "January 2025 – March 2025",
    description: [
      "Performed code optimization for existing Flutter applications",
      "Implemented feature enhancements based on client requirements",
      "Integrated push notification systems for improved user engagement",
      "Debugged and resolved performance issues in production applications",
      "Collaborated with remote team members to meet project deadlines",
    ],
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative pl-8 ${index < experiences.length - 1 ? "pb-12" : ""} border-l-2 border-gray-700`}
          >
            <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-cyan-400"></div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <Briefcase className="mr-2 text-cyan-400" size={20} />
                <h3 className="text-xl font-bold">
                  {experience.company} – {experience.position}
                </h3>
              </div>

              <div className="flex items-center mb-4 text-gray-400">
                <Calendar className="mr-2" size={16} />
                <span>{experience.duration}</span>
              </div>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
