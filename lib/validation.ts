const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validates that the given string is a well-formed email address.
 */
export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

/**
 * Checks that a value is a non-empty string after trimming.
 * Returns an error message like "Name is required" or null if valid.
 */
export function isRequired(value: string, fieldName: string): string | null {
  if (!value || typeof value !== "string" || value.trim().length === 0) {
    return `${fieldName} is required`;
  }
  return null;
}

/**
 * Validates the signup form payload.
 * Required: name, email (must be valid format).
 * Optional: organizationName, state, userType.
 */
export function validateSignupForm(data: any): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  const nameError = isRequired(data?.name, "Name");
  if (nameError) {
    errors.name = nameError;
  }

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
 * Validates the contact form payload.
 * Required: name, email (must be valid format), subject, message.
 */
export function validateContactForm(data: any): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  const nameError = isRequired(data?.name, "Name");
  if (nameError) {
    errors.name = nameError;
  }

  const emailError = isRequired(data?.email, "Email");
  if (emailError) {
    errors.email = emailError;
  } else if (!isValidEmail(data.email)) {
    errors.email = "Email format is invalid";
  }

  const subjectError = isRequired(data?.subject, "Subject");
  if (subjectError) {
    errors.subject = subjectError;
  }

  const messageError = isRequired(data?.message, "Message");
  if (messageError) {
    errors.message = messageError;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
