import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { contactEmail, socialLinks } from '@/data'
const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Building an AI deployment that has to <span className="text-purple">work in production</span>?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;m open to Forward Deployed Engineer and Software Engineer roles.
          Let&apos;s talk.
        </p>
        <a href={`mailto:${contactEmail}`}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Pranit Deshpande
        </p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple hover:underline"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer