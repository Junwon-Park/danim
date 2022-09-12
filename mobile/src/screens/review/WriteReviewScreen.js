import { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Alert, ScrollView, Image } from "react-native";
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

  const uploadReviewHandler = async () => {
    console.log("Upload Review");
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formdata = new FormData();
    const data = { uri: "", name: "", type: "" };
    selectedImages.forEach((element) => {
      (data.uri = element.uri),
        (data.name = element.uri.split("/").pop()),
        (data.type = "image/jpeg"),
        formdata.append("image", data);
    });
    formdata.append("user_id", 1);
    formdata.append("description", "React Native");

    const restApi = "http://10.0.2.2:8080/review/createReview";

    const result = await axios
      .post(restApi, formdata, {
        headers,
        transformRequest: (formData) => formData,
      })
      .catch((err) => console.error(err));
    console.log(result.data.data); // DB Data Response
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
