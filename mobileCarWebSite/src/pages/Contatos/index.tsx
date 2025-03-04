import { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { api } from "../../services/api";

import Icon from "react-native-vector-icons/AntDesign";
import ButtonPage from "../components/buttonPage";

// Definição do tipo do contato
interface Contato {
  id: string;
  name: string;
  number: string;
  photo: string;
}

export default function Contatos() {
  const [getContatos, setGetContatos] = useState<Contato[]>([]);

  useEffect(() => {
    async function fetchContatos() {
      try {
        const response = await api.get<Contato[]>("/contact/list");
        setGetContatos(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContatos();
  }, []);

  async function deletContact(id: string) {
    try {
      await api.delete("/contact/remove", {
        data: { idContact: id }, // Enviando o ID no corpo da requisição
      });

      // Atualizar a lista removendo o contato deletado
      setGetContatos((prevContatos) =>
        prevContatos.filter((contato) => contato.id !== id)
      );
    } catch (error) {
      console.log("Erro ao deletar contato:", error);
    }
  }

  return (
    <View style={styles.container}>

      <ButtonPage name="AdicionarContato" buttonText="Adiconar Contato" />

      {getContatos.length > 0 ? (
        <FlatList
          data={getContatos}
          keyExtractor={(contato) => contato.id}
          renderItem={({ item }) => (
            <View style={styles.cardContatos}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
              <View>
                <Text>{item.name}</Text>
                <Text>{item.number}</Text>
              </View>
              <TouchableOpacity onPress={() => deletContact(item.id)}>
                <Icon
                  name="delete"
                  size={35}
                  color="black"
                  style={{ marginLeft: 100 }}
                />
                ;
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text>Sem contatos</Text>
      )}
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
  cardContatos: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
});
