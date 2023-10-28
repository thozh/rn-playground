import { Text } from "../Themed";
import { useStore } from "../useStore";

export const FirstValue = () => {
  const { firstNumber } = useStore();
  return <Text style={{ padding: 8 }}>First value: {firstNumber}</Text>;
};
