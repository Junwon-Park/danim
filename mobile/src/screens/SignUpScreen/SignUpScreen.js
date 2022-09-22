import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

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
  const [repassword, setRePassword] = useState("");
  const [userage, setUserage] = useState("");
  const [usergender, setUsergender] = useState("");

    /** 로그인 */
    const moveLoginHandler = () => {
      navigation.navigate("SignUpScreen");
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
      <CustomInput
        placeholder="재확인 비밀번호를 입력하세요."
        value={repassword}
        setValue={setRePassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="나이를 입력하세요."
        value={userage}
        setValue={setUserage}
      />
      <CustomInput
        placeholder="성별을 입력하세요."
        value={usergender}
        setValue={setUsergender}
      />
      <CustomButton
        text="가입하기"
        onPress={moveLoginHandler}
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
