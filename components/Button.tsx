import { Pressable, StyleSheet, Text } from "react-native";
import { ThemedText } from "./ThemedText";

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export function Button(value: ButtonProps) {
  return (
    <Pressable onPress={value.onPress} style={styles.button}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>{value.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    boxShadow: '0 3px 0 rgba(1, 34, 3, 0.8)',
  },
});
