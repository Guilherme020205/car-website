import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../services/api";

export default function SignIn() {
  const { signIn } = useAuth();
  // const [user, setUser] = useState("");
  // const [password, setPassword] = useState("");
  const [user, setUser] = useState("admin");
  const [password, setPassword] = useState("1");

  function handleLogin() {
    if (user === "" || password === "") return;

    const success = signIn(user, password);
    if (!success) {
      alert("Usuário ou senha incorretos!");
    }
  }

  const [logoWeb, setLogoWeb] = useState<{ linck: string } | null>(null);

  useEffect(() => {
    async function fetchLogo() {
      try {
        const response = await api.get('/logo')
        // console.log(response.data[0].linck)
        if (response.data && response.data.length > 0) {
          setLogoWeb(response.data[0])
        }
        // console.log(logoWeb?.linck)
      } catch (error) {
        console.log(error);
      }
    }

    fetchLogo();
  }, []);


  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Login</Text> */}
      <Image style={styles.image} source={logoWeb?.linck ? { uri: logoWeb.linck } : { uri: "" }} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
          value={user}
          onChangeText={setUser}
        />
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
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
  },
  image: {
    width: 300,
    height: 70,
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#DFE4E4",
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  button: {
    width: "100%",
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
