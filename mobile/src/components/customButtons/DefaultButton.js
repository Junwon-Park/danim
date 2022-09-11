import { StyleSheet, Text, View, Pressable } from "react-native";

const DefaultButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Pressable
          style={styles.pressable}
          onPress={onPress}
          android_ripple={{ color: "#cccccc" }}
        >
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  innerContainer: {},
  pressable: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  textContainer: {
    width: "100%",
    borderRadius: 16,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default DefaultButton;
