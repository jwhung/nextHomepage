'use client';

import { FiGithub, FiMail } from 'react-icons/fi'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6">
      <a href="https://github.com/yourusername" className="text-zinc-400 hover:text-white transition" title="GitHub">
        <FiGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/yourusername" className="text-zinc-400 hover:text-white transition" title="LinkedIn">
        <FaLinkedin size={24} />
      </a>
      <a href="https://twitter.com/yourusername" className="text-zinc-400 hover:text-white transition" title="Twitter">
        <FaTwitter size={24} />
      </a>
      <a href="mailto:your@email.com" className="text-zinc-400 hover:text-white transition" title="Email">
        <FiMail size={24} />
      </a>
    </div>
  )
}