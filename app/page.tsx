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
    name: "Project 1",
    logo: "/project1-logo.png",
    description: "A revolutionary app that helps users manage their daily tasks with AI-powered suggestions and smart organization features.",
    url: "https://project1.com"
  },
  {
    name: "Project 2",
    logo: "/project1-logo.png",
    description: "An innovative platform connecting freelancers with clients, featuring real-time collaboration tools and secure payments.",
    url: "https://project2.com"
  },
  {
    name: "Project 3",
    logo: "/project1-logo.png",
    description: "A mobile-first solution for tracking personal fitness goals, with customized workout plans and nutrition advice.",
    url: "https://project3.com"
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
    <main className="max-w-6xl mx-auto px-4 py-8">
      <ProfileSection />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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