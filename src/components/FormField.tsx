import type { ChangeEvent } from "react";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  rows?: number;
}

const fieldClass = (hasError: boolean) =>
  `w-full rounded-lg border bg-surface px-4 py-3 text-text outline-none transition focus:ring-2 focus:ring-primary/30 ${
    hasError ? "border-error" : "border-border focus:border-primary"
  }`;

export default function FormField({
  id,
  name,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  multiline = false,
  rows = 5,
}: FormFieldProps) {
  const errorId = `${id}-error`;

  // Everything both elements share, written once
  const shared = {
    id,
    name,
    value,
    onChange,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    className: fieldClass(Boolean(error)),
  };

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-text">
        {label}
      </label>

      {multiline ? (
        <textarea rows={rows} {...shared} />
      ) : (
        <input type={type} autoComplete={autoComplete} {...shared} />
      )}

      {error && (
        <p id={errorId} className="mt-1 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
