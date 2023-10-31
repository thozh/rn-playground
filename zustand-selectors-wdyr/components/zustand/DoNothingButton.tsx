import { Pressable } from "react-native";
import { Text } from "../Themed";
import { useStore } from "../../libs/useStore";
import React from "react";

export const DoNothingButton = React.memo(() => {
  const doNothing = useStore((state) => state.doNothing);

  return (
    <Pressable onPress={doNothing}>
      <Text>Do Nothing</Text>
    </Pressable>
  );
});
