import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { DoNothingButton } from "../../components/zustand/DoNothingButton";
import { AddToFirstButton } from "../../components/zustand/AddToFirstButton";
import { FirstValue } from "../../components/zustand/FirstValue";
import { AddToSecondButton } from "../../components/zustand/AddToSecondButton";
import { SecondValue } from "../../components/zustand/SecondValue";
import { NumbersValue } from "../../components/zustand/NumbersValue";

export default function ZustandScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Zustand</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <DoNothingButton />
      <AddToFirstButton />
      <FirstValue />
      <AddToSecondButton />
      <SecondValue />
      <NumbersValue />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
