import React, { useEffect, useState } from "react";
import { Text, View, Alert, StyleSheet } from "react-native";

//API request
import axios from "axios";

/** https://bocoder.tistory.com/19 정보 확인하고 조정하기.
 *  https://ohrora-developer.tistory.com/12 참조
 *  https://laugh4mile.tistory.com/134 참조
 *  https://velog.io/@minbrother/React-Native-9.-%EB%82%A0%EC%94%A8-API-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
*/
const weatherScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState('');
  const [temp, setTemp] = useState('');
  const [error, setError] = useState(false);

  /** 개인별 발급한 key */ 
  const API_KEY = "";
  const latitude = 38;
  const longitude = 128;

  const getWeather = async (latitude, longitude) => {
    try {
      const resWeather = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

      let _main = resWeather.data.weather[0].main;
      let _temp = resWeather.data.main.temp;

      setCurrentWeather(_main);
      setTemp(_temp);

    } catch (error) {
      Alert.alert("날씨 정보를 읽어올 수 없습니다.")
      setError(true);

    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWeather(latitude, longitude);
  }, []);

  return (
    <View>
      <Header title='날씨' />
      {isLoading || error
        ? (<Text> Waiting.. </Text>)
        : (
          <>
            <Text> WEATHER is {currentWeather}</Text>
            <Text> TEMP is {Math.round(temp)} </Text>
          </>
        )
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default weatherScreen;