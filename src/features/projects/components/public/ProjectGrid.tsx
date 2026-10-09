"use client";

import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/shared/components/ui/button";
import type { ProjectItem } from "@/shared/constants/dummyData";

interface ProjectGridProps {
  projects: ProjectItem[];
  showFilter?: boolean;
}

export function ProjectGrid({ projects, showFilter = true }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("Semua");

  const categories = React.useMemo(() => {
    const list = new Set<string>();
    projects.forEach((p) => list.add(p.category));
    return ["Semua", ...Array.from(list)];
  }, [projects]);

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "Semua") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="space-y-8">
      {showFilter && (
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <Button
                key={cat}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={
                  isSelected
                    ? "bg-gold text-primary-foreground hover:bg-gold/90 rounded-full font-medium shadow-xs"
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-gold/40 hover:bg-gold/5 rounded-full"
                }
              >
                {cat}
              </Button>
            );
          })}
        </div>
      )}

      {filteredProjects.length === 0 ? (
        <div className="border-border/60 rounded-xl border border-dashed py-16 text-center">
          <p className="text-muted-foreground text-sm">
            Tidak ada proyek yang cocok dengan kategori ini.
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
