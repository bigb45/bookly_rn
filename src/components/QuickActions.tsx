import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PlusCircle, CaretRight } from "phosphor-react-native";
import { useTheme } from "../theme/useTheme";

interface QuickAction {
  id: string;
  title: string;
}

const QuickActions: React.FC = () => {
  const theme = useTheme();

  const actions: QuickAction[] = [
    { id: "add", title: "Add Appointment" },
    { id: "calendar", title: "View Calendar" },
    { id: "assistant", title: "AI Assistant" },
    { id: "pos", title: "POS System" },
  ];

  return (
    <View style={{ marginTop: theme.spacing.md }}>
      <Text
        style={[theme.typography.headlineMedium, { color: theme.colors.text }]}
      >
        Quick Actions
      </Text>
      <View style={{ height: theme.spacing.sm }} />
      <View style={styles.grid}>
        {actions.map((a) => (
          <TouchableOpacity
            key={a.id}
            style={[
              styles.card,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
                borderRadius: theme.borderRadius.md,
                ...theme.shadows.sm,
              },
            ]}
            activeOpacity={0.8}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
              >
                <PlusCircle size={20} color={theme.colors.primary} />
                <View style={{ width: theme.spacing.sm }} />
                <Text
                  style={[
                    theme.typography.labelLarge,
                    { color: theme.colors.text },
                  ]}
                >
                  {a.title}
                </Text>
              </View>
              <CaretRight
                size={16}
                color={theme.colors.textTertiary}
                weight="bold"
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  card: {
    width: "48%",
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
  },
});

export default QuickActions;
