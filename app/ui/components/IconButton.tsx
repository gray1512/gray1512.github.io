import { hasPath, SubItem } from "@/app/lib/definitions";
import { PropsWithChildren } from "react";
import Image from "next/image";

export default function IconButton({info, newTab}: { info: SubItem, newTab?: boolean }) {
    return (
        <a
      href={info.href}
      className="
        inline-flex items-center gap-2
        h-[40px] px-4
        rounded-full
        border border-[var(--color-border)]
        bg-white/5
        text-sm tracking-[0.14em] 
        text-[var(--color-text)]
        hover:bg-white/8 hover:border-[var(--color-ring)]
        hover:shadow-[0_0_0_2px_var(--color-ring)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]
        select-none
      "
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {/* Icon (left) */}
      {hasPath(info) ? (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[18px] h-[18px] shrink-0 text-[var(--color-accent)]"
          aria-hidden="true"
        >
          <path d={info.path} />
        </svg>
      ) : (
        <Image
          src={info.local}
          alt="" /* decorative */
          width={18}
          height={18}
          className="w-[18px] h-[18px] shrink-0"
          priority={false}
        />
      )}

      {/* Label (always visible, Carrd-like) */}
      <span>{info.label}</span>
    </a>
    );
}
