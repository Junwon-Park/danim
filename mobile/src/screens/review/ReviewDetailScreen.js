import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const ReviewDetailScreen = ({ route, navigation }) => {
  const itemId = route.params.id;
  const item = route.params.item;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Title ${itemId}`,
    });
  }, [navigation]);

  const renderCarouselHandler = (itemData) => {
    return (
      <View>
        <View
          style={[styles.imageContainer, { backgroundColor: itemData.item }]}
        >
          <Text>{itemData.item}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={item.image}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item}
        renderItem={renderCarouselHandler}
      />
      <View style={styles.textContainer}>
        <Text>{item.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  imageContainer: {
    width,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: 24,
    height: "60%",
    marginHorizontal: 18,
  },
});

export default ReviewDetailScreen;
