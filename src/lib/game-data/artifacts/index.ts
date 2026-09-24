import { ArtifactSet, Artifact } from '@/types/artifact';

/**
 * DEMO/MOCK Artifact Set & Piece Dataset
 * Clearly labeled placeholder data to prove type contracts.
 */
export const MOCK_ARTIFACT_SET_DEMO: ArtifactSet = {
  id: 'mock-blaze-vestige',
  name: 'Vestige of the Blazing Heart (Mock)',
  maxRarity: 5,
  bonuses: [
    {
      piecesRequired: 2,
      description: 'Increases Elemental Mastery by 80.',
      statModifiers: [
        {
          id: 'mock-art-2pc',
          statType: 'ELEMENTAL_MASTERY',
          value: 80,
          modifierType: 'flat',
          source: 'Artifact 2-Piece Bonus',
        },
      ],
    },
    {
      piecesRequired: 4,
      description: 'Increases Elemental Skill DMG by 25%.',
      statModifiers: [
        {
          id: 'mock-art-4pc',
          statType: 'ALL_DMG_BONUS',
          value: 0.25,
          modifierType: 'percent',
          source: 'Artifact 4-Piece Bonus',
          isConditional: true,
        },
      ],
    },
  ],
};

export const MOCK_ARTIFACT_PIECE_DEMO: Artifact = {
  id: 'mock-flower-01',
  name: 'Blazing Petal of Hope (Mock)',
  setId: 'mock-blaze-vestige',
  slot: 'flower',
  rarity: 5,
  level: 20,
  mainStat: {
    statType: 'HP',
    value: 4780,
    level: 20,
  },
  substats: [
    { statType: 'CRIT_RATE', value: 0.098, rolls: 3 },
    { statType: 'CRIT_DMG', value: 0.21, rolls: 3 },
    { statType: 'ATK_PERCENT', value: 0.058, rolls: 1 },
    { statType: 'ELEMENTAL_MASTERY', value: 23, rolls: 1 },
  ],
};

export const MOCK_ARTIFACT_SETS_DEMO: ArtifactSet[] = [MOCK_ARTIFACT_SET_DEMO];
export const MOCK_ARTIFACTS_DEMO: Artifact[] = [MOCK_ARTIFACT_PIECE_DEMO];
