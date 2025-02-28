import React, { useState, useEffect } from "react";
import { View, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { api } from "../../services/api";

// Definição do componente principal
export default function Logo() {
    // Estado para armazenar a URL da logo atual
    const [logoUrl, setLogoUrl] = useState<string | null>(null);
    // Estado para armazenar a imagem selecionada pelo usuário
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // useEffect para buscar a logo da API quando o componente for montado
    useEffect(() => {
        async function fetchLogo() {
            try {
                const response = await api.get(`/logo`);
                if (response.data.linck) {
                    setLogoUrl(response.data.linck); // Define a URL da logo obtida
                }
            } catch (error) {
                console.error("Erro ao buscar logo:", error);
            }
        }
        fetchLogo();
    }, []);

    // Função para abrir a galeria e permitir a seleção de uma imagem
    async function pickImage() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // Apenas imagens podem ser selecionadas
            allowsEditing: true, // Permite edição básica da imagem
            aspect: [4, 4], // Define a proporção da imagem
            quality: 1, // Qualidade máxima da imagem
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri); // Armazena a URI da imagem selecionada
        }
    }

    // Função para fazer upload da imagem selecionada para a API
    async function uploadImage() {
        if (!selectedImage) {
            Alert.alert("Erro", "Por favor, selecione uma imagem primeiro!");
            return;
        }

        // Criando um objeto FormData para envio da imagem
        const formData = new FormData();
        formData.append("file", {
            uri: selectedImage,
            name: "logo.png", // Nome do arquivo enviado
            type: "image/png", // Tipo do arquivo
        } as any);

        try {
            const response = await api.post(`/logo`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Cabeçalho necessário para envio de arquivos
                },
            });

            setLogoUrl(response.data.linck); // Atualiza a logo exibida com a nova URL
            setSelectedImage(null); // Reseta a imagem selecionada
            Alert.alert("Sucesso", "Logo atualizada com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar imagem:", error);
            Alert.alert("Erro", "Falha ao atualizar a logo.");
        }
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {/* Exibe a logo atual se houver uma URL */}
            {logoUrl && <Image source={{ uri: logoUrl }} style={{ width: 200, height: 200, marginBottom: 20 }} />}
            {/* Botão para selecionar uma nova imagem */}
            <Button title="Selecionar Imagem" onPress={pickImage} />
            {/* Exibe a prévia da imagem selecionada */}
            {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 100, height: 100, marginVertical: 10 }} />}
            {/* Botão para enviar a imagem selecionada */}
            <Button title="Enviar Imagem" onPress={uploadImage} disabled={!selectedImage} />
        </View>
    );
}
