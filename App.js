import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddEditTaskScreen from "./screens/AddEditTaskScreen";
import TaskDetailsScreen from "./screens/TaskDetailsScreen";
import WelcomeScreen from "./screens/WelcomeScreen"; // Import WelcomeScreen

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }} // Hide header for Welcome Screen
        />
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} tasks={tasks} setTasks={setTasks} />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddEditTask">
          {(props) => (
            <AddEditTaskScreen {...props} tasks={tasks} setTasks={setTasks} />
          )}
        </Stack.Screen>
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
