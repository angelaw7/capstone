import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginView from "./components/view/LoginView";
import OverView from "./components/view/OverView";
import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";

const Stack = createStackNavigator();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
  //   InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  // });

  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen name="Overview" component={OverView} />
        </Stack.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
