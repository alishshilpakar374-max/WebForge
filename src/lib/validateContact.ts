import type { ContactFormValues } from "../types";

export type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

/** Pure function: values in, errors out. Easy to test, no React needed. */
export function validateContact(values: ContactFormValues): ContactErrors {
  const errors: ContactErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }
  return errors;
}
