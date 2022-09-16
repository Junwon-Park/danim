import { View, StyleSheet, Text } from 'react-native';
import {MEALS} from '../data/dummy-data';

/** 이 페이지 활용해서 메인 이미지를 입/출력해야 함. */
const MealsOverviewScreen = ({route}) => {
  const catId = route.params.categoryId;

  return(
    <View style={styles.container}>
      <Text>안녕하세요 스크린테스트 {catId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 16,
  }
})

export default MealsOverviewScreen;