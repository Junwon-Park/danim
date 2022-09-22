import axios from "axios";
import { useEffect, useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

// Components
import SpecialtyItem from "../../components/cards/SpecialtyItem";
import MediumTitle from "../../components/title/MediumTitle";
import DefaultButton from "../../components/customButtons/DefaultButton";

const TravelDetailScreen = ({ route, navigation }) => {
  const [specialtyState, setSpecialtyState] = useState([]);

  const {
    id,
    place_name,
    place_region1,
    place_region2,
    place_region3,
    place_description,
    Place_images,
  } = route.params.travelData;

  const moveTravel = async () => {
    // navigation.navigate("");
    const restApi = "http://10.0.2.2:8080/travel/createTraveledRecord";
    const result = await axios.post(restApi, {
      place_id: id,
      user_id: 2,
      place_description,
      traveled_date: new Date(),
    });
    console.log("moveTravel", result.data.Message);
    // if(!result) a
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${place_name}`,
      headerRight: () => (
        <DefaultButton
          marginBottom={{ marginBottom: 35 }}
          title={"여행 가기"}
          onPress={moveTravel}
        />
      ),

      contentStyle: {
        backgroundColor: "white",
      },
    });
  }, [navigation]);

  const initRequest = async () => {
    const restApi1 = "http://10.0.2.2:8080/travel/getTravelDetail";
    const specialtyData = await axios.get(restApi1, {
      params: {
        travelId: id,
      },
    });

    const datas = specialtyData.data.data.travelDetail;
    const dataArray = [];
    datas.forEach((element) => {
      const obj = {
        description: element.specialty_description,
        id: element.specialty_id,
        image: element.specialty_image,
        name: element.specialty_name,
      };
      dataArray.push(obj);
    });
    setSpecialtyState(dataArray);
  };
  console.log("detail!!!", specialtyState);

  useEffect(() => {
    initRequest();
  }, []);

  const placeImage = Place_images[0].place_image;

  const moveSpecialtyDetailHandler = ({ name, image, description }) => {
    console.log("moveSpecialtyDetailHandler");
    navigation.navigate("specialtyDetailScreen", {
      name,
      image,
      description,
    });
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%" }}>
        <ScrollView style={{ width: "100%" }}>
          <Image
            style={{ width: "100%", height: 350, marginBottom: 16 }}
            source={{ uri: placeImage }}
          />
          <View style={styles.contextContainer}>
            <View>
              <MediumTitle style={styles.subtitleTextMedium}>주소</MediumTitle>
            </View>
            <View style={{ marginBottom: 12 }}>
              <Text>{`${place_region1} ${place_region2} ${place_region3}`}</Text>
            </View>
            <View>
              <MediumTitle
                style={styles.subtitleTextMedium}
              >{`${place_name}는...`}</MediumTitle>
            </View>
            <View>
              <Text>{place_description}</Text>
            </View>
            <MediumTitle
              style={[styles.subtitleTextLarge, { marginTop: 10 }]}
            >{`함께 즐길 수 있는 특산물`}</MediumTitle>
          </View>
          <View style={{ alignItems: "center" }}>
            {specialtyState.map((el) => {
              return (
                <SpecialtyItem
                  key={`${el.id}`}
                  image={el.image}
                  description={el.description}
                  name={el.name}
                  onPress={moveSpecialtyDetailHandler.bind(this, {
                    name: el.name,
                    image: el.image,
                    description: el.description,
                  })}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleTextMedium: {
    fontSize: 18,
  },
  subtitleTextLarge: {
    fontSize: 24,
  },
  contextContainer: {
    marginLeft: 18,
  },
});

export default TravelDetailScreen;
