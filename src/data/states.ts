// ---------------------------------------------------------------------------
// Re-export comprehensive state data from src/lib/states.ts
// Maintains backward compatibility with existing imports from @/data/states.
// ---------------------------------------------------------------------------

import { STATES, type StateInfo as FullStateInfo } from '@/lib/states';

export type StateInfo = FullStateInfo;

/** All 50 US states + DC with filing details. */
export const states: StateInfo[] = STATES;
