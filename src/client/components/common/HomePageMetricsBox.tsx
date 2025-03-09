import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as ProgressBar from "react-native-progress";
import { MONTHS } from "../../constants";
import { NavigationProps, RouteProps } from "../../types";

type BudgetBoxProps = {
  navigation: NavigationProps;
  route: RouteProps;
};

const HomePageMetricsBox = ({ navigation, route }: BudgetBoxProps) => {
  // TODO: replace values with real data
  const progress = 0.63;
  const currentMonth = MONTHS[new Date().getMonth()];

  const navigateToBudgetDetails = () => {
    navigation.navigate("BudgetBoxDetails");
  };

  return (
    <Pressable onPress={navigateToBudgetDetails}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{`${currentMonth}'s Budget`}</Text>
          <Text style={styles.percentage}>{`${progress * 100}%`}</Text>
        </View>

        <ProgressBar.Bar
          progress={progress}
          width={null}
          color="#9E599A"
          unfilledColor="#ddd"
          borderWidth={0}
          height={10}
          borderRadius={5}
          style={styles.progressBar}
        />

        {/* Budget Details */}
        <View style={styles.details}>
          <View>
            <Text style={styles.label}>Budget:</Text>
            <Text style={styles.value}>$1200</Text>
          </View>
          <View>
            <Text style={styles.label}>Spent:</Text>
            <Text style={styles.value}>
              {/* TODO: replace arrow with corresponding trend */}
              $761.96 <Text style={styles.warning}>▲</Text>{" "}
            </Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#eee",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  percentage: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  progressBar: {
    marginBottom: 15,
  },
  progress: {
    flex: 0.63, // Fill 63% of the bar
    backgroundColor: "#9E599A",
  },
  remaining: {
    flex: 0.37, // Remaining percentage
    backgroundColor: "#eee",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "#555",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  warning: {
    color: "red",
    fontSize: 14,
  },
  arrow: {
    fontSize: 24,
    color: "#ccc",
  },
});

export default HomePageMetricsBox;
