import { Pressable, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const TinyButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#cccccc" }} onPress={onPress}>
        <Feather name="camera" size={32} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
  },
});

export default TinyButton;
