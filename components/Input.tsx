import { StyleSheet, TextInput } from "react-native";
import { ThemedView } from "./ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

type ThemedTextProps = {
  lightColor?: string;
  darkColor?: string;
};

type InputViewProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  theme: ThemedTextProps;
};


export function InputView(values: InputViewProps) {
  const color = useThemeColor(
    { light: values.theme.lightColor, dark: values.theme.darkColor },
    "text"
  );
  return (
    <ThemedView>
      <TextInput
        onChangeText={values.onChangeText}
        style={[{ color }, styles.input]}
        placeholder={values.value}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 8,
  },
});
