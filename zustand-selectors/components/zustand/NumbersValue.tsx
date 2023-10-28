import { shallow } from "zustand/shallow";
import { Text } from "../Themed";
import { useStore } from "../useStore";

export const NumbersValue = () => {
  const numbers = useStore((state) => state.numbers, shallow);
  return <Text style={{ padding: 8 }}>Numbers: {numbers.join(", ")}</Text>;
};
