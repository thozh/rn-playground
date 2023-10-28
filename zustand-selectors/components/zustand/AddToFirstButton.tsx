import React from "react";
import { Pressable } from "react-native";
import { useStore } from "../../libs/useStore";
import { Text } from "../Themed";

export const AddToFirstButton = React.memo(() => {
  const addToFirst = useStore((state) => state.addToFirst);

  return (
    <Pressable onPress={addToFirst}>
      <Text>Add To First</Text>
    </Pressable>
  );
});
