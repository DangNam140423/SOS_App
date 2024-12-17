import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

export default function DiaryScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="menu" size={24} color="black" />
          <TextInput style={styles.searchInput} placeholder="Find notes" />
          <Ionicons name="search" size={24} color="black" />
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={styles.content}>
          {/* Pinned Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Pinned</Text>
            </View>
            <View style={styles.card}>
              <Text>Context of the event</Text>
              <Text>Argument with relatives</Text>
            </View>
          </View>

          {/* Other Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Other</Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Positive thing of the day</Text>
              <Text>November 1, 2024</Text>
              <Text>"I had an argument with a friend today."</Text>
              <Text>"I got good news from work."</Text>
              <Text>“Received wishes from daughter.”</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Personal goals</Text>
              <Text>November 5, 2024</Text>
              <Text>"Try to reduce your stress levels."</Text>
              <Text>"Find ways to resolve conflicts with loved ones."</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('adddiary')}
            style={styles.fab}>
            <Ionicons name="add" size={28} color="white" />
          </TouchableOpacity>

          <View style={styles.footer}>
            <TouchableOpacity>
              <MaterialIcons name="mic" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="image" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="note-add" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4F4',
  },
  body: {
    marginTop: 120,
    marginHorizontal: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    height: 20
  },
  content: {
    height: height - 80 - 120 - 100
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  fab: {
    backgroundColor: '#FF6D00',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,

  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#EDEDED',
    borderRadius: 12,
    position: 'absolute',
    bottom: 10,
    width: '100%'
  },
});
