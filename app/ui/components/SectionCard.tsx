import { PropsWithChildren } from "react";

export default function SectionCard(props: PropsWithChildren<{ title: string }>) {
  return (
    <section
      className="
        p-6
        text-center
      "
    >
      <h2
        className="
          uppercase
          tracking-[0.12em]
          text-sm
          text-[var(--color-muted)]
          mb-3
        "
      >
        {props.title}
      </h2>
      <div className="flex flex-col items-center gap-3">
        {props.children}
      </div>
    </section>
  );
}
