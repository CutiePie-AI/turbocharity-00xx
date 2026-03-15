import { STATES } from '@/lib/states';

describe('STATES data', () => {
  it('has at least 15 entries', () => {
    expect(STATES.length).toBeGreaterThanOrEqual(15);
  });

  it('each state has required fields: name, slug, abbreviation, filingFee, processingTime', () => {
    for (const state of STATES) {
      expect(state).toHaveProperty('name');
      expect(state).toHaveProperty('slug');
      expect(state).toHaveProperty('abbreviation');
      expect(state).toHaveProperty('filingFee');
      expect(state).toHaveProperty('processingTime');

      expect(typeof state.name).toBe('string');
      expect(state.name.length).toBeGreaterThan(0);

      expect(typeof state.slug).toBe('string');
      expect(state.slug.length).toBeGreaterThan(0);

      expect(typeof state.abbreviation).toBe('string');
      expect(state.abbreviation.length).toBeGreaterThan(0);

      expect(typeof state.filingFee).toBe('number');

      expect(typeof state.processingTime).toBe('string');
      expect(state.processingTime.length).toBeGreaterThan(0);
    }
  });

  it('slugs are URL-safe (lowercase letters and hyphens only)', () => {
    const urlSafePattern = /^[a-z][a-z0-9-]*$/;
    for (const state of STATES) {
      expect(state.slug).toMatch(urlSafePattern);
    }
  });

  it('abbreviations are exactly 2 uppercase letters', () => {
    const abbrevPattern = /^[A-Z]{2}$/;
    for (const state of STATES) {
      expect(state.abbreviation).toMatch(abbrevPattern);
    }
  });

  it('filingFees are positive numbers', () => {
    for (const state of STATES) {
      expect(state.filingFee).toBeGreaterThan(0);
    }
  });

  it('has no duplicate slugs', () => {
    const slugs = STATES.map((s) => s.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('has no duplicate abbreviations', () => {
    const abbreviations = STATES.map((s) => s.abbreviation);
    const uniqueAbbreviations = new Set(abbreviations);
    expect(uniqueAbbreviations.size).toBe(abbreviations.length);
  });
});
