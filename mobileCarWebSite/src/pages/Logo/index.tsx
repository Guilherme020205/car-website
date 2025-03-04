import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useImageUpload } from "../functions/useImageUpload";
import { api } from "../../services/api";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function LogoScreen() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const { selectedImage, pickImage, uploadImage, isUploading } =
    useImageUpload();

  useEffect(() => {
    async function fetchLogo() {
      try {
        const response = await api.get("/logo");
        setLogoUrl(response.data.linck);
      } catch (error) {
        console.error("Erro ao buscar logo:", error);
      }
    }
    fetchLogo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerPostFile}>
        <TouchableOpacity onPress={pickImage} style={styles.buttonFile}>
          {selectedImage ? (
            <ImageBackground
              source={{ uri: selectedImage }}
              style={styles.buttonFile}
            > 
            </ImageBackground>
          ) : (
            <TouchableOpacity onPress={pickImage} style={styles.buttonFile}>
              <Icon name="upload" size={50} color="black" />;
            </TouchableOpacity>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => uploadImage("logo")}
          disabled={isUploading}
          style={styles.button}
        >
          {isUploading ? <ActivityIndicator /> : <Text>Enviar</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
    gap: 50,
  },
  containerPostFile: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonFile: {
    width: 300,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#3fffa3",
    overflow: "hidden", // Evita que a imagem ultrapasse os limites
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: "#3fffa3",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
