"use client";
import { useState } from "react";
import Image from "next/image";
import { hasPath, SubItem } from "@/app/lib/definitions";
import { AnimatePresence, motion } from "framer-motion";

export default function IconBadge({ skill, active, onToggle }: { 
  skill: SubItem, 
  active: boolean;
  onToggle: () => void; 
}) {
  return (
    <div
      className="
        relative inline-flex items-center px-2 py-2
        transition group overflow-visible gap-0
      "
      onClick={onToggle} // tap/click toggles tooltip; only visible on mobile
    >
      {/* Icon */}
      {hasPath(skill) ? (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[22px] h-[22px] shrink-0 text-[var(--color-accent)]"
          aria-hidden="true"
        >
          <path d={skill.path} />
        </svg>
      ) : (
        <Image
          src={skill.local}
          alt=""
          width={22}
          height={22}
          className="w-[22px] h-[22px] shrink-0"
        />
      )}

      {/* Desktop: inline label on hover */}
      <span
        className="
          hidden md:inline-block whitespace-nowrap text-md
          ml-0 max-w-0 opacity-0 overflow-hidden
          transition-all duration-500 ease-out
          group-hover:ml-2 group-hover:max-w-[200px] group-hover:opacity-95
        "
      >
        {skill.label}
      </span>

      {/* Mobile: tooltip on tap (hidden on md+) */}      
      <AnimatePresence>
        {active && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              md:hidden
              absolute top-full left-1/2 -translate-x-1/2
              px-3 py-1 rounded-lg
              bg-[var(--color-card)] border border-[var(--color-border)]
              text-md text-[var(--color-text)]
              shadow-md whitespace-nowrap z-50
            "
            role="tooltip"
          >
            {skill.label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
