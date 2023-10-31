import { Text } from "../Themed";
import { useStore } from "../../libs/useStore";
import React from "react";

export const FirstValue = React.memo(() => {
  const { firstNumber } = useStore();

  return <Text style={{ padding: 8 }}>First value: {firstNumber}</Text>;
});
