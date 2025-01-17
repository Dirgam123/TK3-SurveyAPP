import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Selamat Datang di Aplikasi Survei</Text>
      <Text style={styles.subtitle}>Pilih survei yang ingin Anda isi:</Text>
      
      <TouchableOpacity style={styles.button}>
        <Link href={{ pathname: '/survey', params: { id: 'customer-satisfaction' } }}>
          <Text style={styles.buttonText}>🛍️ Survei Kepuasan Pelanggan</Text>
        </Link>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Link href={{ pathname: '/survey', params: { id: 'product-feedback' } }}>
          <Text style={styles.buttonText}>📦 Survei Umpan Balik Produk</Text>
        </Link>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Link href={{ pathname: '/survey', params: { id: 'employee-feedback' } }}>
          <Text style={styles.buttonText}>👨‍💼 Survei Kepuasan Karyawan</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
