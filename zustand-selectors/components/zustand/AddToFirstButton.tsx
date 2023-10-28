import { Pressable } from "react-native";
import { Text } from "../Themed";
import { useStore } from "../useStore";

export const AddToFirstButton = () => {
  const addToFirst = useStore((state) => state.addToFirst);
  return (
    <Pressable onPress={addToFirst}>
      <Text>Add To First</Text>
    </Pressable>
  );
};
