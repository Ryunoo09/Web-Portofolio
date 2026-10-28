import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorSummary } from "./ErrorSummary";

describe("ErrorSummary", () => {
  it("mengambil fokus, punya role alert, dan menautkan ke field", () => {
    render(
      <ErrorSummary
        errors={[
          { id: "name", message: "Nama minimal 2 karakter." },
          { id: "message", message: "Pesan minimal 5 karakter." },
        ]}
      />,
    );

    const summary = screen.getByRole("alert");
    expect(summary).toHaveFocus();
    expect(screen.getByRole("link", { name: "Nama minimal 2 karakter." })).toHaveAttribute(
      "href",
      "#name",
    );
    expect(screen.getByRole("link", { name: "Pesan minimal 5 karakter." })).toHaveAttribute(
      "href",
      "#message",
    );
  });

  it("tidak merender apa pun tanpa error", () => {
    const { container } = render(<ErrorSummary errors={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
