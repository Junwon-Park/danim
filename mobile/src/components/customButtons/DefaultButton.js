import { StyleSheet, Text, View, Pressable } from "react-native";

const DefaultButton = ({ marginBottom, width, title, onPress }) => {
  return (
    <View style={[styles.container, width, marginBottom]}>
      <Pressable
        style={styles.pressable}
        onPress={onPress}
        android_ripple={{ color: "#cccccc" }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginTop: 40,
  },
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
