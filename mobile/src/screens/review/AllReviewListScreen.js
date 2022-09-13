import { useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// Componenets
import ReviewItem from "../../components/cards/ReviewItem";
import axios from "axios";

const AllReviewListScreen = ({ route, navigation }) => {
  // Test
  const [reviewDatas, setReviewDatas] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "리뷰",
      contentStyle: {
        marginHorizontal: 18,
        backgroundColor: "white",
      },
      headerRight: () => {
        const writeReviewHandler = () => {
          navigation.navigate("writeReview");
        };
        // 헤더 우측 버튼 컴포넌트 반환(버튼 생성)
        return (
          <View style={styles.writeReviewButtonContainer}>
            <Pressable
              style={styles.pressable}
              android_ripple={{ color: "#cccccc" }}
              onPress={writeReviewHandler}
            >
              <FontAwesome5 name="pen-alt" size={30} color="black" />
            </Pressable>
          </View>
        );
      },
    });
  }, [navigation]);

  const restApi = "http://10.0.2.2:8080/review/getAllReviews";
  const initRequest = async () => {
    const response = await axios.get(restApi);
    setReviewDatas(response.data.data);
  };

  // Get all reviews init screen
  useEffect(() => {
    initRequest();
  }, []);

  const renderReviewItemHandler = (itemData) => {
    const item = itemData.item;
    const imageList = item.review_image.split(","); // Array
    const reviewText = item.review_description;

    const reviewItemPressedHandler = () => {
      navigation.navigate("reviewDetail", {
        images: imageList,
        text: reviewText,
      });
    };

    return (
      <ReviewItem
        image={imageList}
        text={reviewText}
        onPress={reviewItemPressedHandler}
      />
    );
  };

  return (
    <>
      <View style={styles.scrollContainer}>
        <View>
          <FlatList data={reviewDatas} renderItem={renderReviewItemHandler} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginBottom: 20,
  },
  writeReviewButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    overflow: "hidden",
    paddingTop: 6,
  },
  pressable: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

export default AllReviewListScreen;
