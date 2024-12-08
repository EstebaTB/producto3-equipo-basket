import { Stack, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();

  const backgroundStyle = {
    backgroundColor: "rgb(35, 56, 83)",
  };

  // Botón de Inicio
  const HomeButton = () => (
    <TouchableOpacity
      style={styles.homeButton}
      onPress={() => router.push("/")}
    >
      <FontAwesome name="home" size={20} color="#fff" />
      <Text style={{ color: "white", fontSize: 16 }}></Text>
    </TouchableOpacity>
  );

  // Logo Estático
  const Logo = () => (
    <Image
      source={require("./../assets/images/logo.png")}
      style={{ width: 30, height: 30 }}
    />
  );

  return (
    <Stack
      screenOptions={{
        headerStyle: backgroundStyle,
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
        headerTitleAlign: "center",
        title: "Dribble Teach",
      }}
    >
      {/* Pantalla Principal */}
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => <Logo />,
        }}
      />

      {/* Pantalla de Detalles del Jugador */}
      <Stack.Screen
        name="components/details/playerDetails"
        options={({ route }) => ({
          headerRight: () => (
            <>
              <TouchableOpacity
                style={styles.mediaButton}
                onPress={() =>
                  router.push({
                    pathname: "/components/media/media",
                    params: { player: route.params.player }, // Pasa directamente el objeto player
                  })
                }
              >
                <FontAwesome name="video-camera" size={20} color="#fff" />
                <Text style={{ color: "white", fontSize: 16 }}></Text>
              </TouchableOpacity>
              <HomeButton />
            </>
          ),
        })}
      />

      {/* Pantalla Multimedia */}
      <Stack.Screen
        name="components/media/media"
        options={{
          headerRight: () => <HomeButton />,
        }}
      />
    </Stack>
  );
}
const styles = StyleSheet.create({
  homeButton: {
    flexDirection: "row", // Alinea horizontalmente
    alignItems: "center", // Centra verticalmente
    justifyContent: "center", // Centra horizontalmente
    marginRight: 15,
  },
  mediaButton: {
    flexDirection: "row", // Alinea horizontalmente
    alignItems: "center", // Centra verticalmente
    justifyContent: "center", // Centra horizontalmente
    marginRight: 15,
  },
  mediaButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5, // Espacio entre el ícono y el texto
  },
});