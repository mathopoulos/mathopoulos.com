import Image from 'next/image'

interface ProjectCardProps {
  name: string
  logo: string
  onClick: (position: { x: number, y: number }) => void
  label?: {
    text: string
    color: string
  }
}

export default function ProjectCard({ name, logo, onClick, label }: ProjectCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    onClick({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    })
  }

  return (
    <button
      onClick={handleClick}
      className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-left w-full border border-gray-100 relative group"
    >
      {label && (
        <div 
          className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 border"
          style={{ 
            backgroundColor: `${label.color}15`,
            color: label.color,
            borderColor: `${label.color}30`
          }}
        >
          {label.text}
        </div>
      )}
      <div className="relative w-20 h-20 mb-6">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
          style={logo.includes('bicept') ? { transform: 'scale(0.8)' } : undefined}
        />
      </div>
      <h3 className="text-lg font-medium text-gray-900">{name}</h3>
    </button>
  )
} 