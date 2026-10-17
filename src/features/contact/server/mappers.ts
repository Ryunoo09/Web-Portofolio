import type { Database } from "@/shared/types/database";
import type { ContactMessage } from "../types";

type ContactMessageRow = Database["public"]["Tables"]["contact_messages"]["Row"];

export function toContactMessage(row: ContactMessageRow): ContactMessage {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    subject: row.subject,
    message: row.message,
    isRead: row.is_read,
    createdAt: row.created_at,
  };
}
