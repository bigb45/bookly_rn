import { colors } from "./colors";
import { spacing } from "./spacing";
import { borderRadius } from "./borderRadius";
import { typography } from "./typography";
import { shadows } from "./shadows";

// Theme structure
export interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    background: string;
    surface: string;
    surfaceVariant: string;
    text: string;
    textSecondary: string;
    textTertiary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    white: string;
    black: string;
  };
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  typography: typeof typography;
  shadows: typeof shadows;
}

// Light theme
export const lightTheme: Theme = {
  colors: {
    primary: colors.primary,
    primaryLight: colors.primaryLight,
    primaryDark: colors.primaryDark,
    background: colors.background,
    surface: colors.surface,
    surfaceVariant: colors.surfaceVariant,
    text: colors.textPrimary,
    textSecondary: colors.textSecondary,
    textTertiary: colors.textTertiary,
    border: colors.border,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
    white: colors.white,
    black: colors.black,
  },
  spacing,
  borderRadius,
  typography,
  shadows,
};

// Dark theme
export const darkTheme: Theme = {
  colors: {
    primary: colors.primaryLight,
    primaryLight: colors.primary,
    primaryDark: colors.primaryDark,
    background: colors.backgroundDark,
    surface: colors.surfaceDark,
    surfaceVariant: colors.surfaceVariantDark,
    text: colors.textPrimaryDark,
    textSecondary: colors.textSecondaryDark,
    textTertiary: colors.textTertiaryDark,
    border: colors.borderDark,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,
    white: colors.white,
    black: colors.black,
  },
  spacing,
  borderRadius,
  typography,
  shadows,
};

// Export individual parts
export { colors } from "./colors";
export { spacing } from "./spacing";
export { borderRadius } from "./borderRadius";
export { typography } from "./typography";
export { shadows } from "./shadows";
