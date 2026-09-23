import { ElementalReactionDefinition } from '@/types/reaction';

/**
 * DEMO/MOCK Elemental Reactions Registry
 * Structural contract for reactions without hardcoded formulas.
 */
export const MOCK_REACTION_DEFINITIONS_DEMO: ElementalReactionDefinition[] = [
  {
    id: 'reaction-melt',
    name: 'Melt',
    category: 'amplifying',
    triggerType: 'melt',
    triggeringElements: ['Pyro', 'Cryo'],
    baseMultiplier: 2.0,
    emScalingCoefficient: 2.78,
    description: 'Triggers when Pyro meets Cryo. Multiplies damage dealt.',
  },
  {
    id: 'reaction-vaporize',
    name: 'Vaporize',
    category: 'amplifying',
    triggerType: 'vaporize',
    triggeringElements: ['Hydro', 'Pyro'],
    baseMultiplier: 2.0,
    emScalingCoefficient: 2.78,
    description: 'Triggers when Hydro meets Pyro. Multiplies damage dealt.',
  },
  {
    id: 'reaction-swirl',
    name: 'Swirl',
    category: 'transformative',
    triggerType: 'swirl',
    triggeringElements: ['Anemo', 'Pyro'],
    baseMultiplier: 0.6,
    emScalingCoefficient: 16,
    description: 'Triggers when Anemo contacts Pyro, Hydro, Electro, or Cryo.',
  },
];
