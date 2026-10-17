import type { ReactNode } from "react";
import { Label } from "@/shared/components/ui/label";
import { FieldError } from "./FieldError";

export type FormFieldControlProps = {
  id: string;
  "aria-invalid": true | undefined;
  "aria-describedby": string | undefined;
};

interface FormFieldProps {
  label: string;
  /** Dipakai sebagai `id` input sekaligus dasar id pesan bantuan/galat. */
  name: string;
  error?: string;
  hint?: string;
  children: (props: FormFieldControlProps) => ReactNode;
}

/**
 * Label + input + pesan galat dengan `aria-invalid`/`aria-describedby`/`role="alert"`
 * yang sudah benar, sehingga tiap form tidak merangkai aksesibilitasnya sendiri.
 */
export function FormField({ label, name, error, hint, children }: FormFieldProps) {
  const hintId = `${name}-hint`;
  const errorId = `${name}-error`;
  const describedBy =
    [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      {children({
        id: name,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
      })}
      {hint ? (
        <p id={hintId} className="text-muted-foreground text-sm">
          {hint}
        </p>
      ) : null}
      <FieldError id={errorId} message={error} />
    </div>
  );
}
