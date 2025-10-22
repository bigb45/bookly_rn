import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";

import DashboardTab from "./home/DashboardTab";
import CalendarTab from "./home/CalendarTab";
import AppBar from "../components/AppBar";
import { useTheme } from "../theme/useTheme";

const HomeEventsHubScreen: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const theme = useTheme();

  const handleNotificationsPress = () => {
    console.log("Notifications pressed");
  };

  const handleSettingsPress = () => {
    console.log("Settings pressed");
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <AppBar
        title={selectedIndex === 0 ? "Dashboard" : "Calendar"}
        onNotificationsPress={handleNotificationsPress}
        onSettingsPress={handleSettingsPress}
      />
      <View style={[styles.segmentContainer, { padding: theme.spacing.md }]}>
        <View
          style={[
            Platform.OS === "ios"
              ? styles.iosSegContainer
              : styles.androidSegContainer,
            {
              backgroundColor: theme.colors.border,
              borderRadius: theme.borderRadius.md,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedIndex === 0 && {
                ...styles.tabSelected,
                backgroundColor: theme.colors.surface,
                borderWidth: 1,
                borderColor: theme.colors.primary,
                ...theme.shadows.sm,
              },
            ]}
            onPress={() => setSelectedIndex(0)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                theme.typography.labelLarge,
                {
                  color:
                    selectedIndex === 0
                      ? theme.colors.primary
                      : theme.colors.textSecondary,
                },
              ]}
            >
              Dashboard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedIndex === 1 && {
                ...styles.tabSelected,
                backgroundColor: theme.colors.surface,
                borderWidth: 1,
                borderColor: theme.colors.primary,
                ...theme.shadows.sm,
              },
            ]}
            onPress={() => setSelectedIndex(1)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                theme.typography.labelLarge,
                {
                  color:
                    selectedIndex === 1
                      ? theme.colors.primary
                      : theme.colors.textSecondary,
                },
              ]}
            >
              Calendar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {selectedIndex === 0 ? <DashboardTab /> : <CalendarTab />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  segmentContainer: {},
  iosSegContainer: {
    flexDirection: "row",
    padding: 4,
  },
  androidSegContainer: {
    flexDirection: "row",
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  tabSelected: {},
});

export default HomeEventsHubScreen;
