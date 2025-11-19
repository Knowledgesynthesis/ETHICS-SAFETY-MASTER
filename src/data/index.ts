import { modules } from './modules';
import extendedModules from './modulesExtended';
import type { Module } from '../types';

// Combine all modules
export const allModules: Module[] = [...modules, ...extendedModules];

// Export vignettes
export { vignettes } from './vignettes';

// Export reference data
export { referenceData } from './reference';

// Helper functions
export function getModuleById(id: string): Module | undefined {
  return allModules.find(m => m.id === id);
}

export function getSectionById(moduleId: string, sectionId: string) {
  const module = getModuleById(moduleId);
  return module?.sections.find(s => s.id === sectionId);
}
