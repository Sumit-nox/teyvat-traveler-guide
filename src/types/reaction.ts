import { ElementType } from './stats';

export type ReactionCategory =
  | 'transformative'
  | 'amplifying'
  | 'additive'
  | 'utility';

export type ReactionTriggerType =
  | 'melt'
  | 'vaporize'
  | 'overloaded'
  | 'superconduct'
  | 'electro_charged'
  | 'swirl'
  | 'frozen'
  | 'shatter'
  | 'crystallize'
  | 'burning'
  | 'bloom'
  | 'hyperbloom'
  | 'burgeon'
  | 'quicken'
  | 'aggravate'
  | 'spread';

/**
 * Structural definition of an elemental reaction.
 */
export interface ElementalReactionDefinition {
  id: string;
  name: string;
  category: ReactionCategory;
  triggerType: ReactionTriggerType;
  triggeringElements: [ElementType, ElementType];
  baseMultiplier?: number; // e.g. 1.5x / 2.0x for Amplifying
  emScalingCoefficient?: number; // Coefficient for EM formula
  description: string;
}

/**
 * Prepared state container for future calculation pipeline.
 */
export interface ReactionCalculationState {
  reactionType: ReactionTriggerType;
  triggerElement: ElementType;
  auraElement: ElementType;
  characterLevel: number;
  elementalMastery: number;
  reactionBonusPercent: number; // e.g. 40% from 4pc Crimson Witch
  enemyResistances?: Partial<Record<ElementType, number>>;
}
