import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList} from "../../../routes/app.routes"
 

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

type ButtonPageProps = {
  name: keyof RootStackParamList; // O nome da tela precisa estar na lista de rotas
  buttonText: string; // Texto do botão
};

export default function ButtonPage({ name, buttonText }: ButtonPageProps) {
  const navigation = useNavigation<NavigationProps>();

  function handleNavigate() {
    navigation.navigate(name); 
  }

  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.navigateButton}>
      <Text style={styles.navigateButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navigateButton: {
    width: 300,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#3fffa3",
    padding: 10,
    borderRadius: 5,
  },
  navigateButtonText: {
    color: "#000",
    fontSize: 15,
  },
});
