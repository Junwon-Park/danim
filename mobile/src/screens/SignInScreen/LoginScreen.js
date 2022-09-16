import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  /** 로그인 */
  const onSignInPressed = () => {
    console.warn("로그인");
  };
  /** 아이디 찾기 */
  const OnForgotIdPressed = () => {
    console.warn("아이디 찾기");
  };
  /** 비밀번호 찾기 */
  const OnForgotPasswordPressed = () => {
    console.log("비밀번호 찾기");
  };

  return (
    <View style={styles.root}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="아이디를 입력하세요."
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="비밀번호를 입력하세요."
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text="로그인" onPress={onSignInPressed} />

      {/** 커스텀 버튼 type으로 조건 넣은 것임 */}
      <CustomButton
        text="아이디 찾기"
        onPress={OnForgotIdPressed}
        type="TERTIARY"
      />

      <CustomButton
        text="비밀번호 찾기"
        onPress={OnForgotPasswordPressed}
        type="TERTIARY"
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

export default LoginScreen;
