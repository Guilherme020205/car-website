import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/AuthContext";
import Icon from "react-native-vector-icons/AntDesign";

import ButtonPage from "./components/buttonPage";

export default function Dashboard() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerSignOut}>
        <TouchableOpacity onPress={handleSignOut} style={styles.ButtonSignOut}>
          <Icon name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerOptions}>
        <ButtonPage name="Logo" buttonText="Logo" />
        <ButtonPage name="Banner" buttonText="Banner" />
        <ButtonPage name="Localização" buttonText="Location" />
        <ButtonPage name="Contatos" buttonText="Contatos" />
        <ButtonPage name="Redes" buttonText="Redes" />
        <ButtonPage name="Veiculos" buttonText="Veiculos" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containerSignOut: {
    flex: 1,
    marginTop: 50,
    marginLeft: "80%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  ButtonSignOut: {
    backgroundColor: "#000000",
    borderRadius: 100,
    padding: 10,
  },
  containerOptions: {
    flex: 10,
    // marginTop: 80,
    marginHorizontal: 10,
    justifyContent: "center",
    flexDirection: "column",
    // flexWrap: "wrap",
    gap: 10,
  },
});
