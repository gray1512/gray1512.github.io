"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../lib/definitions";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="shadow-sm">
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-muted-foreground text-md mb-6">
                    {project.description}
                </p>

                <div className="flex gap-3 flex-wrap mb-6 text-sm">

                    {
                        project.tech?.map((t, tIndex) =>
                            <motion.div
                                key={t}
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                }}
                                transition={{
                                    delay: tIndex * 0.1,
                                    duration: 0.4
                                }}
                            >
                                <Badge variant="secondary" className="px-3 py-2 font-medium rounded-full">{t}</Badge>
                            </motion.div>
                        )
                    }
                </div>

                <div className="flex items-center gap-6 text-sm">
                    {
                        project.demo &&
                        <Button variant="ghost" className="px-2 py-1">
                            <a className="flex items-center" href={project.demo} >
                                <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                            </a>
                        </Button>
                    }
                    {
                        project.github &&
                        <Button variant="ghost" className="px-2 py-1">
                            <a className="flex items-center" href={project.github}>
                                <Github className="h-4 w-4 mr-2" /> GitHub
                            </a>
                        </Button>
                    }

                </div>
            </CardContent>
        </Card>
    );
}