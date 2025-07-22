"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "ShopEase",
    description: "Full-stack e-commerce app with product catalog, cart functionality, and secure payment processing.",
    image: "/images/shopease.jpg",
    github: "https://github.com/igmoiiz/Shop-Ease-Full_Stack",
    tech: ["Flutter", "Firebase", "Stripe", "Provider"],
  },
  {
    id: 2,
    title: "Superior Weather App",
    description: "Weather forecasting app with real-time updates, location tracking, and interactive weather maps.",
    image: "/images/superior-weather.png",
    github: "https://github.com/igmoiiz/Superior-Weather---Main",
    tech: ["Flutter", "Weather API", "Geolocation", "Charts"],
  },
  {
    id: 3,
    title: "Social Chat App",
    description: "Real-time messaging platform with user profiles, group chats, and media sharing capabilities.",
    image: "/images/social-chat.png",
    github: "https://github.com/igmoiiz/social-chat-application",
    tech: ["Flutter", "Firebase", "Cloud Functions", "Push Notifications"],
  },
  {
    id: 4,
    title: "Covid-19 Tracker",
    description: "Data visualization app for tracking COVID-19 statistics globally with interactive maps and charts.",
    image: "/images/covid-tracker.png",
    github: "https://github.com/igmoiiz/Covid-19-Tracker",
    tech: ["Flutter", "REST API", "Charts", "Animations"],
  },
  {
    id: 5,
    title: "iWent",
    description: "Smart event discovery platform with location-based recommendations and integrated booking system.",
    image: "/images/iwent.jpg",
    github: "https://github.com/igmoiiz/iWent",
    tech: ["Flutter", "AI/ML", "Maps API", "Payment Gateway", "Firebase"],
  },
  {
    id: 6,
    title: "BLYND",
    description: "AI-powered social media platform with intelligent feed curation and smart user assistance features.",
    image: "/images/blynd.jpg",
    github: "https://github.com/igmoiiz/BLYND",
    tech: ["Flutter", "AI/ML", "Firebase", "TensorFlow", "Social Features"],
  },
  {
    id: 7,
    title: "Arena (Gaming App)",
    description: "Gaming platform with user profiles, leaderboards, and multiplayer functionality (In Progress).",
    image: "/images/arena.png",
    github: "https://github.com/igmoiiz/Arena---FullStack---Gaming-Application",
    tech: ["Flutter", "Supabase", "WebSockets", "Node.js"],
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const handleProjectClick = (githubUrl: string) => {
    window.open(githubUrl, "_blank")
  }

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group rounded-xl overflow-hidden shadow-xl shadow-cyan-500/10 bg-gray-900/50 backdrop-blur-sm border border-gray-800 cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleProjectClick(project.github)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-800 rounded-md text-xs text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.github, "_blank")
                  }}
                  className="text-gray-300 hover:text-white"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: hoveredId === project.id ? 1 : 0.8,
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-4 right-4 bg-gray-900/80 rounded-full p-2"
                >
                  <ExternalLink size={16} className="text-cyan-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
