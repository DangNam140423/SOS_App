import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddDiaryScreen({ navigation }: any) {
  const [text, setText] = useState(
    `Positive thing of the day\n\nNovember 1, 2024\n"I had an argument with a friend today."\n"I got good news from work."\n“Received wishes from daughter.”`
  );

  // Function to dismiss the keyboard
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>

        {/* Text Area */}
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            multiline
            value={text}
            onChangeText={setText}
            placeholder="Write something here..."
          />
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.cancelButton}>
            <Text style={styles.cancelText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.saveButton}>
            <Text style={styles.saveText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4F4',
    padding: 16,
  },
  header: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textAreaContainer: {
    marginTop: 120,
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    minHeight: 120, // Minimum height of the TextInput
    maxHeight: 400, // Maximum height of the TextInput
  },
  textArea: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlignVertical: 'top', // For Android multiline alignment
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#C4C4C4',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: 120,
  },
  cancelText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#FF6D00',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: 120,
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
