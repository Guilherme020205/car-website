import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { useAuth } from "../../contexts/AuthContext";
 
export default function Dashboard() {
    const { signOut } = useAuth();

    function handleSignOut() {
        signOut()
    }

    return (
        <View style={styles.container}>
            <Text>Olá mundo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
});