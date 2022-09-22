import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// Components
import MediumTitle from "../../components/title/MediumTitle";

const SpecialtyDetailScreen = ({ route, navigation }) => {
  const { name, image, description } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${name}`,
      contentStyle: {
        marginHorizontal: 18,
        backgroundColor: "white",
      },
    });
  }, [navigation]);

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <MediumTitle style={{ fontSize: 24 }}>{name}</MediumTitle>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  imageContainer: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    marginVertical: 18,
  },
});

export default SpecialtyDetailScreen;
