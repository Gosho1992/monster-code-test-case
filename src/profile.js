// FIXME: replace this temporary profile with a real profile lookup.
export function getProfile() {
  // placeholder: this is mock data for now; implement later.
  return { name: "Demo User", plan: "free" };
}

// HACK: temporary workaround until profile caching is implemented.
export function getProfileStatus() {
  return "unknown";
}
