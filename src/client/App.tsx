import {
  NavigationContainer,
  useNavigationState,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MyIncome from "./components/view/MyIncome";
import MyExpenses from "./components/view/MyExpenses";
import MyBudget from "./components/view/MyBudget";
import NewBudgetPage from "./components/view/NewBudgetPage";
import NewIncomePage from "./components/view/NewIncomePage";
import LoginView from "./components/view/LoginView";
import RegisterView from "./components/view/RegisterView";
import ResetPasswordView from "./components/view/ResetPasswordView";
import ManagePage from "./components/view/ManagePage";
import AddExpenseView from "./components/view/AddExpenseView";
import OnboardingView from "./components/view/OnboardingView";
// import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { View, StyleSheet } from "react-native";
import StatsChartOutlineIcon from "./assets/icons/StatsChartOutlineIcon";
import AddIcon from "./assets/icons/AddIcon";

const Stack = createStackNavigator();

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </TamaguiProvider>
  );
}

function MainApp() {
  const routeName = useNavigationState(
    (state) => state?.routes[state?.index]?.name || "unknown",
  );

  const noPaddingScreens = ["Manage"];

  return (
    <View
      style={[
        styles.app,
        noPaddingScreens.includes(routeName) ? styles.noPadding : null,
      ]}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordView} />
        <Stack.Screen name="Register" component={RegisterView} />
        <Stack.Screen name="Onboarding" component={OnboardingView} />
        <Stack.Screen name="Manage" component={ManagePage} />
        <Stack.Screen name="MyIncome" component={MyIncome} />
        <Stack.Screen name="NewIncome" component={NewIncomePage} />
        <Stack.Screen name="MyExpenses" component={MyExpenses} />
        <Stack.Screen name="NewExpense" component={AddExpenseView} />
        <Stack.Screen name="MyBudget" component={MyBudget} />
        <Stack.Screen name="NewBudget" component={NewBudgetPage} />
      </Stack.Navigator>
      <View style={styles.bottomNav}>
        <StatsChartOutlineIcon size={32} />
        <AddIcon size={32} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: "15%",
    backgroundColor: "white",
  },
  noPadding: {
    paddingTop: 0,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    marginBottom: 20,
    height: 80,
  },
});
