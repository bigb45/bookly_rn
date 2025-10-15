import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Toast from "react-native-toast-message";

const AssistantScreen: React.FC = () => {
  const [text, setText] = useState<string>("");

  const send = (): void => {
    if (!text.trim()) return;
    Toast.show({ type: "success", text1: "Assistant", text2: "Message sent" });
    setText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Assistant</Text>
      <TextInput
        placeholder="Ask me anything..."
        style={styles.input}
        multiline
        value={text}
        onChangeText={setText}
      />
      <Button title="Send" onPress={send} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
    minHeight: 40,
    marginBottom: 8,
  },
});

export default AssistantScreen;
