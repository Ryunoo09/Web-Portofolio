"use client";

import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/shared/components/ui/button";
import type { Project } from "../../types";

interface ProjectGridProps {
  projects: Project[];
  showFilter?: boolean;
}

export function ProjectGrid({ projects, showFilter = true }: ProjectGridProps) {
  const [selectedSkill, setSelectedSkill] = React.useState<string>("Semua");

  const skills = React.useMemo(() => {
    const list = new Set<string>();
    projects.forEach((p) => p.skills.forEach((s) => list.add(s.name)));
    return ["Semua", ...Array.from(list).sort()];
  }, [projects]);

  const filteredProjects = React.useMemo(() => {
    if (selectedSkill === "Semua") return projects;
    return projects.filter((p) => p.skills.some((s) => s.name === selectedSkill));
  }, [projects, selectedSkill]);

  return (
    <div className="space-y-8">
      {showFilter && skills.length > 1 && (
        <div className="flex flex-wrap items-center gap-2">
          {skills.map((skill) => {
            const isSelected = selectedSkill === skill;
            return (
              <Button
                key={skill}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSkill(skill)}
                className={
                  isSelected
                    ? "bg-gold text-primary-foreground hover:bg-gold/90 rounded-full font-medium shadow-xs"
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-gold/40 hover:bg-gold/5 rounded-full"
                }
              >
                {skill}
              </Button>
            );
          })}
        </div>
      )}

      {filteredProjects.length === 0 ? (
        <div className="border-border/60 rounded-xl border border-dashed py-16 text-center">
          <p className="text-muted-foreground text-sm">
            Tidak ada proyek yang menggunakan teknologi ini.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
