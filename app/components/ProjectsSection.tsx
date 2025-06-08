import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

// Define your project entries here. Replace image URLs with your own screenshots.
const projects = [
  {
    title: 'Next Pokédex (Full Stack App)',
    link: 'https://next-pokedex-neon.vercel.app/',
    description:
      'Pokémon encyclopedia using Next.js, GraphQL, Spring Boot, JWT, and Railway. Developed and integrated a Large Language Model AI Pokémon Search Chat Bot.',
    image: '/images/pokedex.png',
  },
  {
    title: 'Airbnb Clone',
    link: 'https://next-js-airbnb-app-teal.vercel.app/',
    description:
      'A clone of Airbnb’s core UI and booking flow built with Next.js, Tailwind CSS, and TypeScript.',
    image: '/images/airbnb.png',
  },
  {
    title: 'SpaceshipPVP',
    link: 'https://github.com/JordanUrbaezLu/SpaceshipPVP/',
    description:
      'A Spaceship PVP game made to play with the keyboard. Game is developed in Python using image, sound, and animation assets.',
    image: '/images/spaceship.png',
  },
  {
    title: 'AI Smart Light Intersection',
    link: 'https://github.com/JordanUrbaezLu/Smart-Light-Intersection/',
    description:
      'Artificial Intelligence project where a light intersection trains through reinforcement learning. The SMART 4 way intersection determines which lights to turn green and red depending on traffic. Created using C++.',
    image: '/images/smartlight.png',
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-purple-50 to-white"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h3 className="text-4xl font-bold mb-8 text-purple-700">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Smaller container with objectFit="contain" to show full image */}
              <div className="relative h-48 w-full bg-gray-100">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-2xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h4>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mb-4 w-fit"
                >
                  {project.link}
                </a>
                <p className="text-gray-600 flex-1">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
