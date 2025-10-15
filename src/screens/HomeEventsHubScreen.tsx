import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DashboardTab from "./home/DashboardTab";
import CalendarTab from "./home/CalendarTab";

const HomeEventsHubScreen: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.segmentContainer}>
        <View
          style={
            Platform.OS === "ios"
              ? styles.iosSegContainer
              : styles.androidSegContainer
          }
        >
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedIndex === 0 && styles.tabSelected,
            ]}
            onPress={() => setSelectedIndex(0)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                selectedIndex === 0 && styles.tabTextSelected,
              ]}
            >
              Dashboard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedIndex === 1 && styles.tabSelected,
            ]}
            onPress={() => setSelectedIndex(1)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                selectedIndex === 1 && styles.tabTextSelected,
              ]}
            >
              Calendar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {selectedIndex === 0 ? <DashboardTab /> : <CalendarTab />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  segmentContainer: { padding: 16 },
  iosSegContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f7",
    borderRadius: 12,
    padding: 4,
  },
  androidSegContainer: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 8,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  tabSelected: {
    backgroundColor: "#fff",
  },
  tabText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#666",
  },
  tabTextSelected: {
    color: "#1976FF",
  },
});

export default HomeEventsHubScreen;
