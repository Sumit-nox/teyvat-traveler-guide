import { Character } from '@/types/character';
import { MOCK_CHARACTER_DEMO } from './mock-character';

/**
 * Character Game Data Registry
 * 
 * Centralized data-access layer for character definitions.
 * Serves as the single source of truth for features such as character pages,
 * team building, calculations, and tier lists without coupling them directly
 * to mock dataset files.
 */

const CHARACTERS: Character[] = [MOCK_CHARACTER_DEMO];

/**
 * Retrieves all registered characters.
 * 
 * @returns Array of Character objects.
 */
export function getCharacters(): Character[] {
  return CHARACTERS;
}

/**
 * Looks up a character by its unique identifier.
 * 
 * @param id - The unique character ID string.
 * @returns The matching Character instance, or undefined if not found.
 */
export function getCharacterById(id: string): Character | undefined {
  return CHARACTERS.find((character) => character.id === id);
}
