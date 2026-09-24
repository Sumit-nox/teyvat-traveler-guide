import { Weapon } from '@/types/weapon';

/**
 * DEMO/MOCK WEAPON DATA
 * 
 * IMPORTANT:
 * This data is purely for demonstration and testing of the game-data architecture.
 * These values are fake/demo values and MUST NOT be presented as official Genshin Impact data.
 */
export const MOCK_WEAPON_DEMO: Weapon = {
  id: 'demo-blade-01',
  name: 'Demo Blade',
  weaponType: 'Sword',
  rarity: 5,
  baseAttack: {
    baseValue: 46,
    maxLevelValue: 608,
  },
  secondaryStat: {
    statType: 'CRIT_RATE',
    baseValue: 0.072,
    maxLevelValue: 0.331,
  },
  passive: {
    name: 'Echo of Victory (Demo)',
    description:
      'Increases Crit DMG by 20%/25%/30%/35%/40%. On using an Elemental Burst, ATK is increased by 12%/15%/18%/21%/24% for 12s.',
    statModifiersPerRefinement: {
      1: [
        {
          id: 'demo-wep-r1-cd',
          statType: 'CRIT_DMG',
          value: 0.2,
          modifierType: 'percent',
          source: 'Weapon Passive: Echo of Victory R1 (Demo)',
        },
        {
          id: 'demo-wep-r1-atk',
          statType: 'ATK_PERCENT',
          value: 0.12,
          modifierType: 'percent',
          source: 'Weapon Passive: Echo of Victory R1 (Demo)',
          isConditional: true,
        },
      ],
      2: [
        {
          id: 'demo-wep-r2-cd',
          statType: 'CRIT_DMG',
          value: 0.25,
          modifierType: 'percent',
          source: 'Weapon Passive: Echo of Victory R2 (Demo)',
        },
        {
          id: 'demo-wep-r2-atk',
          statType: 'ATK_PERCENT',
          value: 0.15,
          modifierType: 'percent',
          source: 'Weapon Passive: Echo of Victory R2 (Demo)',
          isConditional: true,
        },
      ],
      3: [
        {
          id: 'demo-wep-r3-cd',
          statType: 'CRIT_DMG',
          value: 0.3,
          modifierType: 'percent',
          source: 'Weapon Passive: Echo of Victory R3 (Demo)',
        },
        {
          id: 'demo-wep-r3-atk',
          statType: 'ATK_PERCENT',
          value: 0.18,
          modifierType: 'percent',
          source: 'Weapon Passive: Echo of Victory R3 (Demo)',
          isConditional: true,
        },
      ],
      4: [
        {
          id: 'demo-wep-r4-cd',
          statType: 'CRIT_DMG',
          value: 0.35,
          modifierType: 'percent',
          source: 'Weapon Passive: Echo of Victory R4 (Demo)',
        },
        {
          id: 'demo-wep-r4-atk',
          statType: 'ATK_PERCENT',
          value: 0.21,
          modifierType: 'percent',
          source: 'Weapon Passive: Echo of Victory R4 (Demo)',
          isConditional: true,
        },
      ],
      5: [
        {
          id: 'demo-wep-r5-cd',
          statType: 'CRIT_DMG',
          value: 0.4,
          modifierType: 'percent',
          source: 'Weapon Passive: Echo of Victory R5 (Demo)',
        },
        {
          id: 'demo-wep-r5-atk',
          statType: 'ATK_PERCENT',
          value: 0.24,
          modifierType: 'percent',
          source: 'Weapon Passive: Echo of Victory R5 (Demo)',
          isConditional: true,
        },
      ],
    },
  },
  refinement: 1,
  source: 'gacha',
  gameVersionInfo: {
    introducedInVersionId: 'v1.0-demo',
  },
};
