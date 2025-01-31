import { StyleSheet, Text, View } from "react-native";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}></View>

      <View style={styles.children}>{children}</View>

      {/* Footer */}
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    height: "10%",
    backgroundColor: "green",
  },
  footer: {
    height: "10%",
    backgroundColor: "pink",
  },
  children: {
    height: "80%",
  },
});
export default DefaultLayout;
