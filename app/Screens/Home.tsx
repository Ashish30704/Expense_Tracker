import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const USERs = [
    {
      name: "ashu",
      age: "21",
    },
    {
      name: "ashu",
      age: "21",
    },
    {
      name: "ashu",
      age: "21",
    },
    {
      name: "ashu",
      age: "21",
    },
    {
      name: "ashu",
      age: "21",
    },
    {
      name: "ashu",
      age: "21",
    },
    {
      name: "ashu",
      age: "21",
    },
    {
      name: "ashu",
      age: "21",
    },
    {
      name: "ashu",
      age: "21",
    },
    {
      name: "ashu",
      age: "21",
    },
  ];

  return (
    <View style={{ gap: 15 }} className="bg-gray-800 p-2 flex-1">
      <View className="justify-between flex-row">
        <Ionicons
        //   name="arrow-back"
          size={20}
          color="white"
          className="self-center mt-2"
        />
        <Text className="text-gray-100 text-xl self-center font-medium">
          Home
        </Text>
        <View></View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerClassName="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 "
        className=" ring-gray-200 ring-2 p-2 "
      >
        {USERs.map((user, index) => (
          <View
            key={index}
            className="bg-gray-700 py-6 px-4 rounded-lg mb-2 flex-1 w-full"
          >
            <Text className="text-gray-100">Name: {user.name}</Text>
            <Text className="text-gray-100">Age: {user.age}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
