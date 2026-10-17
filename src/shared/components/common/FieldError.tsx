import { AlertCircle } from "lucide-react";

interface FieldErrorProps {
  /** Harus sama dengan `aria-describedby` pada input terkait. */
  id?: string;
  message?: string;
}

/** Pesan galat field: ukuran terbaca, ikon, dan diumumkan screen reader. */
export function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="text-destructive flex items-center gap-1 text-sm">
      <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}
