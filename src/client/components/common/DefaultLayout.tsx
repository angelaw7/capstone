import { StyleSheet, View } from "react-native";
interface DefaultLayoutProps {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <View style={styles.container} testID="container">
      <View style={styles.header} testID="header"></View>
      <View style={styles.children} testID="children">
        {children}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    height: "7%",
    backgroundColor: "white",
  },
  children: {
    height: "90%",
  },
});
export default DefaultLayout;
