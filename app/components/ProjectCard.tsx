import Image from 'next/image'

interface ProjectCardProps {
  name: string
  logo: string
  onClick: (position: { x: number, y: number }) => void
  label?: {
    text: string
    color: string
  }
  role: string
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
      className="group relative bg-white p-8 rounded-2xl retro-shadow retro-border hover-lift"
    >
      {label && (
        <div
          className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: `${label.color}15`,
            color: label.color,
            border: `1px solid ${label.color}30`
          }}
        >
          {label.text}
        </div>
      )}
      
      <div className="relative w-28 h-28 mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain drop-shadow-lg"
        />
      </div>
      
      <h3 className="text-lg font-medium text-gray-900 mb-1 font-mono">
        {name}
      </h3>
    </button>
  )
} 