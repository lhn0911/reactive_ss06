import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type Item = {
  id: string;
  name: string;
};

export default function Bai2() {
  const [data, setData] = useState<Item[]>([]);

  const addData = () => {
    setData([
      { id: "1", name: "HTML, CSS, JavaScript" },
      { id: "2", name: "Python" },
      { id: "3", name: "React.js" },
    ]);
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={addData}>
        <Text style={styles.buttonText}>THÊM DỮ LIỆU</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Không có dữ liệu</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
  },
  text: {
    fontSize: 16,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});
