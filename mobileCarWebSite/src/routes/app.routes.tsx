import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";
import Logo from "../pages/Logo";
import Banner from "../pages/Banner";
import Location from "../pages/Location";
import Contatos from "../pages/Contatos";
import Redes from "../pages/Redes";
import Veiculos from "../pages/Veiculos";

type RootStackParamList = {
  Dashboard: undefined;
  Logo: undefined;
  Banner: undefined;
  Location: undefined;
  Contatos: undefined;
  Redes: undefined;
  Veiculos: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>(); // ⬅ Tipando as rotas

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Logo" component={Logo} />
      <Stack.Screen name="Banner" component={Banner} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Contatos" component={Contatos} />
      <Stack.Screen name="Redes" component={Redes} />
      <Stack.Screen name="Veiculos" component={Veiculos} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
