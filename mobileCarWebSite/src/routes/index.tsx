import React from "react";
import { useAuth } from "../contexts/AuthContext";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { View, ActivityIndicator } from "react-native";

function Routes() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#FFF',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <ActivityIndicator size={60} color='#000000'/>

        </View>
    )
}

  return (
    <View style={{ flex: 1 }}>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </View>
  );
}

export default Routes;
