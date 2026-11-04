import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CvDownloadMenu } from "./CvDownloadMenu";

describe("CvDownloadMenu", () => {
  it("membuka dua pilihan CV dengan href yang benar", async () => {
    const user = userEvent.setup();
    render(<CvDownloadMenu />);

    await user.click(screen.getByRole("button", { name: "Unduh CV" }));

    const indonesia = screen.getByRole("menuitem", { name: /CV Bahasa Indonesia/ });
    const inggris = screen.getByRole("menuitem", { name: /CV Bahasa Inggris/ });

    expect(indonesia).toHaveAttribute("href", "/resume.pdf");
    expect(indonesia).toHaveAttribute("download");
    expect(inggris).toHaveAttribute("href", "/resume.pdf?lang=en");
    expect(inggris).toHaveAttribute("download");
  });

  it("menutup menu dengan Escape", async () => {
    const user = userEvent.setup();
    render(<CvDownloadMenu />);

    await user.click(screen.getByRole("button", { name: "Unduh CV" }));
    expect(screen.getByRole("menu")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });
});
