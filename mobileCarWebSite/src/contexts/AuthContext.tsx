import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { api } from "../services/api";

/**
 * Interface para representar os dados do usuário autenticado.
 */
interface UserProps {
  id: string;
  userName: string;
}

/**
 * Interface para definir os métodos e estados do contexto de autenticação.
 */
interface AuthContextType {
  user: UserProps | null;
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (userName: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

/**
 * Criação do contexto de autenticação.
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Interface para definir as propriedades do AuthProvider.
 */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Provedor de autenticação que gerencia o estado do usuário e os métodos de autenticação.
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(false);
 
  // Verifica se o usuário está autenticado.
  const isAuthenticated = !!user;

  /**
   * Método para realizar o login do usuário.
   * @param userName Nome de usuário.
   * @param password Senha do usuário.
   * @returns Retorna um booleano indicando sucesso ou falha na autenticação.
   */

  async function signIn(userName: string, password: string): Promise<boolean> {
    setLoading(true)
    try {
      const response = await api.post("/login", { userName, password });
      const { id } = response.data;
      const userData = { id, userName };
      console.log(userData);
      setUser(userData);
      setTimeout(() => {
        setLoading(false)
      }, 500);
      return true;
    } catch (err) {
      console.error("Erro ao autenticar", err);
      setTimeout(() => {
        setLoading(false)
      }, 500);
      return false;
    }
  }

  /**
   * Método para realizar o logout do usuário.
   */
  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook para consumir o contexto de autenticação.
 * @returns Retorna os dados do contexto de autenticação.
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
