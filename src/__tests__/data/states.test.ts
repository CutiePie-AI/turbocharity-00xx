import { states, StateInfo } from '@/data/states'

describe('states data', () => {
  it('has at least 10 entries', () => {
    expect(states.length).toBeGreaterThanOrEqual(10)
  })

  it('each state has required fields', () => {
    const requiredFields: (keyof StateInfo)[] = [
      'slug',
      'name',
      'abbreviation',
      'filingFee',
      'processingTime',
    ]

    for (const state of states) {
      for (const field of requiredFields) {
        expect(state[field]).toBeDefined()
        if (typeof state[field] === 'string') {
          expect((state[field] as string).length).toBeGreaterThan(0)
        }
      }
      expect(typeof state.filingFee).toBe('number')
      expect(state.filingFee).toBeGreaterThan(0)
    }
  })

  it('has no duplicate slugs', () => {
    const slugs = states.map((s) => s.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })
})
