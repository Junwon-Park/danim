import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

/** root component */
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{margin: 16}} >안녕하세요! 다님을 이용해 주셔서 감사드려요!</Text>
      </View>
      <Button title="로그인"/>
      <Button title="회원가입"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
