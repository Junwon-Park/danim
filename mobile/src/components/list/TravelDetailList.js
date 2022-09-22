import { ScrollView, StyleSheet, Text, View } from "react-native";

// Components
import SpecialtyItem from "../../components/cards/SpecialtyItem";

const TravelDetailList = ({ specialtyDatas }) => {
  console.log("special!!!", specialtyDatas);
  return (
    <View style={{ width: "100%" }}>
      <View>
        {specialtyDatas.map((el) => {
          return (
            <SpecialtyItem
              key={`${el.id}`}
              image={el.image}
              description={el.description}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TravelDetailList;
