import Image from 'next/image'

interface ProjectCardProps {
  name: string
  logo: string
  onClick: () => void
}

export default function ProjectCard({ name, logo, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-left w-full border border-gray-100"
    >
      <div className="relative w-16 h-16 mb-4">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-900">{name}</h3>
    </button>
  )
} 