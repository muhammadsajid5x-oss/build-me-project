export interface FeatureFlags {
  navbar: boolean;
  heroSection: boolean;
  footer: boolean;
  bookingJourney: boolean;
  analytics: boolean;
}

export const featureFlags: FeatureFlags = {
  navbar: true,
  heroSection: true,
  footer: true,
  bookingJourney: false, // Disabled for progressive rollout
  analytics: true,
};

export function isFeatureEnabled(feature: keyof FeatureFlags): boolean {
  // Can be extended to check environment variables or remote config overrides
  return featureFlags[feature] ?? false;
}
