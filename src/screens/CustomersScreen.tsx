import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomersScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customers</Text>
      <Text>List of customers will go here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
});

export default CustomersScreen;
