/**
 * Theme Usage Examples
 *
 * This file demonstrates how to use the theme system in your React Native components.
 */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/useTheme";

// Example 1: Using the theme hook in a component
export const ThemedCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          borderRadius: theme.borderRadius.md,
          padding: theme.spacing.md,
          ...theme.shadows.sm,
        },
      ]}
    >
      <Text
        style={[
          theme.typography.titleLarge,
          { color: theme.colors.text, marginBottom: theme.spacing.sm },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          theme.typography.bodyMedium,
          { color: theme.colors.textSecondary },
        ]}
      >
        {description}
      </Text>
    </View>
  );
};

// Example 2: Using theme for buttons
export const ThemedButton: React.FC<{
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}> = ({ title, onPress, variant = "primary" }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor:
            variant === "primary" ? theme.colors.primary : theme.colors.surface,
          borderRadius: theme.borderRadius.md,
          paddingVertical: theme.spacing.md,
          paddingHorizontal: theme.spacing.lg,
          borderWidth: variant === "secondary" ? 1 : 0,
          borderColor: theme.colors.border,
          ...theme.shadows.sm,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={[
          theme.typography.labelLarge,
          {
            color:
              variant === "primary" ? theme.colors.white : theme.colors.text,
            textAlign: "center",
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// Example 3: Creating theme-aware styles
export const ThemedList: React.FC = () => {
  const theme = useTheme();

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.md,
    },
    item: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      marginBottom: theme.spacing.sm,
      borderWidth: 1,
      borderColor: theme.colors.border,
      ...theme.shadows.sm,
    },
    title: {
      ...theme.typography.headlineSmall,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    subtitle: {
      ...theme.typography.bodyMedium,
      color: theme.colors.textSecondary,
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <View style={dynamicStyles.item}>
        <Text style={dynamicStyles.title}>List Item</Text>
        <Text style={dynamicStyles.subtitle}>This is a themed list item</Text>
      </View>
    </View>
  );
};

// Static styles that don't need theme
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
  },
});

// Example 4: Direct import for static values
// If you don't need dynamic theming, you can import directly:
// import { colors, spacing, borderRadius } from '../theme';
// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: colors.surface,
//     padding: spacing.md,
//     borderRadius: borderRadius.md,
//   },
// });
