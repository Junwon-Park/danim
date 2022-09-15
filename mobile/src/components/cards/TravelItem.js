import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const TravelItem = ({ travelData, onPress }) => {
  const { Place_images } = travelData;

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 16 }}
        source={{
          uri: Place_images[0].place_image,
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{travelData.place_name}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.textContainer}
            onPress={onPress}
            android_ripple={{ color: "#cccccc" }}
          >
            <Text style={styles.buttonText}>자세히 보기</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 200,
    marginVertical: 16,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 16,
    marginLeft: 32,
  },
  buttonContainer: {
    borderWidth: 1,
    height: "20%",
    width: "50%",
    borderRadius: 32,
    marginLeft: 32,
    overflow: "hidden",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 32,
  },
  buttonText: {
    fontWeight: "bold",
    height: "100%",
    fontSize: 18,
    marginLeft: 18,
    marginTop: 8,
  },
});

export default TravelItem;
