import { StyleSheet, Text, View } from "react-native";

const OnboardingView = () => {
  return (
    <View style={styles.onboardingBox}>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Please Enter Your Information</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingBox: {
    height: "100%",
    backgroundColor: "white",
  },
  headerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
    margin: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default OnboardingView;
