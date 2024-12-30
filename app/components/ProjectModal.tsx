import Image from 'next/image'
import { IoClose } from 'react-icons/io5'

interface Project {
  name: string
  logo: string
  description: string
  url: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={24} />
        </button>

        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              fill
              className="object-contain"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
          
          <p className="text-gray-600 text-center mb-6">
            {project.description}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            Check it out!
          </a>
        </div>
      </div>
    </div>
  )
} 