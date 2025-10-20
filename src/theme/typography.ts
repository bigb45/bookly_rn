import { TextStyle } from "react-native";

// Typography styles
export const typography = {
  // Display styles
  displayLarge: {
    fontSize: 32,
    fontWeight: "700" as TextStyle["fontWeight"],
    letterSpacing: -0.5,
  },
  displayMedium: {
    fontSize: 28,
    fontWeight: "700" as TextStyle["fontWeight"],
    letterSpacing: -0.5,
  },
  displaySmall: {
    fontSize: 24,
    fontWeight: "700" as TextStyle["fontWeight"],
    letterSpacing: -0.5,
  },

  // Headline styles
  headlineLarge: {
    fontSize: 22,
    fontWeight: "600" as TextStyle["fontWeight"],
    letterSpacing: -0.5,
  },
  headlineMedium: {
    fontSize: 20,
    fontWeight: "600" as TextStyle["fontWeight"],
    letterSpacing: -0.5,
  },
  headlineSmall: {
    fontSize: 18,
    fontWeight: "600" as TextStyle["fontWeight"],
    letterSpacing: -0.5,
  },

  // Title styles
  titleLarge: {
    fontSize: 16,
    fontWeight: "600" as TextStyle["fontWeight"],
    letterSpacing: -0.25,
  },
  titleMedium: {
    fontSize: 14,
    fontWeight: "600" as TextStyle["fontWeight"],
    letterSpacing: -0.25,
  },
  titleSmall: {
    fontSize: 12,
    fontWeight: "600" as TextStyle["fontWeight"],
    letterSpacing: -0.25,
  },

  // Body styles
  bodyLarge: {
    fontSize: 16,
    fontWeight: "400" as TextStyle["fontWeight"],
    letterSpacing: -0.25,
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: "400" as TextStyle["fontWeight"],
    letterSpacing: -0.25,
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: "400" as TextStyle["fontWeight"],
    letterSpacing: -0.25,
  },

  // Label styles
  labelLarge: {
    fontSize: 14,
    fontWeight: "500" as TextStyle["fontWeight"],
    letterSpacing: -0.25,
  },
  labelMedium: {
    fontSize: 12,
    fontWeight: "500" as TextStyle["fontWeight"],
    letterSpacing: -0.25,
  },
  labelSmall: {
    fontSize: 10,
    fontWeight: "500" as TextStyle["fontWeight"],
    letterSpacing: -0.25,
  },
} as const;

export type TypographyKey = keyof typeof typography;
