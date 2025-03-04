import { StyleSheet, Text, View } from "react-native";
 
export default function AddContato(){
    return(
        <View style={styles.container}>
            <Text>Ola</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 50,
    gap: 50,
  } 
});