import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const LoginScreens = ({value, setValue, placeholder}) =>{
	const [userid, setUserid] = useState('');
	const [userpassword, setUsername] = useState('');
	return(
		<View>
			<View>
				<Text style={styles.logo}>Logo</Text>
			</View>
			<TextInput
				value={value}
				onChangeText={setValue}
				placeholder="아이디를 입력하세요" style={styles.idinput} />
			<TextInput placeholder="비밀번호를 입력하세요" />
		</View>
	)
}

const styles = StyleSheet.create({
	logo: {
		width : '70%',
		height : 100,
	},
	idinput :{

	}
});

export default LoginScreens