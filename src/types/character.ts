import { ElementType, WeaponType, StatType, StatModifier } from './stats';
import { Talent, PassiveAbility, TalentCategory } from './talent';
import { VersionInfo } from './game-version';

export type CharacterRarity = 4 | 5;

/**
 * Character Constellation level (C1 to C6).
 */
export interface Constellation {
  id: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  name: string;
  description: string;
  iconUrl?: string;
  talentBoost?: {
    category: TalentCategory;
    boostLevels: number;
  };
  statModifiers?: StatModifier[];
}

/**
 * Base growth stats for a character at max ascension / level 90.
 */
export interface CharacterBaseStats {
  baseHp: number;
  baseAtk: number;
  baseDef: number;
  ascensionStatType: StatType;
  ascensionStatValue: number; // e.g. 0.192 for 19.2% Crit Rate
}

/**
 * Grouped talents for a character.
 */
export interface CharacterTalents {
  normalAttack: Talent;
  elementalSkill: Talent;
  elementalBurst: Talent;
  passives: PassiveAbility[];
}

/**
 * Main Character Data Contract.
 */
export interface Character {
  id: string;
  name: string;
  title?: string;
  rarity: CharacterRarity;
  element: ElementType;
  weaponType: WeaponType;
  baseStats: CharacterBaseStats;
  talents: CharacterTalents;
  constellations: Constellation[];
  gameVersionInfo: VersionInfo;
  iconUrl?: string;
  splashArtUrl?: string;
}
