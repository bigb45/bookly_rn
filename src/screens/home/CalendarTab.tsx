import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../../theme/useTheme";

const CalendarTab: React.FC = () => {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={{ padding: theme.spacing.md }}
    >
      <Text
        style={[
          theme.typography.headlineMedium,
          { color: theme.colors.text, marginBottom: theme.spacing.sm },
        ]}
      >
        Calendar Tab
      </Text>
      <Text
        style={[
          theme.typography.bodyLarge,
          { color: theme.colors.textSecondary, marginTop: theme.spacing.md },
        ]}
      >
        Calendar implementation coming soon...
      </Text>
      <Text
        style={[
          theme.typography.bodySmall,
          {
            color: theme.colors.textTertiary,
            marginTop: theme.spacing.sm,
            fontStyle: "italic",
          },
        ]}
      >
        (react-native-calendars has compatibility issues with current RN
        version)
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default CalendarTab;
