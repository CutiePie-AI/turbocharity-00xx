import { states, STATES, getStateBySlug, getAllStateSlugs } from '@/data/states';
import type { StateInfo } from '@/data/states';

describe('states data', () => {
  it('has at least 15 entries', () => {
    expect(STATES.length).toBeGreaterThanOrEqual(15);
  });

  it('has 51 entries (50 states + DC)', () => {
    expect(STATES).toHaveLength(51);
  });

  it('deprecated states alias matches STATES', () => {
    expect(states).toBe(STATES);
  });

  it('each state has required fields (name, slug, abbreviation, filingFee, etc.)', () => {
    const requiredStringFields: (keyof StateInfo)[] = [
      'slug',
      'name',
      'abbreviation',
      'processingTime',
      'secretaryOfStateUrl',
      'description',
      'metaTitle',
      'metaDescription',
      'annualReportFrequency',
    ];

    for (const state of STATES) {
      for (const field of requiredStringFields) {
        expect(state[field]).toBeDefined();
        expect(typeof state[field]).toBe('string');
        expect((state[field] as string).length).toBeGreaterThan(0);
      }

      expect(state.filingFee).toBeDefined();
      expect(typeof state.filingFee).toBe('number');

      expect(typeof state.requiresPublicationNotice).toBe('boolean');
      expect(typeof state.onlineFilingAvailable).toBe('boolean');
      expect(typeof state.stateTaxExemption).toBe('boolean');
      expect(typeof state.requiresRegisteredAgent).toBe('boolean');

      expect(typeof state.annualReportFee).toBe('number');
      expect(typeof state.minimumBoardMembers).toBe('number');

      expect(state.steps).toBeDefined();
      expect(Array.isArray(state.steps)).toBe(true);

      expect(state.specificRequirements).toBeDefined();
      expect(Array.isArray(state.specificRequirements)).toBe(true);
    }
  });

  it('all slugs are unique', () => {
    const slugs = STATES.map((s) => s.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('all abbreviations are 2 uppercase characters', () => {
    for (const state of STATES) {
      expect(state.abbreviation).toHaveLength(2);
      expect(state.abbreviation).toMatch(/^[A-Z]{2}$/);
    }
  });

  it('getStateBySlug returns correct state for "california"', () => {
    const california = getStateBySlug('california');
    expect(california).toBeDefined();
    expect(california!.name).toBe('California');
    expect(california!.abbreviation).toBe('CA');
    expect(california!.slug).toBe('california');
    expect(california!.filingFee).toBe(30);
  });

  it('getStateBySlug returns undefined for invalid slug', () => {
    const result = getStateBySlug('not-a-real-state');
    expect(result).toBeUndefined();
  });

  it('getStateBySlug returns undefined for empty string', () => {
    expect(getStateBySlug('')).toBeUndefined();
  });

  it('getAllStateSlugs returns 51 strings', () => {
    const slugs = getAllStateSlugs();
    expect(slugs).toHaveLength(51);
    for (const slug of slugs) {
      expect(typeof slug).toBe('string');
      expect(slug.length).toBeGreaterThan(0);
    }
  });

  it('filing fees are positive numbers', () => {
    for (const state of STATES) {
      expect(typeof state.filingFee).toBe('number');
      expect(state.filingFee).toBeGreaterThan(0);
    }
  });

  it('each state has at least 3 steps', () => {
    for (const state of STATES) {
      expect(state.steps.length).toBeGreaterThanOrEqual(3);
      for (const step of state.steps) {
        expect(typeof step).toBe('string');
        expect(step.length).toBeGreaterThan(0);
      }
    }
  });

  it('minimumBoardMembers is at least 1 for every state', () => {
    for (const state of STATES) {
      expect(state.minimumBoardMembers).toBeGreaterThanOrEqual(1);
    }
  });

  it('slugs are URL-safe (lowercase alphanumeric and hyphens)', () => {
    for (const state of STATES) {
      expect(state.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });
});
