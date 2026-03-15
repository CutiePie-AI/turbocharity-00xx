'use server';

import { createClient } from '@supabase/supabase-js';
import { isValidEmail, sanitizeField } from '@/lib/validation';

// ─── Supabase client (server-only) ──────────────────────────────────────────
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ─── Result type ─────────────────────────────────────────────────────────────
interface ActionResult {
  success: boolean;
  message: string;
}

// ─── Simple server-side rate-limit (in-memory, per process) ──────────────────
const recentSubmissions = new Map<string, number>();
const RATE_LIMIT_MS = 10_000; // 10 s between submissions per email

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const last = recentSubmissions.get(email);
  if (last && now - last < RATE_LIMIT_MS) return true;
  recentSubmissions.set(email, now);
  if (recentSubmissions.size > 5_000) {
    const cutoff = now - RATE_LIMIT_MS * 6;
    for (const [key, ts] of recentSubmissions) {
      if (ts < cutoff) recentSubmissions.delete(key);
    }
  }
  return false;
}

// ─── Helper: insert lead row ─────────────────────────────────────────────────
async function insertLead(
  data: Record<string, unknown>,
): Promise<ActionResult> {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('[leads] Supabase not configured. Lead logged:', JSON.stringify(data));
      return { success: true, message: 'Submission received!' };
    }

    const { error } = await supabase.from('leads').insert({
      ...data,
      created_at: new Date().toISOString(),
    });

    if (error) {
      if (error.code === '23505') {
        return { success: true, message: "You're already registered!" };
      }
      console.error('[leads] Supabase insert error:', error);
      return { success: false, message: 'Something went wrong. Please try again.' };
    }

    return { success: true, message: 'Submission received!' };
  } catch (err) {
    console.error('[leads] Unexpected error:', err);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// Public server actions
// ═══════════════════════════════════════════════════════════════════════════════

/** Waitlist form (homepage) */
export async function submitWaitlistLead(formData: {
  email: string;
  name?: string;
  source?: string;
}): Promise<ActionResult> {
  const email = sanitizeField(formData.email, 254).toLowerCase();
  if (!isValidEmail(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }
  if (isRateLimited(email)) {
    return { success: false, message: 'Please wait a moment before trying again.' };
  }

  return insertLead({
    email,
    name: formData.name ? sanitizeField(formData.name, 200) : null,
    source: formData.source || 'waitlist',
    type: 'waitlist',
  });
}

/** Newsletter signup */
export async function submitNewsletterLead(formData: {
  email: string;
  source?: string;
  categories?: string[];
}): Promise<ActionResult> {
  const email = sanitizeField(formData.email, 254).toLowerCase();
  if (!isValidEmail(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }
  if (isRateLimited(email)) {
    return { success: false, message: 'Please wait a moment before trying again.' };
  }

  return insertLead({
    email,
    source: formData.source || 'newsletter',
    type: 'newsletter',
    metadata: formData.categories ? { categories: formData.categories } : null,
  });
}

/** Lead magnet popup (checklist download) */
export async function submitLeadMagnet(formData: {
  email: string;
  source?: string;
}): Promise<ActionResult> {
  const email = sanitizeField(formData.email, 254).toLowerCase();
  if (!isValidEmail(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }
  if (isRateLimited(email)) {
    return { success: false, message: 'Please wait a moment before trying again.' };
  }

  return insertLead({
    email,
    source: formData.source || 'lead_magnet',
    type: 'lead_magnet',
  });
}

/** Exit-intent banner (checklist CTA) */
export async function submitExitIntent(formData: {
  email: string;
}): Promise<ActionResult> {
  const email = sanitizeField(formData.email, 254).toLowerCase();
  if (!isValidEmail(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }
  if (isRateLimited(email)) {
    return { success: false, message: 'Please wait a moment before trying again.' };
  }

  return insertLead({
    email,
    source: 'exit_intent',
    type: 'lead_magnet',
  });
}

/** Get-started wizard (full nonprofit application) */
export async function submitGetStarted(formData: {
  state: string;
  nonprofitName: string;
  mission: string;
  category: string;
  fullName: string;
  email: string;
  phone?: string;
  role: string;
}): Promise<ActionResult> {
  const email = sanitizeField(formData.email, 254).toLowerCase();
  if (!isValidEmail(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }
  if (isRateLimited(email)) {
    return { success: false, message: 'Please wait a moment before trying again.' };
  }

  return insertLead({
    email,
    name: sanitizeField(formData.fullName, 200),
    source: 'get_started_wizard',
    type: 'get_started',
    metadata: {
      state: sanitizeField(formData.state, 100),
      nonprofitName: sanitizeField(formData.nonprofitName, 300),
      mission: sanitizeField(formData.mission, 2000),
      category: sanitizeField(formData.category, 100),
      phone: formData.phone ? sanitizeField(formData.phone, 30) : null,
      role: sanitizeField(formData.role, 100),
    },
  });
}
