import React from "react";
import { View, Text, StyleSheet } from "react-native";

const POSScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>POS</Text>
      <Text>Point of sale screen placeholder.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
});

export default POSScreen;
