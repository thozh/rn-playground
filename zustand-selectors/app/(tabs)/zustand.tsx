import { Pressable, StyleSheet } from "react-native";
import { shallow } from "zustand/shallow";

import { Text, View } from "../../components/Themed";
import { useStore } from "../../components/useStore";

const DoNothingButton = () => {
  const doNothing = useStore((state) => state.doNothing);
  return (
    <Pressable onPress={doNothing}>
      <Text>Do Nothing</Text>
    </Pressable>
  );
};

const AddToFirstButton = () => {
  const addToFirst = useStore((state) => state.addToFirst);
  return (
    <Pressable onPress={addToFirst}>
      <Text>Add To First</Text>
    </Pressable>
  );
};

const FirstValue = () => {
  const { firstNumber } = useStore();
  return <Text style={{ padding: 8 }}>First value: {firstNumber}</Text>;
};

const AddToSecondButton = () => {
  const addToSecond = useStore((state) => state.addToSecond);
  return (
    <Pressable onPress={addToSecond}>
      <Text>Add To Second</Text>
    </Pressable>
  );
};

const SecondValue = () => {
  const secondNumber = useStore((state) => state.secondNumber);
  return <Text style={{ padding: 8 }}>Second value: {secondNumber}</Text>;
};

const NumbersValue = () => {
  const numbers = useStore((state) => state.numbers, shallow);
  return <Text style={{ padding: 8 }}>Numbers: {numbers.join(", ")}</Text>;
};

export default function TabTwoScreen() {
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
