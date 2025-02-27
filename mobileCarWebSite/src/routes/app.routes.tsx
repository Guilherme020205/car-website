import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";
import Logo from "../pages/Logo";

type RootStackParamList = {
  Dashboard: undefined;
  Logo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>(); // ⬅ Tipando as rotas

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Logo" component={Logo} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
