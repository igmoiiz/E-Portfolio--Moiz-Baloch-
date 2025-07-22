"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Flutter", icon: "🔷", level: 90 },
  { name: "Dart", icon: "🎯", level: 90 },
  { name: "Firebase", icon: "🔥", level: 85 },
  { name: "Supabase", icon: "⚡", level: 80 },
  { name: "Node.js", icon: "🟢", level: 75 },
  { name: "REST APIs", icon: "🌐", level: 85 },
  { name: "Google Maps", icon: "🗺️", level: 80 },
  { name: "Python", icon: "🐍", level: 70 },
  { name: "C++", icon: "⚙️", level: 65 },
  { name: "Postman", icon: "📬", level: 80 },
  { name: "Provider", icon: "🔄", level: 85 },
  { name: "State Management", icon: "📊", level: 85 },
  { name: "UI/UX Design", icon: "🎨", level: 75 },
]

export default function Skills() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{skill.icon}</span>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
            <div className="mt-2 text-right text-sm text-gray-400">{skill.level}%</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
