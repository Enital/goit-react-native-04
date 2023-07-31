import { StyleSheet, View, Text } from "react-native";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Інформація про профіль</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});
