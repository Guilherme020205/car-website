import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { api } from "../../services/api";
import Icon from "react-native-vector-icons/FontAwesome5";

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
            aspect: [300, 70], // Define a proporção da imagem
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
        <View style={styles.container} >

            {logoUrl && <Image source={{ uri: logoUrl }} style={styles.logo} />}

            <View style={styles.containerPostFile}>
                <TouchableOpacity onPress={pickImage} style={styles.buttonFile}>
                    <Icon name="upload" size={50} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={uploadImage} disabled={!selectedImage} style={styles.button}>
                    <Text>Enviar Imagem</Text>
                </TouchableOpacity> 
                {selectedImage && <Image source={{ uri: selectedImage }} style={styles.logoNew}  />}
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
        gap: 50
      }, 
      containerPostFile:{
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
        borderColor: '#3fffa3', 
    },
      button: {
        width: 300,
        height: 40,
        backgroundColor: "#3fffa3",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
      },
      
      logo: {
        width: 300,
        height: 70 
      },
      logoNew: {
        marginTop:10,
        width: 300,
        height: 70 
      }
})