/**
 * Core elemental types in Genshin Impact.
 */
export type ElementType =
  | 'Pyro'
  | 'Hydro'
  | 'Anemo'
  | 'Electro'
  | 'Dendro'
  | 'Cryo'
  | 'Geo'
  | 'Physical';

/**
 * Weapon categories.
 */
export type WeaponType =
  | 'Sword'
  | 'Claymore'
  | 'Polearm'
  | 'Bow'
  | 'Catalyst';

/**
 * Character & equipment stat identifiers.
 */
export type StatType =
  // Base & Primary Stats
  | 'HP'
  | 'ATK'
  | 'DEF'
  | 'HP_PERCENT'
  | 'ATK_PERCENT'
  | 'DEF_PERCENT'
  // Advanced Combat Stats
  | 'ELEMENTAL_MASTERY'
  | 'CRIT_RATE'
  | 'CRIT_DMG'
  | 'ENERGY_RECHARGE'
  // Elemental & Physical DMG Bonuses
  | 'PYRO_DMG_BONUS'
  | 'HYDRO_DMG_BONUS'
  | 'ANEMO_DMG_BONUS'
  | 'ELECTRO_DMG_BONUS'
  | 'DENDRO_DMG_BONUS'
  | 'CRYO_DMG_BONUS'
  | 'GEO_DMG_BONUS'
  | 'PHYSICAL_DMG_BONUS'
  | 'ELEMENTAL_DMG_BONUS'
  | 'ALL_DMG_BONUS'
  // Utility & Defensive
  | 'HEALING_BONUS'
  | 'INCOMING_HEALING_BONUS'
  | 'SHIELD_STRENGTH'
  | 'COOLDOWN_REDUCTION'
  | 'MOVEMENT_SPEED'
  | 'ATTACK_SPEED'
  // Enemy Resistance Shreds & Def Shreds
  | 'PYRO_RES_SHRED'
  | 'HYDRO_RES_SHRED'
  | 'ANEMO_RES_SHRED'
  | 'ELECTRO_RES_SHRED'
  | 'DENDRO_RES_SHRED'
  | 'CRYO_RES_SHRED'
  | 'GEO_RES_SHRED'
  | 'PHYSICAL_RES_SHRED'
  | 'ALL_RES_SHRED'
  | 'DEF_SHRED';

/**
 * Value breakdown for a single stat (e.g. HP, ATK, DEF).
 */
export interface StatValueBreakdown {
  base: number;
  flatBonus: number;
  percentBonus: number;
  finalValue: number;
}

/**
 * Complete snapshot of calculated character stats for future calculator processing.
 */
export interface CharacterStatSheet {
  hp: StatValueBreakdown;
  atk: StatValueBreakdown;
  def: StatValueBreakdown;
  elementalMastery: number;
  critRate: number; // Decimal (e.g. 0.50 = 50%)
  critDmg: number; // Decimal (e.g. 1.00 = 100%)
  energyRecharge: number; // Decimal (e.g. 1.20 = 120%)
  healingBonus: number;
  incomingHealingBonus: number;
  shieldStrength: number;
  elementalDmgBonuses: Record<ElementType, number>;
  physicalDmgBonus: number;
  allDmgBonus: number;
  resShreds: Record<ElementType, number>;
  defShred: number;
}

export type ModifierType = 'flat' | 'percent';

/**
 * Extensible stat modifier structure for passives, weapon skills, artifact sets, and team buffs.
 */
export interface StatModifier {
  id: string;
  statType: StatType;
  value: number;
  modifierType: ModifierType;
  source: string;
  condition?: string;
  isConditional?: boolean;
}
