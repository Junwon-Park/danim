import { View, StyleSheet, TextInput, Text } from "react-native";

const DefaultInput = ({ label, defaultInputConfig }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.innerContainer}>
        <TextInput style={styles.input} {...defaultInputConfig} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {},
  innerContainer: {
    height: 200,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    marginVertical: 8,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DefaultInput;
