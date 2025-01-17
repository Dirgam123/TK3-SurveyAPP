import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function SurveyScreen() {
  const { id } = useLocalSearchParams();
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (!feedback) {
      Alert.alert('Error', 'Harap isi umpan balik!');
      return;
    }
    Alert.alert('Terima Kasih!', 'Jawaban Anda telah dikirim.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Survei: {id}</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Masukkan umpan balik Anda" 
        value={feedback} 
        onChangeText={setFeedback} 
        multiline 
      />
      <Button title="Kirim" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
    height: 100,
  },
});
