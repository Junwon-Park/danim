// import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";

// Components
import AllReviewListScreen from "./src/screens/review/AllReviewListScreen";
import WriteReviewScreen from "./src/screens/review/WriteReviewScreen";
import ReviewDetailScreen from "./src/screens/review/ReviewDetailScreen";
import MainScreen from "./src/screens/MainScreen";
// import ReviewDetail from "./src/screens/review/ReviewDetail";
// import SignInScreen from "./src/screens/SignInScreen/SignInScreens";

// Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ReviewStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontWeight: "bold", fontSize: 28 },
      }}
    >
      <Stack.Screen
        name="allReviewList"
        component={AllReviewListScreen}
        options={{
          contentStyle: { backgroundColor: "#ffffff" },
        }}
      />
      <Stack.Screen name="writeReview" component={WriteReviewScreen} />
      <Stack.Screen name="reviewDetail" component={ReviewDetailScreen} />
    </Stack.Navigator>
  );
};

/** root component */
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator sceneContainerStyle={{ backgroundColor: "#ffffff" }}>
        <Tab.Screen
          name="Home"
          component={MainScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Reviews"
          component={ReviewStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
