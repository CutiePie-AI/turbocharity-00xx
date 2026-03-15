const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validates that a string is a properly formatted email address.
 */
export function isValidEmail(email: string): boolean {
  if (typeof email !== "string") return false;
  return EMAIL_REGEX.test(email.trim());
}

/**
 * Checks that a value is a non-empty string.
 * Returns an error message if invalid, or null if valid.
 */
export function isRequired(value: string, fieldName: string): string | null {
  if (typeof value !== "string" || value.trim().length === 0) {
    return `${fieldName} is required`;
  }
  return null;
}

/**
 * Validates the signup form payload.
 */
export function validateSignupForm(data: Record<string, unknown>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  const nameError = isRequired(data?.name as string, "Name");
  if (nameError) errors.name = nameError;

  const emailError = isRequired(data?.email as string, "Email");
  if (emailError) {
    errors.email = emailError;
  } else if (!isValidEmail(data.email as string)) {
    errors.email = "Email format is invalid";
  }

  // organizationName, state, and userType are accepted but not strictly required
  // per the spec — only name and email must be present and valid.

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates the contact form payload.
 */
export function validateContactForm(data: Record<string, unknown>): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  const nameError = isRequired(data?.name as string, "Name");
  if (nameError) errors.name = nameError;

  const emailError = isRequired(data?.email as string, "Email");
  if (emailError) {
    errors.email = emailError;
  } else if (!isValidEmail(data.email as string)) {
    errors.email = "Email format is invalid";
  }

  const subjectError = isRequired(data?.subject as string, "Subject");
  if (subjectError) errors.subject = subjectError;

  const messageError = isRequired(data?.message as string, "Message");
  if (messageError) errors.message = messageError;

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
