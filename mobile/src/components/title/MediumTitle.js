import { StyleSheet, Text, View } from "react-native";

const MediumTitle = ({ children, style }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={[styles.titleText, style]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold",
  },
  textContainer: {
    marginVertical: 8,
  },
});

export default MediumTitle;
