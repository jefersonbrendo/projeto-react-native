import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  function handleLogin() {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha o e-mail e a senha para continuar.");
      return;
    }
    Alert.alert("Login", `Bem-vindo, ${email}!`);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/react-logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.titulo}>Bem-vindo</Text>
          <Text style={styles.subtitulo}>Faça login para continuar</Text>
        </View>

        <View style={styles.formulario}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputSenhaContainer}>
            <TextInput
              style={styles.inputSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!senhaVisivel}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setSenhaVisivel((v) => !v)}
              style={styles.botaoVerSenha}
            >
              <Text style={styles.textoVerSenha}>
                {senhaVisivel ? "Ocultar" : "Ver"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.linkContainer}>
            <Text style={styles.linkTexto}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoLogin} onPress={handleLogin} activeOpacity={0.85}>
            <Text style={styles.botaoLoginTexto}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.rodape}>
            <Text style={styles.rodapeTexto}>Não tem uma conta? </Text>
            <TouchableOpacity>
              <Text style={styles.linkTexto}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 36,
  },
  logo: {
    width: 110,
    height: 110,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: "#666",
  },
  formulario: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#444",
    marginBottom: 6,
    marginTop: 4,
  },
  input: {
    backgroundColor: "#f0f1f5",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#1a1a2e",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  inputSenhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f1f5",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginBottom: 10,
  },
  inputSenha: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#1a1a2e",
  },
  botaoVerSenha: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  textoVerSenha: {
    fontSize: 13,
    color: "#4f8ef7",
    fontWeight: "600",
  },
  linkContainer: {
    alignSelf: "flex-end",
    marginBottom: 22,
  },
  linkTexto: {
    color: "#4f8ef7",
    fontSize: 14,
    fontWeight: "600",
  },
  botaoLogin: {
    backgroundColor: "#4f8ef7",
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  botaoLoginTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  rodape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rodapeTexto: {
    fontSize: 14,
    color: "#666",
  },
});
