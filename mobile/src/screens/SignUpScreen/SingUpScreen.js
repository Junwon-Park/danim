import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton'

const SingUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [userage, setUserage] = useState('');
  const [usergender, setUsergender] = useState('');


  return (
    <View style={styles.root}>

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

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SingUpScreen;