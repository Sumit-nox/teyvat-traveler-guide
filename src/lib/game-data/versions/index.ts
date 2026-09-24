import { GameVersion } from '@/types/game-version';

/**
 * DEMO/MOCK Game Version Dataset
 * Clearly labeled placeholder data to prove type contracts.
 */
export const MOCK_GAME_VERSIONS_DEMO: GameVersion[] = [
  {
    id: 'v5.4',
    versionNumber: '5.4',
    name: 'Demo Version 5.4',
    releaseDate: '2025-01-01',
    status: 'active',
    description: 'Mock game version for architectural testing',
  },
  {
    id: 'v5.0',
    versionNumber: '5.0',
    name: 'Demo Version 5.0',
    releaseDate: '2024-08-01',
    status: 'archived',
    description: 'Archived mock game version for contract verification',
  },
];
