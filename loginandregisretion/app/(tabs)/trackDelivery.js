import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

export default function TrackDelivery() {
  const router = useRouter(); // Initialize the router

  // Function to navigate back to the previous screen
  const handleBack = () => {
    router.back(); // This will take you back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Track Delivery</Text>

      {/* Map Image */}
      <Image
        source={require('../../assets/images/hh.png')} // Correct path to your local image
        style={styles.mapImage}
      />

      {/* Description */}
      <Text style={styles.description}>
        Track the delivery of your order in real-time! You can see the current location of your package on the map and receive updates as it moves towards you.
      </Text>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200EA',
    textAlign: 'center',
    marginVertical: 20,
  },
  mapImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#6200EA',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
