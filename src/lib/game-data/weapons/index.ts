import { Weapon } from '@/types/weapon';

/**
 * DEMO/MOCK Weapon Dataset
 * Clearly labeled placeholder data to prove type contracts.
 */
export const MOCK_WEAPON_DEMO: Weapon = {
  id: 'mock-blazing-sword',
  name: 'Blazing Broadsword (Mock)',
  weaponType: 'Sword',
  rarity: 5,
  baseAttack: {
    baseValue: 46,
    maxLevelValue: 608,
  },
  secondaryStat: {
    statType: 'CRIT_DMG',
    baseValue: 0.144,
    maxLevelValue: 0.662,
  },
  passive: {
    name: 'Infernal Wrath',
    description: 'Increases ATK by 20%/25%/30%/35%/40%.',
    statModifiersPerRefinement: {
      1: [
        {
          id: 'mock-wep-r1',
          statType: 'ATK_PERCENT',
          value: 0.2,
          modifierType: 'percent',
          source: 'Weapon Passive: Infernal Wrath R1',
        },
      ],
      2: [
        {
          id: 'mock-wep-r2',
          statType: 'ATK_PERCENT',
          value: 0.25,
          modifierType: 'percent',
          source: 'Weapon Passive: Infernal Wrath R2',
        },
      ],
      3: [
        {
          id: 'mock-wep-r3',
          statType: 'ATK_PERCENT',
          value: 0.3,
          modifierType: 'percent',
          source: 'Weapon Passive: Infernal Wrath R3',
        },
      ],
      4: [
        {
          id: 'mock-wep-r4',
          statType: 'ATK_PERCENT',
          value: 0.35,
          modifierType: 'percent',
          source: 'Weapon Passive: Infernal Wrath R4',
        },
      ],
      5: [
        {
          id: 'mock-wep-r5',
          statType: 'ATK_PERCENT',
          value: 0.4,
          modifierType: 'percent',
          source: 'Weapon Passive: Infernal Wrath R5',
        },
      ],
    },
  },
  refinement: 1,
  source: 'signature',
  gameVersionInfo: {
    introducedInVersionId: 'v5.4',
  },
};

export const MOCK_WEAPONS_DEMO: Weapon[] = [MOCK_WEAPON_DEMO];
