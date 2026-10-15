"use client";

import * as React from "react";
import { SkillCard } from "./SkillCard";
import { Button } from "@/shared/components/ui/button";
import type { Skill } from "../../types";

interface SkillsGridProps {
  skills: Skill[];
  showFilter?: boolean;
}

export function SkillsGrid({ skills, showFilter = true }: SkillsGridProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("Semua");

  const categories = React.useMemo(() => {
    const list = new Set<string>();
    skills.forEach((s) => list.add(s.category));
    return ["Semua", ...Array.from(list)];
  }, [skills]);

  const filteredSkills = React.useMemo(() => {
    if (selectedCategory === "Semua") return skills;
    return skills.filter((s) => s.category === selectedCategory);
  }, [skills, selectedCategory]);

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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
