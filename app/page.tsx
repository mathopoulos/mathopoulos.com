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
  role: string
  label?: {
    text: string
    color: string
  }
}

const projects: Project[] = [
  {
    name: "Trello",
    logo: "/trello-logo.png",
    description: "The visual collaboration tool that empowers teams to ideate, plan, manage, and deliver their best work.",
    url: "https://trello.com",
    themeColor: "#298FCA",
    role: "Product Manager"
  },
  {
    name: "Stong",
    logo: "/bicept.png",
    description: "A health and fitness app that helps you track your workouts and achieve your fitness goals.",
    url: "https://stong.app",
    themeColor: "#22C55E",
    role: "Founder",
    label: {
      text: "Coming soon",
      color: "#8B5CF6"
    }
  },
  {
    name: "Foundation",
    logo: "/foundation-logo.png",
    description: "Buy real estate with your friends & community - powered by web3. Create an investment proposal, share it with others, pool funds, and then sit back, and relax while we acquire it for you.",
    url: "https://labeling-touch-529689.framer.app/",
    themeColor: "#6E3FF3",
    role: "Founder",
    label: {
      text: "Shut down",
      color: "#DC2626"
    }
  },
  {
    name: "BuildOS",
    logo: "/crane-logo.png",
    description: "The first platform where code & no-code developers work together. The modern way to build software.",
    url: "https://buildos.framer.website/",
    themeColor: "#4A4A4A",
    role: "Founder",
    label: {
      text: "Shut down",
      color: "#DC2626"
    }
  }
]

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalPosition, setModalPosition] = useState<{ x: number, y: number } | null>(null)

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <ProfileSection />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            logo={project.logo}
            onClick={(position) => {
              setModalPosition(position)
              setSelectedProject(project)
            }}
            label={project.label}
            role={project.role}
          />
        ))}
      </div>

      {selectedProject && modalPosition && (
        <ProjectModal
          project={selectedProject}
          position={modalPosition}
          onClose={() => {
            setSelectedProject(null)
            setModalPosition(null)
          }}
        />
      )}
    </main>
  )
} 