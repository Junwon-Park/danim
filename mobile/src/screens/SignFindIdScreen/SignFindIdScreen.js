import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import LoginScreen from "../SignInScreen/LoginScreen";

const SignUpScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "다님",
      contentStyle: {
        marginHorizontal: 18,
        backgroundColor: "white",
      },
    });
  }, [navigation]);
  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    /** 로그인 */
    const moveSignFindHandler = () => {
      navigation.navigate("SignFindIdScreen");
    };
  
  
  return (
    <View style={styles.root}>
      <CustomInput
        placeholder="이메일을 입력하세요."
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="비밀번호를 입력하세요."
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton
        text="로그인"
        onPress={LoginScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignUpScreen;
