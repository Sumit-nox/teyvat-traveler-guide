import { ElementType, StatModifier } from './stats';

export type TalentCategory =
  | 'normal'
  | 'skill'
  | 'burst'
  | 'passive'
  | 'sprint'
  | 'utility';

export type DamageType = 'physical' | 'elemental' | 'true' | 'none';

export type PassiveType = 'ascension_1' | 'ascension_4' | 'utility' | 'other';

/**
 * Internal Cooldown (ICD) tracking metadata for elemental application.
 */
export interface ICDMetadata {
  tag?: string; // e.g. "normal_attack", "elemental_skill"
  group?: string; // e.g. "standard", "none", "custom"
  decaySeconds?: number;
}

/**
 * Hit metadata for individual attack hits within a talent.
 */
export interface HitInfo {
  hitName: string; // e.g. "1-Hit DMG", "Press Skill DMG", "Slash DMG"
  damageType: DamageType;
  elementalType?: ElementType;
  scalingStat: 'ATK' | 'HP' | 'DEF' | 'EM';
  hitCount?: number;
  icd?: ICDMetadata;
}

/**
 * Container for talent scaling multipliers across talent levels 1-15.
 */
export interface TalentScaling {
  hitName: string;
  // Multipliers indexed by talent level (e.g. level Multiplier array or map)
  levelMultipliers: Record<number, number>;
}

/**
 * Character Talent (Normal Attack, Elemental Skill, Elemental Burst).
 */
export interface Talent {
  id: string;
  name: string;
  category: TalentCategory;
  description: string;
  iconUrl?: string;
  maxLevel: number; // e.g. 10 base, 13/15 with constellation
  damageType?: DamageType;
  elementalType?: ElementType;
  scaling?: TalentScaling[];
  hitInfo?: HitInfo[];
  energyCost?: number; // For Elemental Burst
  cooldownSeconds?: number;
}

/**
 * Character Ascension Passive or Utility Passive.
 */
export interface PassiveAbility {
  id: string;
  name: string;
  type: PassiveType;
  description: string;
  iconUrl?: string;
  statModifiers?: StatModifier[];
}
