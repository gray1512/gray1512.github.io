"use client";
import { useState } from "react";
import { motion, Variants } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "../lib/definitions";

export function SkillsStaggered() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {SKILLS.map((category) => {        
        return (
          <div
            key={category.category}
            className="relative group"
          >
            {/* Category Header */}
            <h3 className="text-foreground font-semibold mb-6">
              {category.category}
            </h3>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0 
                  }}
                  transition={{ 
                    delay: skillIndex * 0.1,
                    duration: 0.4
                  }}
                >
                  <Badge 
                    variant="secondary" 
                    className="w-full justify-center text-sm font-medium py-2 px-4 rounded-full"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}