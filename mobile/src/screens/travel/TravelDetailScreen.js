import axios from "axios";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const TravelDetailScreen = ({ route }) => {
  const {
    id,
    place_name,
    place_region1,
    place_region2,
    place_region3,
    place_description,
    Place_images,
  } = route.params.travelData;
  const initRequest = async () => {
    const restApi1 = "http://10.0.2.2:8080/travel/getTravelDetail";
    const specialtyData = await axios.get(restApi1, {
      params: {
        travelId: id,
      },
    });
    console.log("TravelDatails", specialtyData.data.data.travelDetail);
  };
  useEffect(() => {
    initRequest();
  }, []);

  const placeImage = Place_images[0].place_image;

  //   console.log(
  //     id,
  //     place_name,
  //     place_region1,
  //     place_region2,
  //     place_region3,
  //     place_description,
  //     placeImage
  //   );
  console.log(route.params.travelData);

  return (
    <View>
      <Text>Travel!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TravelDetailScreen;
