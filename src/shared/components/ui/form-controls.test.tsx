import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Badge } from "./badge";
import { Card } from "./card";
import { Checkbox } from "./checkbox";
import { Input } from "./input";
import { Select, SelectTrigger, SelectValue } from "./select";
import { Switch } from "./switch";
import { Textarea } from "./textarea";

describe("form controls", () => {
  it("meneruskan state invalid dan disabled ke input", () => {
    render(<Input aria-label="Email" aria-invalid="true" disabled />);

    const input = screen.getByRole("textbox", { name: "Email" });
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toBeDisabled();
  });

  it("merender textarea dengan ukuran minimum", () => {
    render(<Textarea aria-label="Pesan" />);

    expect(screen.getByRole("textbox", { name: "Pesan" })).toHaveClass("min-h-[132px]");
  });

  it("merender trigger select sebagai combobox", () => {
    render(
      <Select>
        <SelectTrigger aria-label="Kategori">
          <SelectValue placeholder="Pilih kategori" />
        </SelectTrigger>
      </Select>,
    );

    expect(screen.getByRole("combobox", { name: "Kategori" })).toBeInTheDocument();
  });

  it("mengubah state checkbox dan switch saat diklik", async () => {
    const user = userEvent.setup();

    render(
      <div>
        <Checkbox aria-label="Setuju" />
        <Switch aria-label="Terbit" />
      </div>,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Setuju" });
    const toggle = screen.getByRole("switch", { name: "Terbit" });

    await user.click(checkbox);
    await user.click(toggle);

    expect(checkbox).toBeChecked();
    expect(toggle).toBeChecked();
  });

  it("mempertahankan badge dan card sebagai primitive bertoken", () => {
    render(
      <Card>
        <Badge variant="secondary">Backend</Badge>
      </Card>,
    );

    expect(screen.getByText("Backend")).toHaveAttribute("data-slot", "badge");
    expect(screen.getByText("Backend")).toHaveAttribute("data-variant", "secondary");
  });
});
