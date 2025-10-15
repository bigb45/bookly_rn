import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CalendarTab: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar Tab</Text>
      <Text style={styles.subtitle}>
        Calendar implementation coming soon...
      </Text>
      <Text style={styles.note}>
        (react-native-calendars has compatibility issues with current RN version)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#FBFBFF" },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#666", marginTop: 16 },
  note: { fontSize: 14, color: "#999", marginTop: 8, fontStyle: "italic" },
});

export default CalendarTab;
