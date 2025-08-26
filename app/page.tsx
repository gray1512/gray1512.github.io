"use client";
import SectionCard from "@/app/ui/components/SectionCard";
import IconBadge from "@/app/ui/components/IconBadge";
import { Category, SubItem, SKILLS, CONTACTS, NAME, TITLE, LOCATION } from "./lib/definitions";
import IconButton from "./ui/components/IconButton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Page() {
  const [activeKey, setActiveIndex] = useState<string | null>(null);

  // close when clicking outside
  useEffect(() => {
    const mouseDownHandler = (e: MouseEvent) => {
      setActiveIndex(null);
    };
    document.addEventListener("mousedown", mouseDownHandler);
    return () => document.removeEventListener("mousedown", mouseDownHandler);
  }, []);
  
  return (
    <main className="container-narrow min-h-screen grid place-items-center">
      <motion.section
        layout
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="
          border border-[var(--color-border)]
          bg-[var(--color-card)]
          backdrop-blur-[6px]
          rounded-[var(--radius-xl2)]
          p-8 sm:p-10
          shadow-lg
          w-full max-w-[560px]
          overflow-hidden
        "
      >
        {/* Header */}
        <section className="text-center py-7">
          <h1 className="m-0 mb-1 text-2xl tracking-[0.2px]">
            {NAME}
          </h1>
          <div className="text-muted text-md">
            {TITLE} @ {LOCATION}
          </div>
        </section>

        {/* Skills */}
        <SectionCard title="I do...">
          <motion.div layout className="grid gap-6">
            {SKILLS.map((category: Category, index: number) => (
              <motion.div
                key={index}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="
                  flex flex-col items-center gap-3
                  md:flex-row md:items-center md:gap-4
                "
              >
                <h3
                  className="
                    text-center text-sm md:text-sm
                    uppercase tracking-[0.12em]
                    text-[var(--color-muted)]
                    md:min-w-[120px]
                  "
                >
                  {category.label}
                </h3>
                
                <motion.div
                  className="
                      flex 
                      flex-nowrap 
                      items-center 
                      gap-2.5 
                      overflow-visible 
                      whitespace-nowrap 
                      md:justify-start 
                      md:gap-3
                    "
                  transition={{ type: "spring", stiffness: 260, damping: 24 }} >
                  {category.items.map((skill: SubItem, index: number) => {
                    const key = `${skill.label}_${index}`;
                    return <IconBadge key={key} skill={skill}
                      active={activeKey === key}
                      onToggle={() => setActiveIndex(activeKey === key ? null : key)} />
                  })}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </SectionCard>

        {/* Contact */}
        <SectionCard title="Contact me here:">
          <motion.div
            layout
            className="flex flex-wrap justify-center md:justify-start gap-2.5 md:gap-3"
          >
            {CONTACTS.map((item: SubItem, i: number) => (
              <IconButton key={i} info={item} newTab />
            ))}
          </motion.div>
        </SectionCard>
      </motion.section>
    </main>
  );
}
