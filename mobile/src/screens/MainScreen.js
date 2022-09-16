import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MainScreen = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "다님",
      contentStyle: {
        marginHorizontal: 18,
        backgroundColor: "white",
      },
    });
  }, [navigation]);

  const moveTravelRecommandHandler = () => {
    navigation.navigate("recommandedTravelScreen");
  };

  const moveLoginHandler = () => {
    navigation.navigate("loginScreen");
  };

  const moveSignUpHandler = () => {
    navigation.navigate("signInScreen");
  };

  return (
    <View>
      <Text>Main Screen</Text>
      <Button title={"여행지 추천 받기"} onPress={moveTravelRecommandHandler} />
      <Button title={"로그인"} onPress={moveLoginHandler} />
      <Button title={"회원가입"} onPress={moveSignUpHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
