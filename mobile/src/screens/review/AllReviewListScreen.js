import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// Componenets
import ReviewItem from "../../components/cards/ReviewItem";

const AllReviewListScreen = ({ route, navigation }) => {
  // Test
  const [reviewDatas, setReviewDatas] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  ]);

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

  const renderReviewItemHandler = (itemData) => {
    const reviewItemPressedHandler = () => {
      // 여기에서 해당 리뷰 데이터 서버에서 받아와 params로 넘겨야 함
      navigation.navigate("reviewDetail", {
        id: itemData.item,
        item: { image: ["#f5428d", "#41d95d", "#f5d142"], text: "와우~~" },
      });
    };
    return (
      <ReviewItem item={itemData.item} onPress={reviewItemPressedHandler} />
    );
  };

  return (
    <>
      <View style={styles.scrollContainer}>
        <View>
          <FlatList
            data={reviewDatas}
            renderItem={renderReviewItemHandler}
            keyExtractor={(item) => item}
          />
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
