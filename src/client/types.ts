import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
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
  Overview:
    | {
        name?: string;
        email?: string;
        /* Some other types later when we plan to pass from onboarding to overview */
      }
    | undefined;
  MyIncome: undefined;
  NewIncome: undefined;
  MyExpenses: undefined;
  NewExpense: undefined;
  MyBudget: undefined;
  NewBudget: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type RouteProps = RouteProp<RootStackParamList>;
