import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

const SettingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Options</Text>
            <TouchableOpacity style={styles.item}>
              <MaterialIcons name="language" size={24} color="black" />
              <Text style={styles.itemText}>Language and region</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Feather name="moon" size={24} color="black" />
              <Text style={styles.itemText}>Dark Mode</Text>
            </TouchableOpacity>
          </View>

          {/* Your Activity Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your Activity</Text>
            <TouchableOpacity style={styles.item}>
              <Feather name="list" size={24} color="black" />
              <Text style={styles.itemText}>Activity Log</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Feather name="sliders" size={24} color="black" />
              <Text style={styles.itemText}>Device Access</Text>
            </TouchableOpacity>
          </View>

          {/* Community Standards Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Community standards</Text>
            <TouchableOpacity style={styles.item}>
              <Feather name="book" size={24} color="black" />
              <Text style={styles.itemText}>Terms of Service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Feather name="database" size={24} color="black" />
              <Text style={styles.itemText}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Feather name="heart" size={24} color="black" />
              <Text style={styles.itemText}>Community Standards</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/djiinlgh2/image/upload/v1732088265/designuxui/llpy9ixjqjwhqaujevja.png', // Thay bằng đường dẫn avatar thực tế
          }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>DangNam</Text>
          <View style={styles.locationContainer}>
            <Entypo name="location-pin" size={20} color="#B2B0B0" />
            <Text style={styles.locationText}>Hoa Xuan, Cam Le, Da Nang</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: 120,
    marginHorizontal: 20,
    height: '100%'
  },
  section: {
    backgroundColor: '#E4E0E0',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  item: {
    paddingStart: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
});

export default SettingScreen;
