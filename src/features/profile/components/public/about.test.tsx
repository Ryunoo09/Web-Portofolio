import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Experience } from "../../types";
import { AboutProof } from "./AboutProof";
import { CredentialRow } from "./CredentialRow";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { Principles } from "./Principles";

const experience: Experience = {
  id: "e1",
  company: "PT Contoh",
  role: "Backend Developer Intern",
  description: "Membangun API.\nMenulis tes.",
  location: "Semarang",
  startedAt: "2025-08-04",
  endedAt: "2025-12-31",
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

describe("Principles", () => {
  it("menampilkan tiga prinsip sebagai baris berurutan", () => {
    render(<Principles />);

    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings.map((heading) => heading.textContent)).toEqual([
      "Masalah dulu",
      "Ukur hasil",
      "Rawat setelah kirim",
    ]);
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

  it("tidak merender paragraf deskripsi saat kosong", () => {
    const { container } = render(
      <ul>
        <CredentialRow title="AWS Certified Developer" subtitle="Amazon Web Services" />
      </ul>,
    );

    expect(container.querySelectorAll("li p")).toHaveLength(1);
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
});
