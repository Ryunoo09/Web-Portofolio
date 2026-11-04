import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Experience } from "../../types";
import { AboutProof } from "./AboutProof";
import { CredentialRow } from "./CredentialRow";
import { ExperienceTimeline } from "./ExperienceTimeline";

const experience: Experience = {
  id: "e1",
  company: "PT Contoh",
  role: "Backend Developer Intern",
  description: "Membangun API.\nMenulis tes.",
  location: "Semarang",
  startedAt: "2025-08-04",
  endedAt: "2025-12-31",
  images: [],
};

describe("AboutProof", () => {
  it("merender bio sebagai paragraf dan fakta sebagai dl", () => {
    render(
      <AboutProof
        bio={"Paragraf satu.\n\nParagraf dua."}
        facts={[{ value: "9", label: "studi kasus" }]}
        avatarUrl={null}
        name="Rakha Yuda Wicaksono"
        role="Backend & Data Engineer"
      />,
    );

    expect(screen.getByText("Paragraf satu.")).toBeInTheDocument();
    expect(screen.getByText("Paragraf dua.")).toBeInTheDocument();
    expect(screen.getByText("studi kasus")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("RYW")).toBeInTheDocument();
  });

  it("memisahkan paragraf CRLF dari database", () => {
    render(
      <AboutProof
        bio={"Paragraf satu.\r\n\r\nParagraf dua."}
        facts={[]}
        avatarUrl={null}
        name="Rakha Yuda Wicaksono"
        role="Backend & Data Engineer"
      />,
    );

    expect(screen.getByText("Paragraf satu.")).toBeInTheDocument();
    expect(screen.getByText("Paragraf dua.")).toBeInTheDocument();
  });

  it("tidak mengarang bio saat kosong", () => {
    render(
      <AboutProof
        bio={null}
        facts={[]}
        avatarUrl={null}
        name="Rakha Yuda Wicaksono"
        role="Backend & Data Engineer"
      />,
    );
    expect(screen.getByText("Bio belum diisi.")).toBeInTheDocument();
  });
});

describe("CredentialRow", () => {
  it("merender deskripsi sertifikat", () => {
    render(
      <ul>
        <CredentialRow
          title="AWS Certified Developer"
          subtitle="Amazon Web Services"
          description="Bukti kompetensi pengembangan aplikasi cloud."
        />
      </ul>,
    );

    expect(screen.getByText("Bukti kompetensi pengembangan aplikasi cloud.")).toBeInTheDocument();
  });

  it("memecah deskripsi organisasi menjadi poin per baris", () => {
    const { container } = render(
      <ul>
        <CredentialRow
          title="Himpunan Mahasiswa"
          subtitle="Ketua"
          description={"- Memimpin program kerja\n- Mengelola 30 anggota"}
          descriptionAsList
        />
      </ul>,
    );

    const list = container.querySelector("ul ul");
    expect(list).not.toBeNull();
    expect(list?.querySelectorAll("li")).toHaveLength(2);
    expect(screen.getByText("Memimpin program kerja")).toBeInTheDocument();
    expect(screen.getByText("Mengelola 30 anggota")).toBeInTheDocument();
  });

  it("tidak merender paragraf deskripsi saat kosong", () => {
    const { container } = render(
      <ul>
        <CredentialRow title="AWS Certified Developer" subtitle="Amazon Web Services" />
      </ul>,
    );

    expect(container.querySelectorAll("li p")).toHaveLength(1);
  });

  it("merender galeri foto dengan teks alternatif", () => {
    render(
      <ul>
        <CredentialRow
          title="S1 Teknik Informatika"
          subtitle="Politeknik Negeri Semarang"
          images={[
            { id: "i1", url: "https://cdn.test/1.png", alt: "Gedung kampus" },
            { id: "i2", url: "https://cdn.test/2.png", alt: "Wisuda" },
          ]}
        />
      </ul>,
    );

    expect(screen.getByAltText("Gedung kampus")).toBeInTheDocument();
    expect(screen.getByAltText("Wisuda")).toBeInTheDocument();
  });

  it("tidak merender galeri bila tidak ada foto", () => {
    const { container } = render(
      <ul>
        <CredentialRow title="S1 Teknik Informatika" subtitle="Politeknik Negeri Semarang" />
      </ul>,
    );

    expect(container.querySelector('[data-slot="credential-gallery"]')).toBeNull();
  });
});

describe("ExperienceTimeline", () => {
  it("memakai ol kronologis dengan periode dan bullet", () => {
    const { container } = render(<ExperienceTimeline experiences={[experience]} />);

    expect(container.querySelector("ol")).not.toBeNull();
    expect(
      screen.getByRole("heading", { level: 3, name: "Backend Developer Intern" }),
    ).toBeInTheDocument();
    expect(screen.getByText("PT Contoh")).toBeInTheDocument();
    expect(screen.getByText("Membangun API.")).toBeInTheDocument();
    expect(screen.getByText("Agu 2025 — Des 2025")).toBeInTheDocument();
  });

  it("merender dokumentasi dengan alt dari database", () => {
    render(
      <ExperienceTimeline
        experiences={[
          {
            ...experience,
            images: [
              { id: "i1", url: "https://demo.supabase.co/a.png", alt: "Rapat tim", sortOrder: 0 },
            ],
          },
        ]}
      />,
    );

    expect(screen.getByAltText("Rapat tim")).toBeInTheDocument();
    expect(document.querySelector('[data-slot="experience-gallery"]')).not.toBeNull();
  });

  it("tidak merender grid dokumentasi bila tidak ada gambar", () => {
    const { container } = render(
      <ExperienceTimeline experiences={[{ ...experience, images: [] }]} />,
    );

    expect(container.querySelector('[data-slot="experience-gallery"]')).toBeNull();
  });
});
