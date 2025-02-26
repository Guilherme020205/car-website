import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  // Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { api } from "../../services/api";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [logoWeb, setLogoWeb] = useState('')

  // useEffect(() => {
  //   async function fetchLogo() {
  //     try {
  //       const response = await api.get("/logo");
  //       console.log(response.data);
  //       if (response.data && response.data.length > 0) {
  //         setLogoWeb(response.data[0].linck);  
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchLogo(); 

  // }, []);

  function handleLogin() {
    if (email === "" || password === "") {
      return;
    }

    try {
        
    } catch (error) {
      console.log(error)
    
    }
    alert("Passou");

    setEmail("");
    setPassword("");
  }

  return (
    <View style={styles.container}>
      {/* {logoWeb ? (
        <Image style={styles.logo} source={{ uri: logoWeb}} />
      ) : (
        <Text>Oa</Text>
      )} */}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry={true}
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
  },
  logo: {
    marginBottom: 18,
  },
  inputContainer: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 34,
    paddingHorizontal: 14,
  },
  input: {
    width: "95%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#DFE4E4",
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  button: {
    width: "95%",
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
