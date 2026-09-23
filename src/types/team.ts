import { ElementType, StatModifier } from './stats';

export type TeamRole =
  | 'main_dps'
  | 'sub_dps'
  | 'support'
  | 'healer'
  | 'shielder'
  | 'buffer';

export interface TeamMember {
  slotIndex: 1 | 2 | 3 | 4;
  characterId: string;
  role: TeamRole;
  weaponId?: string;
  artifactSetIds?: string[];
  talentLevels?: {
    normal: number;
    skill: number;
    burst: number;
  };
  constellationLevel?: number;
}

export interface TeamBuff {
  id: string;
  name: string;
  source: string; // e.g. "Noblesse Oblige 4-Piece", "Bennett Burst"
  target: 'active_character' | 'all_party' | 'specific_element';
  statModifier: StatModifier;
  isActive: boolean;
  durationSeconds?: number;
}

export interface TeamDebuff {
  id: string;
  name: string;
  source: string; // e.g. "Viridescent Venerer 4-Piece"
  targetEnemyId?: string;
  statModifier: StatModifier; // e.g. Pyro RES Shred 40%
  isActive: boolean;
}

export interface TeamResonance {
  id: string;
  name: string;
  requiredElement: ElementType;
  description: string;
  statModifiers: StatModifier[];
}

export type RotationActionType =
  | 'normal_attack'
  | 'charged_attack'
  | 'plunging_attack'
  | 'elemental_skill'
  | 'elemental_burst'
  | 'character_swap';

export interface RotationStep {
  stepNumber: number;
  characterId: string;
  actionType: RotationActionType;
  durationSeconds?: number;
  notes?: string;
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  members: TeamMember[];
  activeResonances?: TeamResonance[];
  activeBuffs?: TeamBuff[];
  activeDebuffs?: TeamDebuff[];
  rotation?: RotationStep[];
}
