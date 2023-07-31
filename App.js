import { StyleSheet, ImageBackground, View } from "react-native";
import BcgImage from "./assets/images/bcgi.jpg";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { PostsScreen } from "./src/screens/PostsScreen";
import { Home } from "./src/screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={styles.navContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={BcgImage}
          resizeMode="cover"
          style={styles.bcgImg}
        />
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Posts"
            component={PostsScreen}
            options={{ headerShown: false }}
          />
        </MainStack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  bcgImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  navContainer: {
    colors: {
      background: "transparent",
    },
  },
});
