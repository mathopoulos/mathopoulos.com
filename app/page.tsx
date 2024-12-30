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
  themeColor: string
}

const projects: Project[] = [
  {
    name: "Trello",
    logo: "/trello-logo.png",
    description: "The visual collaboration tool that empowers teams to ideate, plan, manage, and deliver their best work.",
    url: "https://trello.com",
    themeColor: "#298FCA"
  },
  {
    name: "Foundation",
    logo: "/foundation-logo.png",
    description: "Buy real estate with your friends & community - powered by web3. Create an investment proposal, share it with others, pool funds, and then sit back, and relax while we acquire it for you.",
    url: "https://labeling-touch-529689.framer.app/",
    themeColor: "#6E3FF3"
  },
  {
    name: "BuildOS",
    logo: "/crane-logo.png",
    description: "The first platform where code & no-code developers work together. The modern way to build software.",
    url: "https://buildos.framer.website/",
    themeColor: "#4A4A4A"
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