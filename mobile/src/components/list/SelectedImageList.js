import { StyleSheet, Text, View } from "react-native";

const SelectedImageList = ({ selectedImages }) => {
  console.log("selected image list", selectedImages);
  return (
    <>
      <Text style={styles.text}>파일</Text>
      <View style={styles.container}>
        {selectedImages.map((el) => {
          console.log(el);
          const filename = el.uri.split("/").pop();
          console.log(filename);
          return (
            <Text
              key={el.assetId}
              style={{ fontSize: 12, marginTop: 10, marginLeft: 10 }}
            >
              {el ? filename : ""}
            </Text>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 16,
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default SelectedImageList;
