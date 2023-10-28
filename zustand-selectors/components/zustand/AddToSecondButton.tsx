import React from "react";
import { Pressable } from "react-native";
import { useStore } from "../../libs/useStore";
import { Text } from "../Themed";

export const AddToSecondButton = React.memo(() => {
  const addToSecond = useStore((state) => state.addToSecond);

  return (
    <Pressable onPress={addToSecond}>
      <Text>Add To Second</Text>
    </Pressable>
  );
});
