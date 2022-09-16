import { StyleSheet, Pressable, View, Text, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

const CategoryGridTile = ({title, color, onPress}) =>{
  // const navigation = useNavigation();

  return(
      <View style={ [styles.gridItem, {backgroundColor: color}]}>
        <Pressable android_ripple={{color:'#ccc'}}
        style={({pressed})=>[
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
          onPress={onPress}
        >
          <View style={styles.innerContainer}>
            <Text st>{title}</Text>
          </View>
        </Pressable>
      </View>
  );
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem:{
    flex: 1,
    margin: 50,
    height: 150,
    borderRadius: 8,
    elevation:  6,
    backgroundColor:'white',
    shadowColor : 'gray',
    shadowOpacity: 0.1,
    shadowOffset:{width:0, height:2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  button:{
    flex:1
  },
  buttonPressed:{
    opacity: 0.5,
  },

  innerContainer:{
    flex:1,
    padding: 16,
    justifyContent:"center",
    alignItems: "center"
  },
  title: {
    fontWeight : 'bold',
    fontSize: 18
  }
});