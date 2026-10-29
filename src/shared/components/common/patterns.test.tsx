import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { MediaFrame } from "./MediaFrame";
import { SectionIntro } from "./SectionIntro";
import { SkipLink } from "./SkipLink";
import { StackList } from "./StackList";
import { StatusBadge } from "./StatusBadge";

describe("shared patterns", () => {
  it("SectionIntro merender judul H2, highlight, dan deskripsi tanpa badge", () => {
    render(<SectionIntro title="Proyek" highlight="Unggulan" description="Deskripsi singkat." />);

    expect(screen.getByRole("heading", { level: 2, name: /Proyek Unggulan/ })).toBeInTheDocument();
    expect(screen.getByText("Deskripsi singkat.")).toBeInTheDocument();
    expect(screen.queryByText(/Portofolio Karya/)).not.toBeInTheDocument();
  });

  it("SectionIntro mendukung H1 untuk header halaman sementara", () => {
    render(<SectionIntro as="h1" title="Daftar Karya" />);

    expect(screen.getByRole("heading", { level: 1, name: "Daftar Karya" })).toBeInTheDocument();
  });

  it("StatusBadge memetakan status dan label kustom", () => {
    render(
      <div>
        <StatusBadge status="live" />
        <StatusBadge status="private" label="Repo privat" />
      </div>,
    );

    expect(screen.getByText("Live")).toBeInTheDocument();
    expect(screen.getByText("Repo privat")).toBeInTheDocument();
  });

  it("StackList membatasi chip dan menampilkan +n dengan label aksesibel", () => {
    render(<StackList stack={["Python", "FastAPI", "PostgreSQL", "Next.js", "Laravel"]} />);

    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.queryByText("Laravel")).not.toBeInTheDocument();
    expect(screen.getByText("+1")).toHaveAttribute("aria-label", "1 teknologi lainnya");
  });

  it("Breadcrumbs menandai item terakhir dan menyertakan JSON-LD", () => {
    const { container } = render(
      <Breadcrumbs
        items={[
          { label: "Beranda", href: "/" },
          { label: "Proyek", href: "/projects" },
          { label: "SIRATA" },
        ]}
      />,
    );

    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
    expect(screen.getByText("SIRATA")).toHaveAttribute("aria-current", "page");
    expect(container.querySelector('script[type="application/ld+json"]')).not.toBeNull();
  });

  it("MediaFrame merender fallback tanpa img saat src null", () => {
    const { container } = render(
      <MediaFrame
        src={null}
        alt="Diagram alur validasi berkas FTTH"
        sizes="(min-width: 768px) 50vw, 100vw"
        fallback={<span>Fallback cover</span>}
      />,
    );

    expect(screen.getByText("Fallback cover")).toBeInTheDocument();
    expect(container.querySelector("img")).toBeNull();
  });

  it("JsonLd meng-escape karakter < agar aman di dalam script", () => {
    const { container } = render(<JsonLd data={{ name: "</script><script>alert(1)</script>" }} />);

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script?.innerHTML).not.toContain("</script>");
    expect(script?.innerHTML).toContain("\\u003c");
  });

  it("SkipLink mengarah ke konten utama", () => {
    render(<SkipLink />);

    expect(screen.getByRole("link", { name: "Lewati ke konten utama" })).toHaveAttribute(
      "href",
      "#main-content",
    );
  });
});
