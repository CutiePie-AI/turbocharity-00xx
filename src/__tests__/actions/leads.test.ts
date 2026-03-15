jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => ({
      insert: jest.fn().mockResolvedValue({ error: null }),
    })),
  })),
}));

import { submitWaitlistLead, submitNewsletterLead } from '@/app/actions/leads';

describe('Lead Capture Actions', () => {
  test('submitWaitlistLead returns success', async () => {
    const result = await submitWaitlistLead({ email: 'test@example.com', source: 'test' });
    expect(result.success).toBe(true);
    expect(result.message).toBeTruthy();
  });

  test('submitNewsletterLead returns success', async () => {
    const result = await submitNewsletterLead({ email: 'test@example.com', source: 'test' });
    expect(result.success).toBe(true);
    expect(result.message).toBeTruthy();
  });

  test('submitWaitlistLead handles empty email gracefully', async () => {
    const result = await submitWaitlistLead({ email: '' });
    expect(result).toBeDefined();
  });
});
