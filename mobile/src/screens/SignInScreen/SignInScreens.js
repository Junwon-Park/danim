import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const SignInScreen = () =>{
    return(
        <View>
            <View>
                <Text style={styles.logo}>Logo</Text>
            </View>
            <TextInput placeholder="아이디를 입력하세요" />
            <TextInput placeholder="비밀번호를 입력하세요" />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width : '70%',
        height : 100,
    },
});

export default SignInScreen