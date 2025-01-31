import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

type ChartConfig = {
  backgroundColor: string;
  backgroundGradientFrom: string;
  backgroundGradientTo: string;
  decimalPlaces?: number;
  color: (opacity: number) => string;
  labelColor?: (opacity: number) => string;
  barPercentage?: number;
};

const SpendingDetails: React.FC = () => {
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["Groceries", "Leisure", "Misc.", "Hobbies"],
    datasets: [
      {
        data: [72, 15, 12, 3], // TODO: adjust with actual data
        colors: [
          () => "#FF928A",
          () => "#8A9FE3",
          () => "#6CBC94",
          () => "#FFDA8A",
        ],
      },
    ],
  };

  // Chart configuration
  const chartConfig: ChartConfig = {
    backgroundColor: "transparent",
    backgroundGradientFrom: "white",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `transparent`,
    labelColor: (opacity = 1) => `black`,
    barPercentage: 0.8, // bar width
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Spending Details</Text>
        {/* TODO: add actual dropdown and change the data based on selected time margin */}
        <Text style={styles.dropdown}>Last week ▾</Text>
      </View>
      <View style={styles.container}>
        <BarChart
          data={data}
          width={screenWidth * 0.75}
          height={220}
          yAxisLabel=""
          yAxisSuffix="%"
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          fromZero={true}
          withCustomBarColorFromData={true}
          flatColor={true}
          style={styles.chart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#eee",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  dropdown: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  chart: {
    marginLeft: -10,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
  },
});

export default SpendingDetails;
