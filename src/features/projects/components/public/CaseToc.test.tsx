import { act } from "react";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CaseToc } from "./CaseToc";

type ObserverCallback = (entries: { target: { id: string }; isIntersecting: boolean }[]) => void;

let observedCallback: ObserverCallback | null = null;

class MockIntersectionObserver {
  constructor(private callback: ObserverCallback) {
    observedCallback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

const sections = [
  { id: "masalah", label: "Masalah" },
  { id: "solusi", label: "Solusi" },
  { id: "hasil", label: "Hasil" },
];

beforeEach(() => {
  observedCallback = null;
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("CaseToc", () => {
  it("tidak dirender bila section kurang dari tiga", () => {
    const { container } = render(<CaseToc sections={sections.slice(0, 2)} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("merender daftar isi dengan nomor urut dan anchor", () => {
    render(<CaseToc sections={sections} />);

    const nav = screen.getByRole("navigation", { name: "Daftar isi studi kasus" });
    expect(nav).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Solusi/ }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Masalah/ })[0]).toHaveAttribute("href", "#masalah");
  });

  it("menandai section aktif dengan aria-current setelah terlihat", () => {
    render(<CaseToc sections={sections} />);

    act(() => {
      observedCallback?.([{ target: { id: "solusi" }, isIntersecting: true }]);
    });

    expect(screen.getAllByRole("link", { name: /Solusi/ })[0]).toHaveAttribute(
      "aria-current",
      "location",
    );
  });
});
