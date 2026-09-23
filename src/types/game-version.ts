/**
 * Represents game version information for versioning game data.
 */
export type VersionStatus = 'active' | 'archived' | 'upcoming';

export interface GameVersion {
  id: string; // e.g. "v5.4"
  versionNumber: string; // e.g. "5.4"
  name: string; // e.g. "Flame-Chased Light"
  releaseDate?: string; // ISO string e.g. "2025-01-01"
  status: VersionStatus;
  description?: string;
}

/**
 * Metadata linking game data entities (characters, weapons, artifacts) to game versions.
 */
export interface VersionInfo {
  introducedInVersionId: string;
  lastModifiedVersionId?: string;
  deprecatedInVersionId?: string;
}

/**
 * Wrapper allowing entity attributes to be version-scoped.
 */
export interface VersionedEntity<T> {
  entityId: string;
  defaultVersionId: string;
  versionDataMap: Record<string, Partial<T>>;
}
