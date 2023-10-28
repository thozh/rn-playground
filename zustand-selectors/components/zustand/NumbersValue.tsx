import { shallow } from "zustand/shallow";
import { Text } from "../Themed";
import { useStore } from "../../libs/useStore";
import React from "react";

export const NumbersValue = React.memo(() => {
  const numbers = useStore((state) => state.numbers, shallow);

  return <Text style={{ padding: 8 }}>Numbers: {numbers.join(", ")}</Text>;
});
