import { states, State } from '@/data/states'

describe('states data', () => {
  it('has at least 10 entries', () => {
    expect(states.length).toBeGreaterThanOrEqual(10)
  })

  it('each state has required fields', () => {
    states.forEach((state: State) => {
      expect(state).toHaveProperty('slug')
      expect(state).toHaveProperty('name')
      expect(state).toHaveProperty('abbreviation')
      expect(state).toHaveProperty('filingFee')
      expect(state).toHaveProperty('processingTime')

      expect(typeof state.slug).toBe('string')
      expect(typeof state.name).toBe('string')
      expect(typeof state.abbreviation).toBe('string')
      expect(typeof state.filingFee).toBe('number')
      expect(typeof state.processingTime).toBe('string')

      expect(state.slug.length).toBeGreaterThan(0)
      expect(state.name.length).toBeGreaterThan(0)
      expect(state.abbreviation.length).toBe(2)
      expect(state.filingFee).toBeGreaterThanOrEqual(0)
      expect(state.processingTime.length).toBeGreaterThan(0)
    })
  })

  it('has no duplicate slugs', () => {
    const slugs = states.map((state) => state.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  it('has no duplicate abbreviations', () => {
    const abbreviations = states.map((state) => state.abbreviation)
    const uniqueAbbreviations = new Set(abbreviations)
    expect(uniqueAbbreviations.size).toBe(abbreviations.length)
  })
})
