import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import { HiArrowUpRight } from 'react-icons/hi2'

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

interface ProjectModalProps {
  project: Project
  position: { x: number, y: number }
  onClose: () => void
}

export default function ProjectModal({ project, position, onClose }: ProjectModalProps) {
  // Calculate transform origin relative to viewport center
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0
  const originX = ((position.x / viewportWidth) * 100).toFixed(2)
  const originY = ((position.y / viewportHeight) * 100).toFixed(2)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-[backdropFadeIn_200ms_ease-out]"
        onClick={onClose}
      />
      <div
        className="bg-white p-8 rounded-2xl max-w-2xl w-full mx-4 relative flex flex-col items-center text-center retro-shadow retro-border animate-[modalFadeIn_250ms_cubic-bezier(0.16,1,0.3,1)]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05" fill-rule="evenodd"%3E%3Cpath d="M5 0h1L0 6V5zM6 5v1H5z"/%3E%3C/g%3E%3C/svg%3E")'
        }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        <div className="flex gap-2 self-start mb-8">
          <div 
            className="text-xs font-medium px-2.5 py-1 rounded-full retro-border"
            style={{ 
              backgroundColor: `${project.themeColor}15`,
              color: project.themeColor
            }}
          >
            {project.role}
          </div>

          {project.label && (
            <div 
              className="text-xs font-medium px-2.5 py-1 rounded-full retro-border"
              style={{ 
                backgroundColor: `${project.label.color}15`,
                color: project.label.color
              }}
            >
              {project.label.text}
            </div>
          )}
        </div>
        
        <div className="relative w-32 h-32 mb-6">
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
        
        <h2 className="text-3xl font-bold mb-4 font-mono">{project.name}</h2>
        
        <p className="text-lg text-gray-600 mb-8 font-serif leading-relaxed">
          {project.description}
        </p>
        
        {project.name === "Stong" ? (
          <button
            disabled
            className="text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all transform opacity-50 cursor-not-allowed font-medium retro-shadow"
            style={{
              backgroundColor: project.themeColor
            }}
          >
            <span>Check it out!</span>
            <HiArrowUpRight className="w-5 h-5" />
          </button>
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 hover:brightness-90 font-medium retro-shadow"
            style={{
              backgroundColor: project.themeColor
            }}
          >
            <span>Check it out!</span>
            <HiArrowUpRight className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  )
} 