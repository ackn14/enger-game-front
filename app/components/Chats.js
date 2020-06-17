import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "../Screens/ChatScreen";
import MessagesScreen from "../Screens/MessagesScreen";

const Stack = createStackNavigator();

export default Chats = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Message" component={MessagesScreen} />
    </Stack.Navigator>
  );
};