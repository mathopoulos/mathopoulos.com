import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaTwitter } from 'react-icons/fa'

export default function ProfileSection() {
  return (
    <div className="flex gap-8 items-start mb-16">
      <div className="relative w-32 h-32 flex-shrink-0 rounded-full overflow-hidden retro-shadow retro-border">
        <Image
          src="/profile.jpg"
          alt="Profile picture"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2 font-mono">Alexandros Mathopoulos</h1>
          <p className="text-lg text-gray-600 font-serif">
            Building products that make people's lives better.
          </p>
          <p className="text-lg text-gray-600 font-serif">
            Currently focused on building some new health apps and making Trello great again.
          </p>
        </div>

        <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  )
} 