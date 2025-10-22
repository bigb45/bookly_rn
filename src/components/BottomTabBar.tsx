import React from "react";
import { View, Platform } from "react-native";
import { House, Users, CreditCard, Robot } from "phosphor-react-native";
import { useTheme } from "../theme/useTheme";

interface TabBarIconProps {
  color: string;
  focused: boolean;
  size: number;
}

export const HomeIcon = ({ color, focused }: TabBarIconProps) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: focused ? "rgba(25, 118, 255, 0.12)" : "transparent",
        borderRadius: 12,
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <House
        size={24}
        color={focused ? theme.colors.primary : color}
        weight="regular"
      />
    </View>
  );
};

export const CustomersIcon = ({ color, focused }: TabBarIconProps) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: focused ? "rgba(25, 118, 255, 0.12)" : "transparent",
        borderRadius: 12,
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Users
        size={24}
        color={focused ? theme.colors.primary : color}
        weight="regular"
      />
    </View>
  );
};

export const POSIcon = ({ color, focused }: TabBarIconProps) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: focused ? "rgba(25, 118, 255, 0.12)" : "transparent",
        borderRadius: 12,
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CreditCard
        size={24}
        color={focused ? theme.colors.primary : color}
        weight="regular"
      />
    </View>
  );
};

export const AssistantIcon = ({ color, focused }: TabBarIconProps) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: focused ? "rgba(25, 118, 255, 0.12)" : "transparent",
        borderRadius: 12,
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Robot
        size={24}
        color={focused ? theme.colors.primary : color}
        weight="regular"
      />
    </View>
  );
};

export const tabBarOptions = {
  tabBarActiveTintColor: "#1976FF",
  tabBarInactiveTintColor: "#999",
  tabBarStyle: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
    paddingBottom: Platform.OS === "android" ? 12 : 8,
    height: Platform.OS === "android" ? 75 : 85,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "600" as const,
    marginTop: 4,
  },
  tabBarIconStyle: {
    marginTop: 0,
  },
};
