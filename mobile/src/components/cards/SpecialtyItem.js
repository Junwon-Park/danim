import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const SpecialtyItem = ({ image, description, name, onPress }) => {
  return (
    <View
      style={{
        width: "90%",
        borderWidth: 1,
        borderRadius: 16,
        overflow: "hidden",
        marginVertical: 7,
      }}
    >
      <Pressable onPress={onPress} android_ripple={{ color: "#cccccc" }}>
        <Image style={{ width: "100%", height: 150 }} source={{ uri: image }} />
        <Text style={{ fontSize: 24, fontWeight: "bold", margin: 8 }}>
          {name}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SpecialtyItem;
