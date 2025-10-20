import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Bell, Gear } from "phosphor-react-native";
import { useTheme } from "../theme/useTheme";

interface AppBarProps {
  title: string;
  onNotificationsPress?: () => void;
  onSettingsPress?: () => void;
}

const AppBar: React.FC<AppBarProps> = ({
  title,
  onNotificationsPress,
  onSettingsPress,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text
        style={[theme.typography.headlineMedium, { color: theme.colors.text }]}
      >
        {title}
      </Text>
      <View style={styles.actions}>
        <TouchableOpacity
          style={[
            styles.iconButton,
            { backgroundColor: theme.colors.surfaceVariant },
          ]}
          onPress={onNotificationsPress}
          activeOpacity={0.6}
        >
          <Bell size={24} color={theme.colors.text} weight="regular" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.iconButton,
            { backgroundColor: theme.colors.surfaceVariant },
          ]}
          onPress={onSettingsPress}
          activeOpacity={0.6}
        >
          <Gear size={24} color={theme.colors.text} weight="regular" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppBar;
