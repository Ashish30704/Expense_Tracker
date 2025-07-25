import { Stack } from "expo-router/stack";
import React from "react";
import "./global.css"; // Import global styles

export default function RootLayout() {
  return(

    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  ) 
}
