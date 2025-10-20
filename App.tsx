import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import { LogBox } from "react-native";

// Suppress the "NONE" read-only property warning from third-party libraries
LogBox.ignoreLogs([
  "Cannot assign to read only property",
  "cannot assign to read only property 'NONE'",
]);

import HomeEventsHubScreen from "./src/screens/HomeEventsHubScreen";
import CustomersScreen from "./src/screens/CustomersScreen";
import POSScreen from "./src/screens/POSScreen";
import AssistantScreen from "./src/screens/AssistantScreen";
import {
  HomeIcon,
  CustomersIcon,
  POSIcon,
  AssistantIcon,
  tabBarOptions,
} from "./src/components/BottomTabBar";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  // enable native screens for better performance and ensure native modules are initialized
  enableScreens();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              ...tabBarOptions,
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeEventsHubScreen}
              options={{
                tabBarIcon: HomeIcon,
              }}
            />
            <Tab.Screen
              name="Customers"
              component={CustomersScreen}
              options={{
                tabBarIcon: CustomersIcon,
              }}
            />
            <Tab.Screen
              name="POS"
              component={POSScreen}
              options={{
                tabBarIcon: POSIcon,
              }}
            />
            <Tab.Screen
              name="Assistant"
              component={AssistantScreen}
              options={{
                tabBarIcon: AssistantIcon,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
        <Toast />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
