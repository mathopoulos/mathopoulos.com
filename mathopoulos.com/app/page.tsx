'use client'
import React, { useState } from 'react'
import ProfileSection from './components/ProfileSection'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'

type Project = {
  name: string
  logo: string
  description: string
  url: string
}

const projects: Project[] = [
  {
    name: 'Project 1',
    logo: '/project1-logo.png',
    description: 'Detailed description of project 1 goes here. Explain what the project does and what technologies were used.',
    url: 'https://project1.com'
  },
  // Add more projects here
]

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <ProfileSection />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

export default Home 