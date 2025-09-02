"use client";
import { useState } from "react";
import { motion, Variants } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "../lib/definitions";

export function SkillsStaggered() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {SKILLS.map((category, categoryIndex) => {
        const Icon = category.icon;
        const isHovered = hoveredCategory === category.category;
        
        return (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="relative group"
            onMouseEnter={() => setHoveredCategory(category.category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {/* Category Header */}
            <motion.div 
              className="flex items-center gap-4 mb-4 cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`p-3 rounded-lg bg-muted transition-all duration-300 ${
                  isHovered ? 'bg-primary' : ''
                }`}
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <Icon 
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isHovered ? 'text-primary-foreground' : category.color
                  }`}
                />
              </motion.div>
              
              <motion.h3
                className="text-foreground"
                animate={{ 
                  x: isHovered ? 10 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {category.category}
              </motion.h3>
            </motion.div>

            {/* Skills Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-2"
              animate={{ height: isHovered ? "auto" : "auto" }}
            >
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
                    delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    duration: 0.4
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                >
                  <Badge 
                    variant="secondary" 
                    className="w-full justify-center text-xs font-medium py-2"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-transparent via-muted to-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}