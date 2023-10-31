import { Text } from "../Themed";
import { useStore } from "../../libs/useStore";
import React from "react";

export const SecondValue = React.memo(() => {
  const secondNumber = useStore((state) => state.secondNumber);

  return <Text style={{ padding: 8 }}>Second value: {secondNumber}</Text>;
});
