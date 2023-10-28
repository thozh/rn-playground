import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

const viewCount = 5000;
const data = Array.from({ length: viewCount });

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return <View key={index} style={styles.box} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 20,
    height: 20,
    backgroundColor: "#888888",
  },
});
