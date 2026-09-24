import { Character } from '@/types/character';

/**
 * DEMO/MOCK CHARACTER DATA
 * 
 * IMPORTANT:
 * This data is purely for demonstration and testing of the game-data architecture.
 * These values are fake/demo values and MUST NOT be presented as official Genshin Impact data.
 */
export const MOCK_CHARACTER_DEMO: Character = {
  id: 'demo-traveler-anemo',
  name: 'Demo Traveler',
  title: 'Starward Wanderer (Demo)',
  rarity: 5,
  element: 'Anemo',
  weaponType: 'Sword',
  baseStats: {
    baseHp: 10875,
    baseAtk: 212,
    baseDef: 683,
    ascensionStatType: 'ATK_PERCENT',
    ascensionStatValue: 0.24,
  },
  talents: {
    normalAttack: {
      id: 'demo-traveler-na',
      name: 'Foreign Ironwind (Demo)',
      category: 'normal',
      description:
        'Performs up to 5 rapid strikes (Normal Attack), a spinning sword blow (Charged Attack), or a plunging strike from mid-air (Plunging Attack).',
      maxLevel: 10,
      damageType: 'physical',
      hitInfo: [
        {
          hitName: '1-Hit DMG',
          damageType: 'physical',
          scalingStat: 'ATK',
          hitCount: 1,
        },
        {
          hitName: '2-Hit DMG',
          damageType: 'physical',
          scalingStat: 'ATK',
          hitCount: 1,
        },
        {
          hitName: 'Charged Attack DMG',
          damageType: 'physical',
          scalingStat: 'ATK',
          hitCount: 2,
        },
        {
          hitName: 'Plunge DMG',
          damageType: 'physical',
          scalingStat: 'ATK',
          hitCount: 1,
        },
        {
          hitName: 'Low Plunge DMG',
          damageType: 'physical',
          scalingStat: 'ATK',
          hitCount: 1,
        },
        {
          hitName: 'High Plunge DMG',
          damageType: 'physical',
          scalingStat: 'ATK',
          hitCount: 1,
        },
      ],
      scaling: [
        {
          hitName: '1-Hit DMG',
          levelMultipliers: { 1: 0.445, 6: 0.638, 10: 0.881 },
        },
        {
          hitName: '2-Hit DMG',
          levelMultipliers: { 1: 0.434, 6: 0.622, 10: 0.859 },
        },
        {
          hitName: 'Charged Attack DMG',
          levelMultipliers: { 1: 0.559, 6: 0.802, 10: 1.11 },
        },
        {
          hitName: 'Plunge DMG',
          levelMultipliers: { 1: 0.639, 6: 0.918, 10: 1.26 },
        },
        {
          hitName: 'Low Plunge DMG',
          levelMultipliers: { 1: 1.28, 6: 1.83, 10: 2.53 },
        },
        {
          hitName: 'High Plunge DMG',
          levelMultipliers: { 1: 1.6, 6: 2.29, 10: 3.16 },
        },
      ],
    },
    elementalSkill: {
      id: 'demo-traveler-skill',
      name: 'Palm Vortex (Demo)',
      category: 'skill',
      description:
        'Gathers a vortex of wind in the palm, dealing continuous Anemo DMG to enemies ahead.',
      maxLevel: 10,
      damageType: 'elemental',
      elementalType: 'Anemo',
      cooldownSeconds: 6,
      hitInfo: [
        {
          hitName: 'Initial Cutting DMG',
          damageType: 'elemental',
          elementalType: 'Anemo',
          scalingStat: 'ATK',
        },
        {
          hitName: 'Max Burst DMG',
          damageType: 'elemental',
          elementalType: 'Anemo',
          scalingStat: 'ATK',
        },
      ],
      scaling: [
        {
          hitName: 'Initial Cutting DMG',
          levelMultipliers: { 1: 1.12, 6: 1.61, 10: 2.24 },
        },
        {
          hitName: 'Max Burst DMG',
          levelMultipliers: { 1: 1.76, 6: 2.53, 10: 3.52 },
        },
      ],
    },
    elementalBurst: {
      id: 'demo-traveler-burst',
      name: 'Gust Surge (Demo)',
      category: 'burst',
      description:
        'Summons a roaring tornado that pulls enemies and objects into itself while dealing Anemo DMG.',
      maxLevel: 10,
      damageType: 'elemental',
      elementalType: 'Anemo',
      energyCost: 60,
      cooldownSeconds: 15,
      hitInfo: [
        {
          hitName: 'Tornado DMG',
          damageType: 'elemental',
          elementalType: 'Anemo',
          scalingStat: 'ATK',
        },
      ],
      scaling: [
        {
          hitName: 'Tornado DMG',
          levelMultipliers: { 1: 0.808, 6: 1.16, 10: 1.61 },
        },
      ],
    },
    passives: [
      {
        id: 'demo-passive-1',
        name: 'Slashing Wind (Demo)',
        type: 'ascension_1',
        description:
          'The last strike of a Normal Attack combo unleashes a wind blade, dealing 60% Anemo DMG to enemies in its path.',
        statModifiers: [
          {
            id: 'demo-passive-1-mod',
            statType: 'ANEMO_DMG_BONUS',
            value: 0.05,
            modifierType: 'percent',
            source: 'Passive: Slashing Wind (Demo)',
            isConditional: false,
          },
        ],
      },
      {
        id: 'demo-passive-4',
        name: 'Second Wind (Demo)',
        type: 'ascension_4',
        description: 'Palm Vortex kills regenerate 2% HP per second for 5 seconds.',
      },
    ],
  },
  constellations: [
    {
      id: 'demo-c1',
      level: 1,
      name: 'Raging Vortex (Demo)',
      description: 'Palm Vortex pulls in enemies and objects within a 5m radius.',
    },
    {
      id: 'demo-c2',
      level: 2,
      name: 'Uprising Whirlwind (Demo)',
      description: 'Increases Energy Recharge by 16%.',
      statModifiers: [
        {
          id: 'demo-c2-mod',
          statType: 'ENERGY_RECHARGE',
          value: 0.16,
          modifierType: 'percent',
          source: 'Constellation 2 (Demo)',
        },
      ],
    },
    {
      id: 'demo-c3',
      level: 3,
      name: 'Sweeping Gust (Demo)',
      description: 'Increases the Level of Gust Surge by 3.',
      talentBoost: {
        category: 'burst',
        boostLevels: 3,
      },
    },
    {
      id: 'demo-c4',
      level: 4,
      name: 'Cherished Breeze (Demo)',
      description: 'Reduces DMG taken by 10% while casting Palm Vortex.',
    },
    {
      id: 'demo-c5',
      level: 5,
      name: 'Vortex Stellaris (Demo)',
      description: 'Increases the Level of Palm Vortex by 3.',
      talentBoost: {
        category: 'skill',
        boostLevels: 3,
      },
    },
    {
      id: 'demo-c6',
      level: 6,
      name: 'Intertwined Winds (Demo)',
      description:
        'Targets hit by Gust Surge have their Anemo RES decreased by 20%.',
      statModifiers: [
        {
          id: 'demo-c6-mod',
          statType: 'ANEMO_RES_SHRED',
          value: 0.2,
          modifierType: 'percent',
          source: 'Constellation 6 (Demo)',
          isConditional: true,
        },
      ],
    },
  ],
  gameVersionInfo: {
    introducedInVersionId: 'v1.0-demo',
  },
};
