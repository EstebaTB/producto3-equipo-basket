import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IPlayer } from "../../../interface/IPlayer";
import StarRating from "./starrating";

export default function PlayerDetailsScreen(): React.JSX.Element {
  const router = useRouter();
  const params = useLocalSearchParams();
  const player = JSON.parse(params.player as string) as IPlayer;
  const [isModalVisible, setModalVisible] = useState(false);

  // Función para calcular la media de puntos
  const calculateAveragePoints = (pointsArray: number[]): number => {
    if (pointsArray.length === 0) return 0;
    const total = pointsArray.reduce((sum, value) => sum + value, 0);
    return total / pointsArray.length;
  };

  const averagePoints = calculateAveragePoints(player.points || []);

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado con imagen */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={{
              uri: player.imagePath || "https://via.placeholder.com/150",
            }}
            style={styles.playerImage}
          />
        </TouchableOpacity>

        <View style={styles.headerInfo}>
          <Text style={styles.name}>
            {player.name} {player.surname}
          </Text>
          <Text style={styles.position}>
            {player.position} #{player.jerseyNumber}
          </Text>
          {/* Botón para Navegar a Media */}
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() =>
              router.push({
                pathname: "/components/media/media",
                params: { player: JSON.stringify(player) },
              })
            }
          >
            <Text style={styles.mediaButtonText}>Ver Videos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal para mostrar imagen ampliada */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
          <Image
            source={{
              uri: player.imagePath || "https://via.placeholder.com/150",
            }}
            style={styles.modalImage}
          />
        </View>
      </Modal>

      {/* Resto de la información */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información Personal</Text>
        <Text style={styles.infoText}>Nacionalidad: {player.nationality}</Text>
        <Text style={styles.infoText}>
          Nacimiento: {player.fechaNacimiento}
        </Text>
        <Text style={styles.infoText}>Altura: {player.height} cm</Text>
        <Text style={styles.infoText}>Antigüedad: {player.seniority}</Text>
      </View>
      {/* Estadísticas */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Estadísticas</Text>
        <Text style={styles.infoText}>
          Partidos jugados: {player.gamesPlayed}
        </Text>
        <Text style={styles.infoText}>
          Puntos último partido: {player.pointsLastGame}
        </Text>
        <Text style={styles.infoText}>
          Media puntos últimos 10 partidos: {averagePoints.toFixed(1)}
        </Text>
        <Text style={styles.infoText}>Total faltas: {player.totalFouls}</Text>
        <Text style={styles.infoText}>
          Faltas último partido: {player.foulsLastGame}
        </Text>
      </View>

      {/* Habilidades */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Habilidades</Text>
        {/* Interior */}
        <Text style={styles.infoText}>
          Interior:
          {player.interior ? (
            <Text style={{ color: "#785c4c" }}>✔</Text> // Tic verde
          ) : (
            <Text style={{ color: "#785c4c" }}>✖</Text> // Cruz roja
          )}
        </Text>
        {/* Exterior */}
        <Text style={styles.infoText}>
          Exterior:
          {player.exterior ? (
            <Text style={{ color: "#785c4c" }}>✔</Text> // Tic verde
          ) : (
            <Text style={{ color: "#785c4c" }}>✖</Text> // Cruz roja
          )}
        </Text>
        {/* Diestro */}
        <Text style={styles.infoText}>
          Diestro:
          {player.rightHanded ? (
            <Text style={{ color: "#785c4c" }}>✔</Text> // Tic verde
          ) : (
            <Text style={{ color: "#785c4c" }}>✖</Text> // Cruz roja
          )}
        </Text>
        {/* Zurdo */}
        <Text style={styles.infoText}>
          Zurdo:
          {player.leftHanded ? (
            <Text style={{ color: "#785c4c" }}>✔</Text> // Tic verde
          ) : (
            <Text style={{ color: "#785c4c" }}>✖</Text> // Cruz roja
          )}
        </Text>
        <Text style={styles.infoText}>
          Coordinación: <StarRating rating={player.coordinated ?? 0} />
        </Text>
        <Text style={styles.infoText}>
          Fuerza: <StarRating rating={player.strong ?? 0} />
        </Text>
        <Text style={styles.infoText}>
          Trabajo: <StarRating rating={player.hardworking ?? 0} />
        </Text>
        <Text style={styles.infoText}>
          Competitivo: <StarRating rating={player.competitive ?? 0} />
        </Text>
      </View>

      {/* Anotaciones técnicas */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Anotaciones Técnicas</Text>
        <Text style={styles.infoText}>
          Descripción técnica: {player.technicalDescription}
        </Text>
        <Text style={styles.infoText}>
          Descripción táctica: {player.tacticalDescription}
        </Text>
        <Text style={styles.infoText}>
          Descripción defensiva: {player.defensiveDescription}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 10,
    margin: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0bc94",
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#785c4c",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  playerImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 20,
    resizeMode: "contain",
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
  position: {
    fontSize: 30,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },
  modalClose: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  closeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f0bc94",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 5,
  },
  infoText: {
    fontSize: 18,
    marginVertical: 2,
    color: "#444",
  },
  mediaButton: {
    marginTop: 20,
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  mediaButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
