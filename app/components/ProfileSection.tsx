import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaHeartbeat } from 'react-icons/fa'

export default function ProfileSection() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start mb-16 px-4 sm:px-0">
      <div className="relative w-24 sm:w-32 h-24 sm:h-32 flex-shrink-0 rounded-full overflow-hidden retro-shadow retro-border">
        <Image
          src="/profile.jpg"
          alt="Profile picture"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex flex-col gap-4 text-center sm:text-left">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 font-mono">Lex Mathopoulos</h1>
          <p className="text-base sm:text-lg text-gray-600 font-serif">
            Part time Designer, Engineer, & Product Manager.
          </p>
          <p className="text-base sm:text-lg text-gray-600 font-serif">
            Currently focused on building some new health apps and making Trello great again.
          </p>
        </div>

        <div className="flex gap-4 justify-center sm:justify-start">
          <a
            href="https://github.com/mathopoulos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors hover-lift"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/lex_build"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors hover-lift"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.revly.health/dashboard/userId=100492380040453908509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors hover-lift"
          >
            <FaHeartbeat size={24} />
          </a>
        </div>
      </div>
    </div>
  )
} 