// XXX: remove this compatibility branch after migration.
export function legacyMode(enabled) {
  if (enabled) {
    return "legacy";
  }
  return "modern";
}
