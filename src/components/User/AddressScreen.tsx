import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Feather } from "@expo/vector-icons";





const AddressScreen = ({ navigation }: any) => {
  const [addresses, setAddress] = useState([
    {
      id: 1,
      type: 'HOME',
      address: 'Hoa Xuan, Cam Le, Da Nang',
      icon: 'home',
    },
    {
      id: 2,
      type: 'WORKPLACE',
      address: '22 Phan Dinh Thong, Da Nang',
      icon: 'office-building-outline',
    },
  ]);


  const handleDelete = (addresse: any) => {
    setAddress((prevSelected: any) =>
      prevSelected.includes(addresse)
        ? prevSelected.filter((c: any) => c !== addresse)
        : [...prevSelected, addresse]
    );

  }


  const renderItem = ({ item, index }: any) => (
    <View style={styles.addressItem} key={index}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={item.icon} size={24} color={item.type === 'HOME' ? '#4B88A2' : '#8A56AC'} />
      </View>
      <View style={styles.addressDetails}>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Feather name="edit" size={24} color="#FF8C42" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDelete(item)}>
          <Feather name="trash" size={24} color="#FF8C42" />
        </TouchableOpacity>
      </View>
    </View>
  );


  return (
    <View style={styles.safeArea}>
      <View style={styles.body}>
        <FlatList
          data={addresses}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />

        <TouchableOpacity
          style={styles.viewSaveButton}
          onPress={() => navigation.navigate('addnewaddress')}
        >
          <Text style={styles.viewSaveButtonText}>
            Add New Address
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  body: {
    marginTop: 120,
    marginHorizontal: 20,
  },
  viewSaveButton: {
    backgroundColor: "#F37E44",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  viewSaveButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  list: {
    paddingBottom: 16,
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F5FA',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 16,
  },
  addressDetails: {
    flex: 1,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  address: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
});

export default AddressScreen;
