import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

// Components
import DefaultInput from "../../components/inputs/DefaultInput";
import TinyButton from "../../components/customButtons/TinyButton";
import DefaultButton from "../../components/customButtons/DefaultButton";

const defaultInputConfig = {
  maxLength: 300,
  placeholder: "내용을 입력하세요.",
  multiline: true,
  textAlignVertical: "top",
};

const imageButtonHandler = () => {
  console.log("Image Button!!!");
};

const WriteReviewScreen = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "리뷰 쓰기",
      contentStyle: {
        marginHorizontal: 18,
        backgroundColor: "white",
      },
    });
  }, [navigation]);
  const uploadReviewHandler = () => {
    console.log("Upload Review");
  };
  return (
    <>
      <View style={styles.buttonContainer}>
        <TinyButton onPress={imageButtonHandler} />
      </View>
      <View style={styles.writeReviewContainer}>
        <DefaultInput
          label={"내용"}
          defaultInputConfig={{ ...defaultInputConfig }}
        />
        <DefaultButton title={"리뷰 등록하기"} onPress={uploadReviewHandler} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  writeReviewContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "flex-end",
  },
});

export default WriteReviewScreen;
