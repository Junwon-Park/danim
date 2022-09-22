import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";

// Screens
import AllReviewListScreen from "./src/screens/review/AllReviewListScreen";
import WriteReviewScreen from "./src/screens/review/WriteReviewScreen";
import ReviewDetailScreen from "./src/screens/review/ReviewDetailScreen";
import MainScreen from "./src/screens/MainScreen";
import RecommandedTravelScreen from "./src/screens/travel/RecommandedTravelScreen";
import TravelDetailScreen from "./src/screens/travel/TravelDetailScreen";
import SpecialtyDetailScreen from "./src/screens/specialtyScreen/SpecialtyDetailScreen";

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

const TravelStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontWeight: "bold", fontSize: 28 },
      }}
    >
      <Stack.Screen
        name="mainScreen"
        component={MainScreen}
        options={{
          contentStyle: { backgroundColor: "#ffffff" },
        }}
      />
      <Stack.Screen
        name="recommandedTravelScreen"
        component={RecommandedTravelScreen}
        options={{
          contentStyle: { backgroundColor: "#ffffff" },
        }}
      />
      <Stack.Screen
        name="travelDetailScreen"
        component={TravelDetailScreen}
        options={{
          contentStyle: { backgroundColor: "#ffffff" },
        }}
      />
      <Stack.Screen
        name="specialtyDetailScreen"
        component={SpecialtyDetailScreen}
        options={{
          contentStyle: { backgroundColor: "#ffffff" },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator sceneContainerStyle={{ backgroundColor: "#ffffff" }}>
        <Tab.Screen
          name="Home"
          component={TravelStackNavigator}
          options={{
            headerShown: false,
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
