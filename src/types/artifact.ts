import { StatType, StatModifier } from './stats';

export type ArtifactRarity = 1 | 2 | 3 | 4 | 5;

export type ArtifactSlot =
  | 'flower'
  | 'plume'
  | 'sands'
  | 'goblet'
  | 'circlet';

export interface ArtifactMainStat {
  statType: StatType;
  value: number;
  level: number; // 0 to 20
}

export interface ArtifactSubstat {
  statType: StatType;
  value: number;
  rolls?: number;
}

export interface ArtifactSetBonus {
  piecesRequired: 2 | 4;
  description: string;
  statModifiers?: StatModifier[];
}

/**
 * Artifact Set Definition (e.g. "Emblem of Severed Fate").
 */
export interface ArtifactSet {
  id: string;
  name: string;
  maxRarity: ArtifactRarity;
  bonuses: ArtifactSetBonus[];
  iconUrl?: string;
}

/**
 * Individual equipped Artifact piece contract.
 */
export interface Artifact {
  id: string;
  name: string;
  setId: string;
  slot: ArtifactSlot;
  rarity: ArtifactRarity;
  level: number;
  mainStat: ArtifactMainStat;
  substats: ArtifactSubstat[];
  iconUrl?: string;
}
