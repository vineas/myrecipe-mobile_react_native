import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MainContainer from "../navigation/MainContainer";
import Login from "./login";
import Main from "./main";
import { createStackNavigator } from "@react-navigation/stack";

export default function Page() {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <Login />
      {/* <Main/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
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
