import {
  NavigationContainer,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { View, StyleSheet } from "react-native";
import AddIcon from "./assets/icons/AddIcon";
import HomeIcon from "./assets/icons/HomeIcon";
import ProfileIcon from "./assets/icons/ProfileIcon";
import HomePage from "./components/view/HomePage";
import { useEffect, useState } from "react";
import ProfilePage from "./components/view/ProfilePage";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack to manage pages that are navigatable from the Manage page (expenses, income, budget)
const ManageStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Manage" component={ManagePage} />
      <Stack.Screen name="MyIncome" component={MyIncome} />
      <Stack.Screen name="MyExpenses" component={MyExpenses} />
      <Stack.Screen name="MyBudget" component={MyBudget} />
      <Stack.Screen name="NewIncome" component={NewIncomePage} />
      <Stack.Screen name="NewBudget" component={NewBudgetPage} />
      <Stack.Screen name="NewExpense" component={AddExpenseView} />
    </Stack.Navigator>
  );
};

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bottomNav,
        tabBarActiveTintColor: "#9E599A",
        tabBarInactiveTintColor: "#9F9F9F",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage} // TODO: Replace with Home Page when implemented
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Manage"
        component={ManageStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AddIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </TamaguiProvider>
  );
}

const MainApp = () => {
  return (
    <View style={styles.app}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Authentication Screens */}
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordView} />
        <Stack.Screen name="Register" component={RegisterView} />
        <Stack.Screen name="Onboarding" component={OnboardingView} />

        {/* Main App */}
        <Stack.Screen name="Main" component={Navbar} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "white",
  },
  bottomNav: {
    paddingTop: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    height: 80,
  },
});
