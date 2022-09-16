import {FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen =({navigation})=>{
  
  const renderCategoryItme = (itemData)=>{
    const pressHandler = () => {
      navigation.navigate('Overview', {
        categoryId: itemData.item.id,
      });
    }

    
    return(
      <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) =>item.id}
      renderItem={renderCategoryItme}
      /** 화면에 보여주는 개수이다. 즉, 1개만 있음 됨 */
      numColumns={1}
      />
  );
}

export default CategoriesScreen;

