import { Stack } from "expo-router";
import { Image, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter();

  const backgroundStyle = {
    backgroundColor: "rgb(35, 56, 83)",
  };

  // Botón de Inicio
  const HomeButton = () => (
    <TouchableOpacity
      style={{ marginRight: 15 }}
      onPress={() => router.push("/")}
    >
      <Text style={{ color: "white", fontSize: 16 }}>Inicio</Text>
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
        options={{
          headerRight: () => <HomeButton />,
        }}
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
