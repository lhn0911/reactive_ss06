import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

type Employee = {
  id: string;
  name: string;
};

export default function Bai1() {
  const employees: Employee[] = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Samuel Johnson" },
    { id: "4", name: "Emily Davis" },
    { id: "5", name: "Michael Brown" },
    { id: "6", name: "Sarah Wilson" },
    { id: "7", name: "David Taylor" },
    { id: "8", name: "James Anderson" },
    { id: "9", name: "Mary Thomas" },
    { id: "10", name: "Robert Lee" },
  ];

  const renderItem = ({ item }: { item: Employee }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Employee</Text>
      <FlatList
        data={employees}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  item: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  name: {
    fontSize: 16,
  },
});
