import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaGithub } from 'react-icons/fa'

export default function ProfileSection() {
  return (
    <div className="flex items-center mb-12">
      <div className="relative w-24 h-24 rounded-full overflow-hidden mr-6">
        <Image
          src="/profile.jpg"
          alt="Lex Mathopoulos"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Lex Mathopoulos</h1>
          <div className="flex gap-3">
            <a
              href="https://x.com/lex_build"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://github.com/mathopoulos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        
        <p className="mt-2 text-lg text-gray-600 max-w-2xl">
          Part time Designer, Engineer, & Product Manager.
          Currently focused on building some new health apps and making Trello great again.
        </p>
      </div>
    </div>
  )
} 