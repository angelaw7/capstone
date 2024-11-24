import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import LoginView from "./components/view/LoginView";
import HomePage from "./components/view/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
