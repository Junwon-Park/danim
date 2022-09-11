import { StyleSheet, Text, View, Pressable } from "react-native";

const ReviewItem = ({ item, onPress }) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.pressable}
        onPress={onPress}
        android_ripple={{ color: "#cccccc" }}
      >
        <View style={styles.imageContainer}>
          <Text>{item}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Text</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 250,
    borderWidth: 1,
    borderRadius: 16,
    marginVertical: 8,
    overflow: "hidden",
  },
  pressable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ReviewItem;
