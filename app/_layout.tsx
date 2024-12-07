import { Stack } from "expo-router";
import { Image } from "react-native";

export default function RootLayout() {
  const backgroundStyle = {
    backgroundColor: "rgb(35, 56, 83)",
  };
  const Logo = () => (
    <Image
      source={require("./../assets/images/logo.png")}
      style={{ width: 30, height: 30 }} // Ajusta el tamaño según necesites
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
      <Stack.Screen name="index" options={{ headerLeft: () => <Logo /> }} />
      <Stack.Screen name="components/details/playerDetails" />
    </Stack>
  );
}

