import { WeaponType, StatType, StatModifier } from './stats';
import { VersionInfo } from './game-version';

export type WeaponRarity = 1 | 2 | 3 | 4 | 5;
export type RefinementLevel = 1 | 2 | 3 | 4 | 5;
export type WeaponSource =
  | 'gacha'
  | 'craftable'
  | 'battlepass'
  | 'event'
  | 'chest'
  | 'shop'
  | 'signature';

/**
 * Base attack scaling bounds (level 1 to 90).
 */
export interface WeaponStatScaling {
  baseValue: number;
  maxLevelValue: number;
}

/**
 * Secondary stat definition for a weapon (e.g. Crit DMG, ATK%).
 */
export interface WeaponSecondaryStat {
  statType: StatType;
  baseValue: number;
  maxLevelValue: number;
}

/**
 * Weapon passive effect with refinement scaling.
 */
export interface WeaponPassiveEffect {
  name: string;
  description: string;
  statModifiersPerRefinement: Record<RefinementLevel, StatModifier[]>;
}

/**
 * Main Weapon Data Contract.
 */
export interface Weapon {
  id: string;
  name: string;
  weaponType: WeaponType;
  rarity: WeaponRarity;
  baseAttack: WeaponStatScaling;
  secondaryStat?: WeaponSecondaryStat;
  passive?: WeaponPassiveEffect;
  refinement: RefinementLevel;
  source: WeaponSource;
  gameVersionInfo: VersionInfo;
  iconUrl?: string;
}
