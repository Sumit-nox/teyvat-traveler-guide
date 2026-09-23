import { Character } from '@/types/character';

/**
 * DEMO/MOCK Character Dataset
 * Clearly labeled placeholder data to prove type contracts.
 * NOT official Genshin Impact statistics.
 */
export const MOCK_CHARACTER_DEMO: Character = {
  id: 'mock-traveler-pyro',
  name: 'Demo Flame Traveler (Mock)',
  title: 'Blazing Hero of Legend',
  rarity: 5,
  element: 'Pyro',
  weaponType: 'Sword',
  baseStats: {
    baseHp: 12000,
    baseAtk: 310,
    baseDef: 750,
    ascensionStatType: 'CRIT_RATE',
    ascensionStatValue: 0.192,
  },
  talents: {
    normalAttack: {
      id: 'mock-na',
      name: 'Flame Blade Combo',
      category: 'normal',
      description: 'Performs up to 5 rapid strikes.',
      maxLevel: 10,
      damageType: 'physical',
      scaling: [
        {
          hitName: '1-Hit DMG',
          levelMultipliers: { 1: 0.45, 10: 0.89 },
        },
      ],
    },
    elementalSkill: {
      id: 'mock-skill',
      name: 'Searing Thrust',
      category: 'skill',
      description: 'Thrusts forward dealing Pyro DMG.',
      maxLevel: 10,
      damageType: 'elemental',
      elementalType: 'Pyro',
      cooldownSeconds: 6,
      scaling: [
        {
          hitName: 'Skill DMG',
          levelMultipliers: { 1: 1.5, 10: 3.1 },
        },
      ],
    },
    elementalBurst: {
      id: 'mock-burst',
      name: 'Infernal Eruption',
      category: 'burst',
      description: 'Summons a pillar of flame dealing AoE Pyro DMG.',
      maxLevel: 10,
      damageType: 'elemental',
      elementalType: 'Pyro',
      energyCost: 60,
      cooldownSeconds: 15,
      scaling: [
        {
          hitName: 'Burst DMG',
          levelMultipliers: { 1: 4.2, 10: 8.5 },
        },
      ],
    },
    passives: [
      {
        id: 'mock-p1',
        name: 'Kindled Will',
        type: 'ascension_1',
        description: 'Increases Pyro DMG Bonus by 12% after using Elemental Skill.',
        statModifiers: [
          {
            id: 'mock-p1-mod',
            statType: 'PYRO_DMG_BONUS',
            value: 0.12,
            modifierType: 'percent',
            source: 'Passive: Kindled Will',
            isConditional: true,
          },
        ],
      },
    ],
  },
  constellations: [
    {
      id: 'mock-c1',
      level: 1,
      name: 'Ignited Ember',
      description: 'Increases Crit Rate by 5% when fighting burning enemies.',
      statModifiers: [
        {
          id: 'mock-c1-mod',
          statType: 'CRIT_RATE',
          value: 0.05,
          modifierType: 'percent',
          source: 'Constellation 1',
        },
      ],
    },
  ],
  gameVersionInfo: {
    introducedInVersionId: 'v5.4',
  },
};

export const MOCK_CHARACTERS_DEMO: Character[] = [MOCK_CHARACTER_DEMO];
