import axios from "axios";
import { useLayoutEffect, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TravelItem from "../../components/cards/TravelItem";

const RecommandedTravelScreen = ({ route, navigation }) => {
  // State
  const [recommandedTravelData, setRecommandedTravelData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "여행지 추천 목록",
      contentStyle: {
        marginHorizontal: 18,
        backgroundColor: "white",
      },
    });
  }, [navigation]);

  const restApi = "http://10.0.2.2:8080/travel/getAllTravels";
  const initRequest = async () => {
    const allTravelData = await axios.get(restApi);
    setRecommandedTravelData(allTravelData.data.data);
    console.log("All Travel Data!!!!!", allTravelData.data.data);
  };
  useEffect(() => {
    initRequest();
  }, []);

  const renderTravelList = (itemData) => {
    const navigateTravelDetailHandler = () => {
      navigation.navigate("travelDetailScreen", { travelData: itemData.item });
    };
    return (
      <TravelItem
        travelData={itemData.item}
        onPress={navigateTravelDetailHandler}
      />
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        style={styles.list}
        data={recommandedTravelData}
        renderItem={renderTravelList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    height: "100%",
  },
});

export default RecommandedTravelScreen;
