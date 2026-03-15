/**
 * Validation utilities for TurboCharity API routes.
 */

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
 * Returns an error message if empty/missing, or null if valid.
 */
export function isRequired(value: string, fieldName: string): string | null {
  if (typeof value !== "string" || value.trim().length === 0) {
    return `${fieldName} is required`;
  }
  return null;
}

/**
 * Validates the signup form data.
 * Required fields: name, email (must be valid format).
 * Optional fields: organizationName, state, userType.
 */
export function validateSignupForm(data: any): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  const nameError = isRequired(data?.name, "Name");
  if (nameError) errors.name = nameError;

  const emailError = isRequired(data?.email, "Email");
  if (emailError) {
    errors.email = emailError;
  } else if (!isValidEmail(data.email)) {
    errors.email = "Email format is invalid";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates the contact form data.
 * Required fields: name, email (must be valid format), subject, message.
 */
export function validateContactForm(data: any): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  const nameError = isRequired(data?.name, "Name");
  if (nameError) errors.name = nameError;

  const emailError = isRequired(data?.email, "Email");
  if (emailError) {
    errors.email = emailError;
  } else if (!isValidEmail(data.email)) {
    errors.email = "Email format is invalid";
  }

  const subjectError = isRequired(data?.subject, "Subject");
  if (subjectError) errors.subject = subjectError;

  const messageError = isRequired(data?.message, "Message");
  if (messageError) errors.message = messageError;

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
