import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

const NotificationScreen = () => {
  const notifications = [
    {
      id: "1",
      name: "Kagetoru Rin",
      action: "sent you a friend request.",
      buttons: true,
    },
    {
      id: "2",
      name: "Kagetoru Rin",
      action: "made friends successfully.",
      buttons: false,
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.notificationCard}>
      <View style={styles.notificationRow}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://res.cloudinary.com/djiinlgh2/image/upload/v1732082801/designuxui/gzyhih8cavkxab6wqmut.png" }}
        />
        <Text style={styles.notificationText}>
          <Text style={styles.boldText}>{item.name} </Text>
          {item.action}
        </Text>
        <TouchableOpacity>
          <Text style={styles.moreIcon}>⋮</Text>
        </TouchableOpacity>
      </View>
      {item.buttons && (
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.buttonText}>CONFIRM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.buttonText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.safeArea}>
      <View style={styles.body}>
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <TouchableOpacity
          style={styles.viewPreviousButton}
          onPress={() => console.log("View Previous Announcement pressed")}
        >
          <Text style={styles.viewPreviousButtonText}>
            View Previous Announcement
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F4F4",
  },
  body: {
    marginTop: 120,
    marginHorizontal: 20,
  },
  notificationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  notificationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
  },
  moreIcon: {
    fontSize: 24,
    color: "#333",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: "#5E6BFF",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  viewPreviousButton: {
    backgroundColor: "#F37E44",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  viewPreviousButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default NotificationScreen;
