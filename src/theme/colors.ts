// Color palette based on Figma design
export const colors = {
  // Primary colors
  primary: "#2463EB",
  primaryLight: "#5B8AF0",
  primaryDark: "#003CBE",

  // Background colors
  background: "#FAFAFA",
  surface: "#FFFFFF",
  surfaceVariant: "#F5F5F5",

  // Dark theme colors
  backgroundDark: "#0F0F0F",
  surfaceDark: "#1C1C1E",
  surfaceVariantDark: "#2C2C2E",

  // Text colors
  textPrimary: "#1F2937",
  textSecondary: "#6B7280",
  textTertiary: "#9CA3AF",

  // Dark theme text colors
  textPrimaryDark: "#F9FAFB",
  textSecondaryDark: "#D1D5DB",
  textTertiaryDark: "#9CA3AF",

  // Status colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",

  // Border colors
  border: "#E5E7EB",
  borderDark: "#374151",

  // Utility
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
} as const;

export type ColorKey = keyof typeof colors;
