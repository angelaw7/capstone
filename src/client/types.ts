import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  BudgetBoxDetails: undefined;
  Login: undefined;
  ResetPassword: undefined;
  Register:
    | {
        name?: string;
        email?: string;
      }
    | undefined;
  Onboarding:
    | {
        name?: string;
        email?: string;
      }
    | undefined;
  Manage:
    | {
        name?: string;
        email?: string;
        /* Some other types later when we plan to pass from onboarding to overview */
      }
    | undefined;
  Profile: undefined;
  Main: undefined;
  MyIncome: undefined;
  NewIncome: undefined;
  MyExpenses: undefined;
  NewExpense: undefined;
  MyBudget: undefined;
  NewBudget: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type RouteProps = RouteProp<RootStackParamList>;
