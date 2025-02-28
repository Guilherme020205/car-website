import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { api } from "../../services/api";

export default function Location() {
  const [location, setLocation] = useState<{ locationName: string } | null>(
    null
  );
  const [newLocation, setNewLocation] = useState("");

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await api.get("/location");
        // console.log(response.data[0].locationName)
        if (response.data && response.data.length > 0) {
          setLocation(response.data[0]);
        }
        // console.log(location);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLocation();
  }, []);

  async function postLocation() {
    try {
      const response = await api.post("/location", {
        locationName: newLocation, // Enviar o nome da localização
      });
  
      setLocation(response.data); // Atualiza o estado para exibir a nova localização
      setNewLocation(""); // Limpa o campo de input após o envio
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <View style={styles.container}>
        <TextInput
        placeholder="Digite o link da sua localização"
        style={styles.input}
        value={newLocation}
        onChangeText={setNewLocation}
      />
      <TouchableOpacity style={styles.button} onPress={postLocation}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {location ? (
        <Text
          style={styles.textLocation}
          onPress={() => Linking.openURL(location?.locationName)}
        >
          Abrir o link da Localização
        </Text>
      ) : (
        <Text style={styles.textLocation}>
          Nenhum link de localização cadastrado
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textLocation: {
    marginTop: 50,
    color: "blue"
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 10,
    backgroundColor: "#DFE4E4",
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: "#3fffa3",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#101026",
  },
});
