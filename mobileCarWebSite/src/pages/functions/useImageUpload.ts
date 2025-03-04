import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { api } from "../../services/api"; // Importação da API

type UploadType = "logo" | "contacts" | "vehicles" | "banner"; // Tipos de upload

export function useImageUpload() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Função para selecionar uma imagem
  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, 
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  }

  // Função para enviar a imagem para um endpoint específico
  async function uploadImage(type: UploadType, id?: string) {
    if (!selectedImage) {
      Alert.alert("Erro", "Selecione uma imagem antes de enviar.");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", {
      uri: selectedImage,
      name: `${type}.png`,
      type: "image/png",
    } as any);

    try {
      let endpoint = `/${type}`;
      if (type === "contacts" || type === "vehicles") {
        if (!id) {
          Alert.alert("Erro", "ID necessário para envio da imagem.");
          return;
        }
        endpoint = `/${type}/${id}`;
      }

      const response = await api.post(endpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Alert.alert("Sucesso", "Imagem enviada com sucesso!");
      setSelectedImage(null);
      return response.data.linck; // Retorna a URL da imagem salva
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      Alert.alert("Erro", "Falha ao enviar a imagem.");
    } finally {
      setIsUploading(false);
    }
  }

  return { selectedImage, pickImage, uploadImage, isUploading };
}
