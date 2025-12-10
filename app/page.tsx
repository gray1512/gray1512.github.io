"use client";

import { NavBar } from "./ui/NavBar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, ExternalLink, Linkedin } from "lucide-react";

import { SkillsStaggered } from "./ui/SkillsStaggered";
import {
  EMAIL,
  GITHUB,
  INTRO,
  LINKEDIN,
  LOCATION,
  NAME,
  PROJECTS,
  TITLE
} from "./lib/definitions";
import { ProjectCard } from "./ui/ProjectCard";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ----------------------------- HERO ----------------------------- */}
        <section className="mb-30 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {NAME}
          </h1>

          <p className="text-xl text-muted-foreground font-medium mb-6">{TITLE} @ {LOCATION}</p>

          <p className="max-w-2xl mx-auto leading-relaxed">
            {INTRO}
          </p>
        </section>

        {/* ----------------------------- SKILLS ----------------------------- */}
        <section id="skills" className="mb-20 scroll-mt-24">
          <h2 className="text-xl font-semibold mb-6">Skills & Technologies</h2>
          
          <SkillsStaggered />
        </section>

        {/* ----------------------------- PROJECTS ----------------------------- */}
        {
        (PROJECTS.length > 0) &&
          <section id="projects" className="mb-30 scroll-mt-24">
            <h2 className="text-xl font-semibold mb-6">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {
                PROJECTS.map((project, projecIndex) =>
                  <ProjectCard key={projecIndex} project={project} />
                )
              }

            </div>
          </section>
        }


        {/* ----------------------------- CONTACT ----------------------------- */}
        <section id="contact" className="text-center mb-20 scroll-mt-24">
          <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>

          <p className="text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
            I'm always interested in new opportunities and collaborations.<br />Feel free to reach out!
          </p>

          <Button className="h-11 px-5 rounded-full" asChild>
            <a href={`mailto:${EMAIL}`}>Send an Email</a>
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            <Button variant="ghost" className="rounded-full">
              <a href={GITHUB} target="_blank">
                <Github className="h-10 w-10" />
              </a>
            </Button>
            <Button variant="ghost" className="rounded-full">
              <a href={LINKEDIN} target="_blank">
                <Linkedin className="h-10 w-10" />
              </a>
            </Button>
          </div>
        </section>

        {/* ----------------------------- FOOTER ----------------------------- */}
        <footer className="text-center text-xs text-muted-foreground py-2">
          © 2025 {NAME}. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
