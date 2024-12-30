'use client'

import { useState } from 'react'
import ProfileSection from './components/ProfileSection'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'

interface Project {
  name: string
  logo: string
  description: string
  url: string
}

const projects: Project[] = [
  {
    name: "Foundation",
    logo: "/foundation-logo.png",
    description: "A revolutionary app that helps users manage their daily tasks with AI-powered suggestions and smart organization features.",
    url: "https://project1.com"
  },
  {
    name: "BuildOS",
    logo: "/crane-logo.png",
    description: "An innovative platform connecting freelancers with clients, featuring real-time collaboration tools and secure payments.",
    url: "https://project2.com"
  },
  {
    name: "Trello",
    logo: "/trello-logo.png",
    description: "The visual collaboration tool that empowers teams to ideate, plan, manage, and deliver their best work.",
    url: "https://trello.com"
  },
  {
    name: "Project 4",
    logo: "/project1-logo.png",
    description: "An e-commerce platform specializing in sustainable products, with carbon footprint tracking for each purchase.",
    url: "https://project4.com"
  },
  {
    name: "Project 5",
    logo: "/project1-logo.png",
    description: "A social media analytics tool helping businesses understand and engage with their audience more effectively.",
    url: "https://project5.com"
  },
  {
    name: "Project 6",
    logo: "/project1-logo.png",
    description: "A cloud-based solution for small businesses to manage their inventory and supply chain efficiently.",
    url: "https://project6.com"
  }
]

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <ProfileSection />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            logo={project.logo}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  )
} 