import { StyleSheet, Text, View, Pressable, Image } from "react-native";

const ReviewItem = ({ image, text, onPress }) => {
  console.log("Image!!!!", image[0]);
  const imageArray = image[0] ? (
    <Image style={styles.image} source={{ uri: image[0] }} />
  ) : (
    <Text>Image</Text>
  );
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.pressable}
        onPress={onPress}
        android_ripple={{ color: "#cccccc" }}
      >
        <View style={styles.imageContainer}>{imageArray}</View>
        <View style={styles.textContainer}>
          <Text>{text === "" ? "TEST" : text}</Text>
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
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
  },
  image: { width: "100%", height: "100%" },
});

export default ReviewItem;
