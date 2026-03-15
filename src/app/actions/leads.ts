'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitWaitlistLead(formData: { email: string; name?: string; source?: string }) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase not configured, logging lead:', formData.email);
      return { success: true, message: 'Joined waitlist successfully!' };
    }

    const { error } = await supabase.from('leads').insert({
      email: formData.email.toLowerCase().trim(),
      name: formData.name || null,
      source: formData.source || 'waitlist',
      type: 'waitlist',
      created_at: new Date().toISOString(),
    });

    if (error) {
      if (error.code === '23505') {
        return { success: true, message: "You're already on the waitlist!" };
      }
      console.error('Supabase insert error:', error);
      return { success: false, message: 'Something went wrong. Please try again.' };
    }

    return { success: true, message: 'Joined waitlist successfully!' };
  } catch (err) {
    console.error('Lead submission error:', err);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}

export async function submitNewsletterLead(formData: { email: string; source?: string }) {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase not configured, logging lead:', formData.email);
      return { success: true, message: 'Subscribed successfully!' };
    }

    const { error } = await supabase.from('leads').insert({
      email: formData.email.toLowerCase().trim(),
      source: formData.source || 'newsletter',
      type: 'newsletter',
      created_at: new Date().toISOString(),
    });

    if (error) {
      if (error.code === '23505') {
        return { success: true, message: "You're already subscribed!" };
      }
      console.error('Supabase insert error:', error);
      return { success: false, message: 'Something went wrong. Please try again.' };
    }

    return { success: true, message: 'Subscribed successfully!' };
  } catch (err) {
    console.error('Newsletter submission error:', err);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}
