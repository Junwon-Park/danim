import { Pressable, StyleSheet, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const TinyButton = ({ type, onPress }) => {
  let Icon = <Feather name="camera" size={32} color="black" />;
  if (type === "gallery")
    Icon = (
      <MaterialCommunityIcons
        name="view-gallery-outline"
        size={32}
        color="black"
      />
    );

  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#cccccc" }} onPress={onPress}>
        {Icon}
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
    marginRight: 10,
  },
});

export default TinyButton;
