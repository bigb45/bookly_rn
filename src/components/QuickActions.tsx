import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PlusCircle } from "phosphor-react-native";

interface QuickAction {
  id: string;
  title: string;
}

const QuickActions: React.FC = () => {
  const actions: QuickAction[] = [
    { id: "add", title: "Add Appointment" },
    { id: "calendar", title: "View Calendar" },
    { id: "assistant", title: "AI Assistant" },
    { id: "pos", title: "POS System" },
  ];

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Quick Actions</Text>
      <View style={{ height: 12 }} />
      <View style={styles.grid}>
        {actions.map((a) => (
          <TouchableOpacity
            key={a.id}
            style={styles.card}
            activeOpacity={0.8}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <PlusCircle size={20} color="#1976FF" />
              <View style={{ width: 12 }} />
              <Text style={styles.cardText}>{a.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { marginTop: 12 },
  title: { fontSize: 20, fontWeight: "700" },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  card: {
    width: "48%",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(10,10,10,0.04)",
  },
  cardText: { fontWeight: "600", fontSize: 15 },
});

export default QuickActions;
