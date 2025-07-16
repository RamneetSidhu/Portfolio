"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBirthdayCake,
  FaDownload,
  FaGamepad,
  FaCameraRetro,
  FaPlane,
  FaBook,
  FaMusic,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiAngular,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiStoryblok,
  SiHtml5,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiFigma,
  SiRedux,
} from "react-icons/si";

export default function HomePage() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid gap-8 p-4 md:p-8">
        <section className="md:col-span-2 space-y-8">

          {/* About Me */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-2">About Me</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              I'm a passionate frontend developer with over 2 years of experience
              crafting sleek, high-performance user interfaces. I thrive in building 
              scalable, responsive web applications using modern frameworks. 
              I enjoy collaborating with designers and backend developers to create 
              seamless digital experiences. My design sense and attention to detail help 
              me deliver pixel-perfect UI with maintainable, performant code.
            </p>
            <ul className="mt-4 text-sm text-gray-600 space-y-1">
              <li><FaEnvelope className="inline mr-2 text-blue-400" /> email@example.com</li>
              <li><FaPhoneAlt className="inline mr-2 text-green-400" /> +91 9876543210</li>
              <li><FaMapMarkerAlt className="inline mr-2 text-red-400" /> Mohali, Punjab, India</li>
              <li><FaBirthdayCake className="inline mr-2 text-pink-400" /> Born: March 12, 2000</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li>
                <strong>Frontend Developer</strong> – Hadsup Pvt Ltd, Mohali (2023 – Present)
                <br />
                - Created responsive dashboards and landing pages<br />
                - Integrated REST APIs and CMS systems (Storyblok)<br />
                - Worked on design systems using Tailwind, ShadCN, and custom components
              </li>
              <li>
                <strong>Freelance Developer</strong> – Remote (2021 – 2023)
                <br />
                - Developed portfolio websites, blogs, and admin panels<br />
                - Built static and dynamic websites using Bootstrap, HTML, and JavaScript<br />
                - Delivered SEO-optimized and mobile-first UIs for clients across industries
              </li>
              <li>
                <strong>Intern</strong> – CodeCraft Bootcamp (2020 – 2021)
                <br />
                - Learned core HTML/CSS, JavaScript, and Git version control<br />
                - Built mini-projects including to-do apps, weather apps, and simple SPAs
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
                { name: "React", icon: <SiReact className="text-sky-600" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
                { name: "Angular", icon: <SiAngular className="text-red-600" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
                { name: "Storyblok", icon: <SiStoryblok className="text-indigo-500" /> },
                { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
                { name: "Git", icon: <SiGit className="text-orange-600" /> },
                { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
                >
                  <div className="text-2xl">{tech.icon}</div>
                  <span className="font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">Hobbies & Interests</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <FaGamepad className="text-pink-500" /> Gaming
              </div>
              <div className="flex items-center gap-2">
                <FaCameraRetro className="text-pink-500" /> Photography
              </div>
              <div className="flex items-center gap-2">
                <FaPlane className="text-pink-500" /> Traveling
              </div>
              <div className="flex items-center gap-2">
                <FaBook className="text-pink-500" /> Reading
              </div>
              <div className="flex items-center gap-2">
                <FaMusic className="text-pink-500" /> Listening to Music
              </div>
              <div className="flex items-center gap-2">
                <FaLaptopCode className="text-pink-500" /> Learning New Tech
              </div>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
