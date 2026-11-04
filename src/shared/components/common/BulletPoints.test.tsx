import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BulletPoints } from "./BulletPoints";

describe("BulletPoints", () => {
  it("merender satu baris sebagai paragraf", () => {
    const { container } = render(<BulletPoints text="Satu kalimat utuh." />);

    expect(screen.getByText("Satu kalimat utuh.").tagName).toBe("P");
    expect(container.querySelector("ul")).toBeNull();
  });

  it("merender baris menjorok sebagai sub-daftar di dalam poin induk", () => {
    const { container } = render(
      <BulletPoints text={"- Acara\n    - Donasi\n    - Pelatihan\n- Panitia"} />,
    );

    const root = container.querySelector("ul");
    expect(root?.children).toHaveLength(2);

    const firstItem = root?.children[0];
    expect(firstItem?.querySelector("ul")?.querySelectorAll("li")).toHaveLength(2);
    expect(screen.getByText("Donasi")).toBeInTheDocument();
    expect(screen.getByText("Pelatihan")).toBeInTheDocument();
    expect(root?.children[1]?.querySelector("ul")).toBeNull();
  });
});
