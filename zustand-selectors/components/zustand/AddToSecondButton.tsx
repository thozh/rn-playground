import { Pressable } from "react-native";
import { Text } from "../Themed";
import { useStore } from "../useStore";

export const AddToSecondButton = () => {
  const addToSecond = useStore((state) => state.addToSecond);
  return (
    <Pressable onPress={addToSecond}>
      <Text>Add To Second</Text>
    </Pressable>
  );
};
