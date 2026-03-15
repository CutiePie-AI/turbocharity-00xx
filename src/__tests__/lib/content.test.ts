import {
  FEATURES,
  PRICING_TIERS,
  FAQ_ITEMS,
  TESTIMONIALS,
  TAGLINE,
  DESCRIPTION,
} from '@/lib/content';

describe('content constants', () => {
  describe('TAGLINE', () => {
    it('is a non-empty string', () => {
      expect(typeof TAGLINE).toBe('string');
      expect(TAGLINE.length).toBeGreaterThan(0);
    });
  });

  describe('DESCRIPTION', () => {
    it('is a non-empty string', () => {
      expect(typeof DESCRIPTION).toBe('string');
      expect(DESCRIPTION.length).toBeGreaterThan(0);
    });
  });

  describe('FEATURES', () => {
    it('has exactly 6 items', () => {
      expect(FEATURES).toHaveLength(6);
    });

    it('each feature has title, description, and icon', () => {
      for (const feature of FEATURES) {
        expect(feature).toHaveProperty('title');
        expect(feature).toHaveProperty('description');
        expect(feature).toHaveProperty('icon');

        expect(typeof feature.title).toBe('string');
        expect(feature.title.length).toBeGreaterThan(0);

        expect(typeof feature.description).toBe('string');
        expect(feature.description.length).toBeGreaterThan(0);

        expect(typeof feature.icon).toBe('string');
        expect(feature.icon.length).toBeGreaterThan(0);
      }
    });
  });

  describe('PRICING_TIERS', () => {
    it('has exactly 3 tiers', () => {
      expect(PRICING_TIERS).toHaveLength(3);
    });

    it('each tier has name, price, and features', () => {
      for (const tier of PRICING_TIERS) {
        expect(tier).toHaveProperty('name');
        expect(tier).toHaveProperty('price');
        expect(tier).toHaveProperty('features');

        expect(typeof tier.name).toBe('string');
        expect(tier.name.length).toBeGreaterThan(0);

        expect(typeof tier.price).toBe('string');
        expect(tier.price.length).toBeGreaterThan(0);

        expect(Array.isArray(tier.features)).toBe(true);
        expect(tier.features.length).toBeGreaterThan(0);
      }
    });

    it('each tier features array contains non-empty strings', () => {
      for (const tier of PRICING_TIERS) {
        for (const feature of tier.features) {
          expect(typeof feature).toBe('string');
          expect(feature.length).toBeGreaterThan(0);
        }
      }
    });
  });

  describe('FAQ_ITEMS', () => {
    it('has at least 6 items', () => {
      expect(FAQ_ITEMS.length).toBeGreaterThanOrEqual(6);
    });

    it('each item has question and answer', () => {
      for (const item of FAQ_ITEMS) {
        expect(item).toHaveProperty('question');
        expect(item).toHaveProperty('answer');

        expect(typeof item.question).toBe('string');
        expect(item.question.length).toBeGreaterThan(0);

        expect(typeof item.answer).toBe('string');
        expect(item.answer.length).toBeGreaterThan(0);
      }
    });
  });

  describe('TESTIMONIALS', () => {
    it('has at least 3 items', () => {
      expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(3);
    });

    it('each testimonial has quote, name, and role', () => {
      for (const testimonial of TESTIMONIALS) {
        expect(testimonial).toHaveProperty('quote');
        expect(testimonial).toHaveProperty('name');
        expect(testimonial).toHaveProperty('role');

        expect(typeof testimonial.quote).toBe('string');
        expect(testimonial.quote.length).toBeGreaterThan(0);

        expect(typeof testimonial.name).toBe('string');
        expect(testimonial.name.length).toBeGreaterThan(0);

        expect(typeof testimonial.role).toBe('string');
        expect(testimonial.role.length).toBeGreaterThan(0);
      }
    });
  });
});
