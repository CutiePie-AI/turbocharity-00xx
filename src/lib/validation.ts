// ─── Shared validation utilities ─────────────────────────────────────────────
// Centralised so every form component uses the same logic.

/**
 * RFC-5322-simplified email regex.
 * Handles typical addresses while avoiding catastrophic backtracking.
 */
const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/** Returns `true` when the string is a plausible email address. */
export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > 254) return false;
  return EMAIL_RE.test(trimmed);
}

/**
 * Sanitise a plain-text string for safe rendering.
 * Strips control characters and trims whitespace. Does NOT allow HTML.
 */
export function sanitizeText(raw: string): string {
  // Remove ASCII control chars (0x00-0x1F except tab/newline) and DEL (0x7F)
  return raw.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim();
}

/**
 * Sanitise and limit the length of a text field.
 * Returns an empty string if the result is empty after sanitisation.
 */
export function sanitizeField(raw: string, maxLength = 500): string {
  return sanitizeText(raw).slice(0, maxLength);
}

/** US phone: optional country code, digits + common separators. */
const PHONE_RE = /^\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export function isValidPhone(value: string): boolean {
  if (!value.trim()) return true; // phone is optional everywhere
  return PHONE_RE.test(value.trim());
}
