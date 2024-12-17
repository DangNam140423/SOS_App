import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

const TipsAndTricksScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <ImageBackground
        source={{ uri: "https://res.cloudinary.com/djiinlgh2/image/upload/v1732079773/designuxui/tllkupjkhwzixcdyaajp.png" }} // Thay bằng link ảnh background của bạn
        style={styles.header}
        resizeMode="cover"
      >
        <Text style={styles.subtitle}>
          Here are some helpful tips that can help you.
        </Text>
      </ImageBackground>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Emergency Instructions */}
        <TouchableOpacity style={[styles.card, styles.cardRed]}>
          <Text style={styles.cardTitle}>Emergency Instructions</Text>
          <Text style={styles.cardDescription}>
            Provide specific steps to escape a dangerous situation, including
            safe hiding places and how to quickly contact help.
          </Text>
          <Text style={styles.cardIcon}>SOS</Text>
        </TouchableOpacity>

        {/* Self Defense */}
        <TouchableOpacity style={[styles.card, styles.cardYellow]}>
          <Text style={styles.cardTitle}>Self Defense</Text>
          <Text style={styles.cardDescription}>
            Integrate basic self-defense tips, instructions on how to avoid and
            escape dangerous situations, with illustrated images or videos.
          </Text>
          <Text style={styles.cardIcon}>🛡️</Text>
        </TouchableOpacity>

        {/* Legal Resources */}
        <TouchableOpacity style={[styles.card, styles.cardRed]}>
          <Text style={styles.cardTitle}>Legal Resources</Text>
          <Text style={styles.cardDescription}>
            Provide information on legal rights, reporting procedures, and
            contact support organizations so users know how to protect
            themselves.
          </Text>
          <Text style={styles.cardIcon}>⚖️</Text>
        </TouchableOpacity>

        {/* Emergency Contacts */}
        <TouchableOpacity style={[styles.card, styles.cardYellow]}>
          <Text style={styles.cardTitle}>Emergency Contacts</Text>
          <Text style={styles.cardDescription}>
            Store and quickly call emergency phone numbers of relatives and
            support organizations, with the ability to send SOS messages when
            in danger.
          </Text>
          <Text style={styles.cardIcon}>ℹ️</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    height: 170,
    justifyContent: "center",
  },
  menuIcon: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 16,
    color: "#00000",
    textAlign: "center",
    position: 'absolute',
    bottom: 10,
    left: 20
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  cardRed: {
    backgroundColor: "#FFDDDD",
  },
  cardYellow: {
    backgroundColor: "#FFF4CC",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  cardIcon: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right",
    color: "#FF5555",
  },
});

export default TipsAndTricksScreen;
