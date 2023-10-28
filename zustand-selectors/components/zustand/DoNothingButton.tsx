import { Pressable } from "react-native";
import { Text } from "../Themed";
import { useStore } from "../useStore";

export const DoNothingButton = () => {
  const doNothing = useStore((state) => state.doNothing);
  return (
    <Pressable onPress={doNothing}>
      <Text>Do Nothing</Text>
    </Pressable>
  );
};
