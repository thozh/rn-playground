import { Text } from "../Themed";
import { useStore } from "../useStore";

export const SecondValue = () => {
  const secondNumber = useStore((state) => state.secondNumber);
  return <Text style={{ padding: 8 }}>Second value: {secondNumber}</Text>;
};
