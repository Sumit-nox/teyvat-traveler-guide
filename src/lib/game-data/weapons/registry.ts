import { Weapon } from '@/types/weapon';
import { MOCK_WEAPON_DEMO } from './mock-weapon';

/**
 * Weapon Game Data Registry
 * 
 * Centralized data-access layer for weapon definitions.
 * Serves as the single source of truth for features such as weapon pages,
 * build recommendations, calculation engines, and team builders.
 */

const WEAPONS: Weapon[] = [MOCK_WEAPON_DEMO];

/**
 * Retrieves all registered weapons.
 * 
 * @returns Array of Weapon objects.
 */
export function getWeapons(): Weapon[] {
  return WEAPONS;
}

/**
 * Looks up a weapon by its unique identifier.
 * 
 * @param id - The unique weapon ID string.
 * @returns The matching Weapon instance, or undefined if not found.
 */
export function getWeaponById(id: string): Weapon | undefined {
  return WEAPONS.find((weapon) => weapon.id === id);
}
