import Image from "next/image";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

export function ProjectEntry({ project }: { project: Project }) {
  return (
    <Reveal className={project.className}>
      <a href="#contact" aria-label={`Enquire about ${project.name}`}>
        <div className="project-image">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes={project.number === "01" ? "(max-width: 767px) 100vw, 92vw" : "(max-width: 767px) 100vw, 55vw"}
            className="cover-image"
            style={{ objectPosition: project.position }}
          />
          <span className="project-view" aria-hidden="true">View project ↗</span>
        </div>
        <div className="project-meta">
          <div className="project-heading">
            <span className="project-number">{project.number}</span>
            <h3>{project.name}</h3>
          </div>
          <dl>
            <div><dt>Type</dt><dd>{project.type}</dd></div>
            <div><dt>Location</dt><dd>{project.location}</dd></div>
            <div><dt>Year</dt><dd>{project.year}</dd></div>
          </dl>
        </div>
      </a>
    </Reveal>
  );
}
