import { states, getStateBySlug, getAllStateSlugs } from '@/data/states';
import type { StateInfo } from '@/data/states';

describe('states data', () => {
  it('has 51 entries (50 states + DC)', () => {
    expect(states).toHaveLength(51);
  });

  it('each state has required fields', () => {
    const requiredStringFields: (keyof StateInfo)[] = [
      'slug',
      'name',
      'abbreviation',
      'processingTime',
    ];

    for (const state of states) {
      for (const field of requiredStringFields) {
        expect(state[field]).toBeDefined();
        expect(typeof state[field]).toBe('string');
        expect((state[field] as string).length).toBeGreaterThan(0);
      }

      expect(state.filingFee).toBeDefined();
      expect(typeof state.filingFee).toBe('number');

      expect(state.steps).toBeDefined();
      expect(Array.isArray(state.steps)).toBe(true);
    }
  });

  it('all slugs are unique', () => {
    const slugs = states.map((s) => s.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('all abbreviations are 2 characters', () => {
    for (const state of states) {
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
  });

  it('getStateBySlug returns undefined for invalid slug', () => {
    const result = getStateBySlug('not-a-real-state');
    expect(result).toBeUndefined();
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
    for (const state of states) {
      expect(typeof state.filingFee).toBe('number');
      expect(state.filingFee).toBeGreaterThan(0);
    }
  });

  it('each state has at least 3 steps', () => {
    for (const state of states) {
      expect(state.steps.length).toBeGreaterThanOrEqual(3);
      for (const step of state.steps) {
        expect(typeof step).toBe('string');
        expect(step.length).toBeGreaterThan(0);
      }
    }
  });
});
