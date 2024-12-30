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
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 
      animate-[fade-in_300ms_ease-out]"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-xl
        animate-[expand_500ms_cubic-bezier(0.16,1,0.3,1)]"
        onClick={e => e.stopPropagation()}
        style={{
          transformOrigin: `${originX}% ${originY}%`
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <IoClose size={24} />
        </button>

        <div className="flex flex-col items-center">
          <div className="flex gap-2 self-start mb-8">
            <div 
              className="text-xs font-medium px-2.5 py-1 rounded-full border"
              style={{ 
                backgroundColor: `${project.themeColor}15`,
                color: project.themeColor,
                borderColor: `${project.themeColor}30`
              }}
            >
              {project.role}
            </div>

            {project.label && (
              <div 
                className="text-xs font-medium px-2.5 py-1 rounded-full border"
                style={{ 
                  backgroundColor: `${project.label.color}15`,
                  color: project.label.color,
                  borderColor: `${project.label.color}30`
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
              className="object-contain drop-shadow-md"
            />
          </div>
          
          <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
          
          <p className="text-gray-600 text-center mb-8 text-lg leading-relaxed">
            {project.description}
          </p>

          {project.name === "Stong" ? (
            <button
              disabled
              className="text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all transform opacity-50 cursor-not-allowed font-medium"
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
              className="text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 hover:brightness-90 font-medium group"
              style={{
                backgroundColor: project.themeColor
              }}
            >
              <span>Check it out!</span>
              <HiArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
} 