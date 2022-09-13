import { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import DefaultButton from "../../components/customButtons/DefaultButton";

const { width, height } = Dimensions.get("screen");

const ReviewDetailScreen = ({ route, navigation }) => {
  const imageArray = route.params.images;
  const reviewText = route.params.text;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Title`,
      contentStyle: {
        backgroundColor: "white",
      },
    });
  }, [navigation]);

  const renderCarouselHandler = (itemData) => {
    return (
      <View>
        <View style={[styles.imageContainer]}>
          <Image style={styles.image} source={{ uri: itemData.item }} />
        </View>
      </View>
    );
  };

  const goReviewListHandler = () => {
    navigation.navigate("allReviewList");
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={imageArray}
        horizontal
        pagingEnabled
        renderItem={renderCarouselHandler}
      />
      <View style={styles.textContainer}>
        <Text>{reviewText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <DefaultButton
          width={{ width: "90%" }}
          title={"목록으로 이동"}
          onPress={goReviewListHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width,
    height: 300,
  },
  textContainer: {
    height: "30%",
    marginHorizontal: 18,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    width: "100%",
    height: 80,
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 100,
  },
});

export default ReviewDetailScreen;
