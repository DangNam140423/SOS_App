import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const AddNewAddress = ({ navigation }: any) => {
  const [location, setLocation] = useState({
    latitude: 16.0544,
    longitude: 108.2022,
  });

  const [form, setForm] = useState({
    address: "Hoa Xuan, Cam Le, Da Nang",
    road: "Hoa Xuan",
    ward: "Cam Le",
    apartment: "12",
    tag: "Home",
  });

  const handleDragMarker = (e: any) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setLocation({ latitude, longitude });
  };

  const handleTagChange = (tag: any) => {
    setForm((prev) => ({ ...prev, tag }));
  };

  console.log(form);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={location} draggable onDragEnd={handleDragMarker}>
          <View style={styles.marker}>
            <Text style={styles.markerText}>Di chuyển để chỉnh sửa vị trí</Text>
          </View>
        </Marker>
      </MapView>

      <View style={styles.form}>
        <Text style={styles.header}>Add new address</Text>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={form.address}
          onChangeText={(text) =>
            setForm((prev) => ({ ...prev, address: text }))
          }
        />

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Road</Text>
            <TextInput
              style={styles.input}
              value={form.road}
              onChangeText={(text) =>
                setForm((prev) => ({ ...prev, road: text }))
              }
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Ward</Text>
            <TextInput
              style={styles.input}
              value={form.ward}
              onChangeText={(text) =>
                setForm((prev) => ({ ...prev, ward: text }))
              }
            />
          </View>
        </View>

        <Text style={styles.label}>Apartment</Text>
        <TextInput
          style={styles.input}
          value={form.apartment}
          onChangeText={(text) =>
            setForm((prev) => ({ ...prev, apartment: text }))
          }
        />

        <Text style={styles.label}>Add Tag</Text>
        <View style={styles.tagContainer}>
          {["Home", "Workplace", "Other"].map((tag) => (
            <TouchableOpacity
              key={tag}
              style={[styles.tag, form.tag === tag && styles.activeTag]}
              onPress={() => handleTagChange(tag)}
            >
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Location</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    fontSize: 20,
    fontWeight: "medium",
    textAlign: "center",
    marginVertical: 10,
  },
  map: { flex: 2 },
  marker: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    elevation: 3,
  },
  markerText: { color: "#000", fontSize: 12 },

  form: {
    flex: 3,
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  label: { fontSize: 14, color: "#333", marginBottom: 5 },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  column: { flex: 1, marginHorizontal: 5 },

  tagContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  tag: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#eee",
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  activeTag: { backgroundColor: "#FFA07A" },
  tagText: { fontSize: 14 },

  saveButton: {
    backgroundColor: "#F37E44",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default AddNewAddress;
