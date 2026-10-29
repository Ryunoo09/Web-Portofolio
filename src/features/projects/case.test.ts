import { describe, expect, it } from "vitest";
import { pickNextProject, resolveProjectStatus } from "./case";
import { makeProject } from "./fixtures/project";

describe("pickNextProject", () => {
  const projects = [
    makeProject({ id: "a", slug: "a", sortOrder: 1 }),
    makeProject({ id: "b", slug: "b", sortOrder: 2 }),
    makeProject({ id: "c", slug: "c", sortOrder: 3 }),
  ];

  it("mengambil proyek berikutnya sesuai urutan", () => {
    expect(pickNextProject(projects, projects[1]!)?.slug).toBe("c");
  });

  it("berputar ke awal di ujung daftar", () => {
    expect(pickNextProject(projects, projects[2]!)?.slug).toBe("a");
  });

  it("mengembalikan null bila daftar kosong", () => {
    expect(pickNextProject([], null)).toBeNull();
  });
});

describe("resolveProjectStatus", () => {
  it("menandai proyek berjalan sebagai in-progress", () => {
    expect(resolveProjectStatus(makeProject({ endedAt: null }))).toBe("in-progress");
  });

  it("menandai proyek deployed sebagai live", () => {
    expect(resolveProjectStatus(makeProject({ isDeployed: true }))).toBe("live");
  });

  it("menandai proyek selesai tanpa repo sebagai private", () => {
    expect(resolveProjectStatus(makeProject())).toBe("private");
  });

  it("menandai proyek selesai berrepo sebagai archived", () => {
    expect(resolveProjectStatus(makeProject({ repoUrl: "https://example.com/repo" }))).toBe(
      "archived",
    );
  });
});
