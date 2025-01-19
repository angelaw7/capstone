import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MyIncome from "./components/view/MyIncome";
import MyExpenses from "./components/view/MyExpenses";
import MyBudget from "./components/view/MyBudget";
import NewBudgetPage from "./components/view/NewBudgetPage";
import NewIncomePage from "./components/view/NewIncomePage";
import LoginView from "./components/view/LoginView";
import RegisterView from "./components/view/RegisterView";
import ResetPasswordView from "./components/view/ResetPasswordView";
import OverView from "./components/view/OverView";
import AddExpenseView from "./components/view/AddExpenseView";
import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";

const Stack = createStackNavigator();

export default function App() {
  return (
    // const [fontsLoaded] = useFonts({
    //   Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    //   InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    // });
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ResetPassword" component={ResetPasswordView} />
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen name="Register" component={RegisterView} />
          <Stack.Screen name="Overview" component={OverView} />
          <Stack.Screen name="MyIncome" component={MyIncome} />
          <Stack.Screen name="NewIncome" component={NewIncomePage} />
          <Stack.Screen name="MyExpenses" component={MyExpenses} />
          <Stack.Screen name="NewExpense" component={AddExpenseView} />
          <Stack.Screen name="MyBudget" component={MyBudget} />
          <Stack.Screen name="NewBudget" component={NewBudgetPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
