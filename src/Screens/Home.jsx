import { View, StyleSheet, Pressable, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

// import PostsScreen from "./PostsScreen";
// import CreatePostsScreen from "./CreatePostsScreen";
// import ProfileScreen from "./ProfileScreen";
// import LogOutIcon from "../components/LogOutIcon";
// import UserIcon from "../components/UserIcon";
// import GridIcon from "../components/GridIcon";
// import { NewPostsButton } from "../components/NewPostsButton";

import Ionicons from "@expo/vector-icons/Ionicons";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import PostsScreen from "./PostsScreen";
import logOutImg from "../../assets/images/log-out.png";

const Tab = createBottomTabNavigator();

export default Home = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="PostScreen"
      backBehavior="order"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === "PostsScreen") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (routeName === "CreatePostsScreen") {
            iconName = focused ? "add" : "add-outline";
          } else if (routeName === "ProfileScreen") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarItemStyle: {
          width: 70,
          height: 40,
          borderRadius: 20,
          marginLeft: "auto",
          marginRight: "auto",
        },
        tabBarStyle: {
          height: 83,
          paddingLeft: 10,
          paddingRight: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },

        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveTintColor: "#808080",
      })}
    >
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerStyle: {
            height: 100,
            backgroundColor: "#fff",
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: 0.41,
          },

          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Image source={logOutImg} style={styles.LogOutIcon} />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePostScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerStyle: {
            height: 100,
            backgroundColor: "#fff",
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: 0.41,
          },

          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate("PostsScreen")}
              style={styles.ArrowBack}
            >
              <Ionicons name="arrow-back" size={24} color={"#212121"} />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  LogOutIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },

  ArrowBack: {
    paddingLeft: 16,
  },
});
// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Tabs.Navigator screenOptions={styles.headerStyles}>
//         <Tabs.Screen
//           name="PostsScreen"
//           component={PostsScreen}
//           options={{
//             headerRight: LogOutIcon,
//             tabBarButton: GridIcon,
//             title: "Публікації",
//           }}
//         />
//         <Tabs.Screen
//           name="CreatePostsScreen"
//           component={CreatePostsScreen}
//           options={{
//             tabBarButton: NewPostsButton,
//             title: "Створити публікацію",
//           }}
//         />
//         <Tabs.Screen
//           name="ProfileScreen"
//           component={ProfileScreen}
//           options={{
//             tabBarButton: UserIcon,
//             title: "Профіль",
//           }}
//         />
//       </Tabs.Navigator>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "white",
//   },
//   // свой общий объект стилей для хедера( а именно для контейнера навигации)
//   headerStyles: {
//     tabBarShowLabel: false,
//     tabBarStyle: {
//       paddingTop: 9,
//       display: "flex",
//       alignItems: "center",
//     },
//     // паддинги в хедере
//     headerRightContainerStyle: { paddingRight: 16 },
//     headerLeftContainerStyle: { paddingLeft: 16 },
//     // стилизация теста в хедере
//     headerTitleStyle: {
//       textAlign: "center",
//       fontFamily: "Roboto",
//       fontSize: 17,
//       fontWeight: 500,
//       lineHeight: 22,
//       letterSpacing: 0.408,
//     },
//     // цвет текста в хедере
//     headerTintColor: "rgba(33, 33, 33, 1)",
//     headerStyle: {
//       // стилизация тени
//       backgroundColor: "#FFFFFF",
//       height: 100,
//       shadowOffset: {
//         width: 0,
//         height: 0.5,
//       },
//       shadowColor: "#212121CC",
//       shadowOpacity: 0.3,
//       shadowRadius: 1.84,
//       elevation: 0,
//     },
//   },
// });
