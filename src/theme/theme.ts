// Design system inspired by financial editorial aesthetics —
// think old-world finance journals meets modern fintech.

export const colors = {
  // Primary palette
  ink: '#0B1F2A',          // Deep navy-ink, primary dark
  cream: '#F5EFE0',        // Warm cream, primary light
  paper: '#FAF6EC',        // Lighter cream for surfaces

  // Accents
  amber: '#D4904A',        // Warm amber — primary accent
  sage: '#7A9B7E',         // Muted sage — secondary
  rust: '#9B3B3B',         // Deep rust — for warnings/bear

  // Neutrals
  charcoal: '#2B3640',
  slate: '#5A6670',
  fog: '#A8AEB3',
  bone: '#E8E2D2',

  // Semantic
  bull: '#5C8B65',         // Subtle green for "up"
  bear: '#9B3B3B',         // Subtle red for "down"
};

export const typography = {
  // Fraunces — distinctive serif for headings
  // DM Sans — clean grotesque for body
  displayLarge: {
    fontFamily: 'Fraunces_700Bold',
    fontSize: 42,
    lineHeight: 48,
    letterSpacing: -1.2,
  },
  display: {
    fontFamily: 'Fraunces_700Bold',
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: -0.8,
  },
  headline: {
    fontFamily: 'Fraunces_600SemiBold',
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.4,
  },
  title: {
    fontFamily: 'Fraunces_600SemiBold',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.2,
  },
  bodyLarge: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 17,
    lineHeight: 26,
  },
  body: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 15,
    lineHeight: 23,
  },
  bodyMedium: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 15,
    lineHeight: 22,
  },
  caption: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.6,
    textTransform: 'uppercase' as const,
  },
  label: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 13,
    lineHeight: 18,
  },
  button: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const radii = {
  sm: 6,
  md: 12,
  lg: 20,
  xl: 28,
  pill: 999,
};
