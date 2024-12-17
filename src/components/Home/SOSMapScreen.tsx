import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Feather from '@expo/vector-icons/Feather';

const { height } = Dimensions.get('window');

const SOSMapScreen = ({ navigation }: any) => {
  const markers = [
    {
      id: 1,
      title: 'Kageyama Tobio',
      coordinate: { latitude: 16.0544, longitude: 108.2022 },
    },
    {
      id: 2,
      title: 'Oikawa Tooru',
      coordinate: { latitude: 16.0604, longitude: 108.2102 },
    },
    {
      id: 3,
      title: 'My House',
      coordinate: { latitude: 16.0504, longitude: 108.2032 },
      description: 'Hoa Xuan, Cam Le, Da Nang\nAt Thursday, October 10, 10:00 PM',
    },
  ];

  const helpers = [
    { id: 1, name: 'Kageyama Tobio', distance: '2 km' },
    { id: 2, name: 'Oikawa Tooru', distance: '4 km' },
    // { id: 3, name: 'Nishinoya Yu', distance: '5 km' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>SOS MAP</Text>
        <TouchableOpacity>
          <Icon name="lock" size={24} color="#000" />
        </TouchableOpacity>
      </View> */}

      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 16.0544,
          longitude: 108.2022,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetHandle} />
        <View style={styles.content}>
          <Feather name="home" size={48} color="#FF5722" />
          <Text style={styles.locationTitle}>My House</Text>
          <Text style={styles.locationDetails}>
            Hoa Xuan, Cam Le, Da Nang{'\n'}
            {/* At Thursday, October 10, 10:00 PM */}
          </Text>
          {/* <TouchableOpacity style={styles.reportButton}>
            <Text style={styles.reportButtonText}>Report Incident</Text>
          </TouchableOpacity> */}
        </View>

        {/* Helper List */}
        <FlatList
          data={helpers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.helperItem}>
              <Image
                source={{
                  uri: 'https://res.cloudinary.com/djiinlgh2/image/upload/v1732091492/designuxui/ujtjx5aznrhctgssuhm1.png',
                }}
                style={styles.avatar}
              />
              <View style={{ flex: 1, marginLeft: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: '#666' }}>{item.distance}</Text>
              </View>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="phone" size={24} color="white" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#ECF0F4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 50,
    fontWeight: 'bold',
    color: '#000',
  },
  map: {
    flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 300,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    elevation: 5,
  },
  bottomSheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#CCC',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 8,
  },
  content: {
    alignItems: 'center',
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  locationDetails: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginTop: 4,
  },
  reportButton: {
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  reportButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  helperItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    marginRight: 10,
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconButton: {
    backgroundColor: '#FF5722',
    padding: 8,
    borderRadius: 24,
  },
});

export default SOSMapScreen;
