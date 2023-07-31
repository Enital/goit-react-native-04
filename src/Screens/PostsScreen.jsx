import { StyleSheet, View, Text } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Тут будуть всі Ваші публікації</Text>
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
