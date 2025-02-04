"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Improving system",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    image: "https://unsplash.com/pt-br/fotografias/um-homem-no-topo-de-uma-montanha-ao-lado-de-um-lago-BcWAKeBRbvE",
    link: "#",
  },
  {
    title: "How I made the company have less infra cost",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    image: "https://unsplash.com/pt-br/fotografias/uma-foto-preto-e-branco-de-um-carro-esportivo-Y59a1-HvbDk",
    link: "#",
  },
  {
    title: "Migrating a legacy system to React",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    image: "https://unsplash.com/pt-br/fotografias/um-lago-com-casas-e-uma-igreja-ao-fundo-u2s7GQRJELM",
    link: "#",
  },
  {
    title: "Bring results beyond my role",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    image: "https://unsplash.com/pt-br/fotografias/um-grupo-de-tambores-sentados-um-em-cima-do-outro-knf81S81xOM",
    link: "#",
  },
];

const experiences = [
  {
    company: "Magazord",
    role: "Mid Frontend Engineer",
    period: "2022 - Present",
    description: "Working with React, Next.js, and TypeScript to build modern web applications.",
  },
  {
    company: "IPM Sistemas",
    role: "Sr Frontend Engineer",
    period: "2020 - 2022",
    description: "Led frontend development team and implemented new architecture patterns.",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-muted">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">RENAN SILVA</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-background border-b border-muted">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#projects" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#experience" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4">
        <section id="about" className="min-h-screen pt-32 pb-20">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8">
            FRONTEND
            <br />
            <span className="gradient-text">ENGINNER</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-base md:text-lg text-muted-foreground">
                {`Throughout my career, I'ave been responsible for building and optimizing web interfaces that enhanced my clients and employers. Meeting deadlines and delivering quality work has always been my priority. I'm always eager to learn new technologies and methodologies, ensuring I'm always up-to-date with the latest trends.`}
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <Image
                src="https://unsplash.com/pt-br/fotografias/um-homem-em-uma-camisa-preta-esta-olhando-para-a-camera-mOCdKgeE1iw"
                alt="Renan Silva"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full h-[300px] md:h-[500px]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="./react-logo.png"
                  alt="Tech Stack"
                  width={600}
                  height={600}
                  className="opacity-50"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">BIGGEST GOAL</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
            {projects.map((project) => (
              <div key={project.title} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-[200px] sm:h-[300px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 p-4 md:p-6 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                  <Button variant="outline" className="mt-4 w-fit text-sm md:text-base">
                    Check Live Site →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">EXPERIENCE</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="p-4 md:p-6 rounded-lg bg-muted">
                <h3 className="text-lg md:text-xl font-bold mb-2">{exp.role}</h3>
                <h4 className="text-primary mb-3 md:mb-4">{exp.company}</h4>
                <p className="text-sm md:text-base text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">{`Let's drink a coffee together`}</h2>
          <p className="text-center text-sm md:text-base text-muted-foreground mb-8">
            {`I'd love to know how can I deliver the best experience to your user with my knowledge`}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <Button size="lg" variant="outline" asChild className="w-full md:w-auto">
              <a href="#" className="min-w-0 md:min-w-[200px] text-sm md:text-base">
                Do you want to start a project together?
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full md:w-auto">
              <a href="mailto:your.email@example.com" className="min-w-0 md:min-w-[200px] text-sm md:text-base">
                Or DM me
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-muted py-6 md:py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-sm text-muted-foreground order-2 md:order-1">Made by me</p>
          <div className="flex gap-4 order-1 md:order-2">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}