import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { makeProject } from "../../fixtures/project";
import { ProjectExplorer } from "./ProjectExplorer";

const replace = vi.fn();
let searchParams = "";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace }),
  usePathname: () => "/projects",
  useSearchParams: () => new URLSearchParams(searchParams),
}));

const projects = [
  makeProject({ id: "ftth", slug: "ftth", title: "FTTH", domain: "computer-vision" }),
  makeProject({ id: "sirata", slug: "sirata", title: "SIRATA", domain: "backend-system" }),
  makeProject({ id: "elang", slug: "elang", title: "Elang HUB", domain: "backend-system" }),
  makeProject({
    id: "air",
    slug: "air",
    title: "Big Data Air",
    domain: "data-big-data",
    projectType: "Tugas Kuliah",
  }),
];

beforeEach(() => {
  replace.mockClear();
  searchParams = "";
});

describe("ProjectExplorer", () => {
  it("menampilkan semua proyek dan jumlahnya tanpa filter", () => {
    render(<ProjectExplorer projects={projects} />);

    expect(screen.getByText("4 proyek")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "SIRATA" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Reset filter" })).not.toBeInTheDocument();
  });

  it("menyinkronkan pilihan domain ke URL", async () => {
    const user = userEvent.setup();
    render(<ProjectExplorer projects={projects} />);

    await user.click(screen.getByRole("button", { name: "Backend & API" }));

    expect(replace).toHaveBeenCalledWith("/projects?domain=backend-system", { scroll: false });
  });

  it("menyinkronkan pilihan tipe ke URL dengan bentuk param", async () => {
    const user = userEvent.setup();
    render(<ProjectExplorer projects={projects} />);

    await user.selectOptions(screen.getByLabelText("Tipe proyek"), "tugas-kuliah");

    expect(replace).toHaveBeenCalledWith("/projects?type=tugas-kuliah", { scroll: false });
  });

  it("menghitung ulang hasil dari URL dan menawarkan reset", () => {
    searchParams = "domain=backend-system";
    render(<ProjectExplorer projects={projects} />);

    expect(screen.getByText("2 proyek")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "FTTH" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reset filter" })).toBeInTheDocument();
  });

  it("mereset ke /projects tanpa query", async () => {
    const user = userEvent.setup();
    searchParams = "domain=backend-system";
    render(<ProjectExplorer projects={projects} />);

    await user.click(screen.getByRole("button", { name: "Reset filter" }));

    expect(replace).toHaveBeenCalledWith("/projects", { scroll: false });
  });

  it("menampilkan empty state ketika filter tidak punya hasil", () => {
    searchParams = "domain=iot";
    render(<ProjectExplorer projects={projects} />);

    expect(screen.getByText("Belum ada proyek dengan filter ini.")).toBeInTheDocument();
    expect(screen.getByText("0 proyek")).toBeInTheDocument();
  });

  it("mengabaikan param domain yang tidak dikenal", () => {
    searchParams = "domain=bukan-domain";
    render(<ProjectExplorer projects={projects} />);

    expect(screen.getByText("4 proyek")).toBeInTheDocument();
  });
});
