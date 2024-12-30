import Image from 'next/image'
import { IoClose } from 'react-icons/io5'
import { HiArrowUpRight } from 'react-icons/hi2'

interface Project {
  name: string
  logo: string
  description: string
  url: string
  themeColor: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-w-2xl w-full p-8 relative shadow-2xl transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <IoClose size={24} />
        </button>

        <div className="flex flex-col items-center">
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
        </div>
      </div>
    </div>
  )
} 