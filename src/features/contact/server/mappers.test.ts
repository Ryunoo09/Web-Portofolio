import { describe, expect, it } from "vitest";
import type { Database } from "@/shared/types/database";
import { toContactMessage } from "./mappers";

type ContactMessageRow = Database["public"]["Tables"]["contact_messages"]["Row"];

const row: ContactMessageRow = {
  id: "m1",
  name: "Budi Santoso",
  email: "budi@example.com",
  subject: "Diskusi proyek",
  message: "Halo, saya ingin berdiskusi.",
  is_read: false,
  created_at: "2024-05-01T08:30:00Z",
};

describe("toContactMessage", () => {
  it("memetakan kolom snake_case ke camelCase", () => {
    expect(toContactMessage(row)).toEqual({
      id: "m1",
      name: "Budi Santoso",
      email: "budi@example.com",
      subject: "Diskusi proyek",
      message: "Halo, saya ingin berdiskusi.",
      isRead: false,
      createdAt: "2024-05-01T08:30:00Z",
    });
  });
});
