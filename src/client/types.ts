import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  ResetPassword: undefined;
  Register:
    | {
        email: string;
      }
    | undefined;
  Onboarding:
    | {
        email: string;
      }
    | undefined;
  Overview:
    | {
        name: string;
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
