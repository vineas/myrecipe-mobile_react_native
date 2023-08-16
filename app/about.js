import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


const about = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Kumlala</Text>
        <Text style={styles.subtitle}>Wadaw.</Text>
        <Link href="/">
          <Text>Go to home</Text>
        </Link>
      </View>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});