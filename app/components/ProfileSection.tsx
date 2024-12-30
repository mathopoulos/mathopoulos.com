import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaGithub } from 'react-icons/fa'

export default function ProfileSection() {
  return (
    <div className="flex items-center mb-12">
      <div className="relative w-24 h-24 rounded-full overflow-hidden mr-6">
        <Image
          src="/profile.jpg"
          alt="Alexandros Mathopoulos"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Alexandros Mathopoulos</h1>
          <div className="flex gap-3">
            <Link href="https://twitter.com/YourTwitter" target="_blank" className="text-gray-600 hover:text-blue-400">
              <FaTwitter size={24} />
            </Link>
            <Link href="https://github.com/YourGithub" target="_blank" className="text-gray-600 hover:text-gray-900">
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
        
        <p className="mt-2 text-lg text-gray-600 max-w-2xl">
          Software engineer passionate about building innovative solutions. 
          Currently working on exciting projects at the intersection of technology and user experience.
        </p>
      </div>
    </div>
  )
} 