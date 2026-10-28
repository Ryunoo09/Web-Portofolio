import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProfilePortrait } from "./ProfilePortrait";

// jsdom tidak mendukung preload image Next; cukup render <img> biasa.
vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: { alt?: string; src?: string }) => <img alt={props.alt} src={props.src} />,
}));

describe("ProfilePortrait", () => {
  it("menampilkan monogram dan identitas saat foto belum ada", () => {
    render(
      <ProfilePortrait
        avatarUrl={null}
        name="Rakha Yuda Wicaksono"
        role="Backend & Data Engineer"
      />,
    );

    expect(screen.getByText("RYW")).toBeInTheDocument();
    expect(screen.getByText("Rakha Yuda Wicaksono")).toBeInTheDocument();
    expect(screen.getByText("Backend & Data Engineer")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("merender avatar dengan teks alternatif nama", () => {
    render(
      <ProfilePortrait
        avatarUrl="https://example.supabase.co/storage/v1/object/public/portfolio-media/profile/avatar.png"
        name="Rakha Yuda Wicaksono"
        role="Backend & Data Engineer"
      />,
    );

    expect(screen.getByRole("img", { name: "Foto Rakha Yuda Wicaksono" })).toBeInTheDocument();
    expect(screen.queryByText("RYW")).not.toBeInTheDocument();
  });
});
