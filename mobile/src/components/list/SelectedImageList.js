import { StyleSheet, Text, View } from "react-native";

const SelectedImageList = ({ context, selectedImages }) => {
  console.log("selected image list", selectedImages);
  return (
    <>
      <Text style={styles.text}>{context}</Text>
      <View style={styles.container}>
        {selectedImages.map((el) => {
          const filename = el.uri.split("/").pop();
          return (
            <Text
              key={`${el.uri.split("/").pop()}${Math.random() * 94503}`}
              style={styles.selectedFileText}
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
  selectedFileText: { fontSize: 12, marginTop: 10, marginLeft: 10 },
});

export default SelectedImageList;
