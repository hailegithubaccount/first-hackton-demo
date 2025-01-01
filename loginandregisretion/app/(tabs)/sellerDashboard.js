import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';  // Import useRouter from expo-router

export default function Seller() {
  const router = useRouter();  // Initialize the useRouter hook

  const handleLogout = () => {
    router.push('/');  // Navigate to the login screen (index.js)
  };
  const handleViewMap = () => {
    router.push('/trackDelivery'); // Navigate to the TrackDelivery page
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Seller Dashboard</Text>

      {/* Account Management Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Management</Text>
        
        <TouchableOpacity style={styles.card}>
          <Ionicons name="settings-sharp" size={24} color="#fff" />
          <Text style={styles.cardText}>Profile Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="stats-chart" size={24} color="#fff" />
          <Text style={styles.cardText}>Business Dashboard</Text>
        </TouchableOpacity>
      </View>

      {/* Product Management Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Management</Text>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="add-circle" size={24} color="#fff" />
          <Text style={styles.cardText}>Add/Remove Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="category" size={24} color="#fff" />
          <Text style={styles.cardText}>Product Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <FontAwesome5 name="image" size={24} color="#fff" />
          <Text style={styles.cardText}>Upload Images</Text>
        </TouchableOpacity>
      </View>

      {/* Order Management Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Management</Text>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="list-circle" size={24} color="#fff" />
          <Text style={styles.cardText}>View Incoming Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="update" size={24} color="#fff" />
          <Text style={styles.cardText}>Update Inventory</Text>
        </TouchableOpacity>
      </View>

      {/* Payment & Revenue Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment & Revenue</Text>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="cash" size={24} color="#fff" />
          <Text style={styles.cardText}>Revenue Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <FontAwesome5 name="wallet" size={24} color="#fff" />
          <Text style={styles.cardText}>Withdraw Funds</Text>
        </TouchableOpacity>
      </View>

      {/* Delivery Management Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Management</Text>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="person-add" size={24} color="#fff" />
          <Text style={styles.cardText}>Assign Delivery Person</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.card} onPress={handleViewMap}>
          <MaterialIcons name="map" size={24} color="#fff" />
          <Text style={styles.cardText}>Track Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200EA',
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200EA',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    marginLeft: 10,
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#6200EA',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
