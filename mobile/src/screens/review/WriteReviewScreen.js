import { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Alert, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

// Components
import DefaultInput from "../../components/inputs/DefaultInput";
import TinyButton from "../../components/customButtons/TinyButton";
import DefaultButton from "../../components/customButtons/DefaultButton";
import SelectedImageList from "../../components/list/SelectedImageList";

const defaultInputConfig = {
  maxLength: 300,
  placeholder: "내용을 입력하세요.",
  multiline: true,
  textAlignVertical: "top",
};

const WriteReviewScreen = ({ route, navigation }) => {
  // State
  const [selectedImages, setSelectedImages] = useState([]);
  // const image = require("../../../assets/designImages/react-native.png");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "리뷰 쓰기",
      contentStyle: {
        marginHorizontal: 18,
        backgroundColor: "white",
      },
    });
  }, [navigation]);

  useEffect(() => {
    if (selectedImages.length > 3) {
      Alert.alert("사진은 최대 3장 까지만 등록할 수 있습니다.");
      setSelectedImages([]);
    }
  }, [selectedImages]);

  const imageButtonHandler = async () => {
    const permissionResult = ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const cameraImage = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    }).catch((err) => console.error(err));
    console.log("Camera!!!", cameraImage);
  };

  const takeImageHandler = async () => {
    const libraryImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    setSelectedImages(
      Array.isArray(libraryImage.selected)
        ? libraryImage.selected
        : [libraryImage]
    );
  };

  const uploadReviewHandler = () => {
    // 선택한 Image와 Text 모두 Server의 Review API로 전송
    console.log("Upload Review");
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formdata = new FormData();
    formdata.append("image", selectedImages[0].uri);
    formdata.append("image", selectedImages[1].uri);
    formdata.append("user_id", 1);
    formdata.append("description", "React Native");
    const restApi = "http://10.0.2.2:8080/review/createReview";
    axios
      .post(restApi, formdata, { headers: headers })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        <TinyButton type={"camera"} onPress={imageButtonHandler} />
        <TinyButton type={"gallery"} onPress={takeImageHandler} />
      </View>
      <SelectedImageList selectedImages={selectedImages} />
      <DefaultInput
        label={"내용"}
        defaultInputConfig={{ ...defaultInputConfig }}
      />
      <DefaultButton title={"리뷰 등록하기"} onPress={uploadReviewHandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default WriteReviewScreen;
