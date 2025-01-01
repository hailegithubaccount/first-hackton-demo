import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import the useRouter hook

export default function Customer() {
  const [search, setSearch] = useState('');
  const router = useRouter(); // Initialize the router

  // Sample product data
  const products = [
    { id: '1', name: 'mobile', price: '8000 Birr', image: 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_640.png' },
    { id: '2', name: 'pc', price: '30,000 Birr', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf39CHd7cNuo4qJPPTOPmoUgxSKWQM0U_sDw&s' },
    { id: '3', name: 'desktop', price: '15,000 Birr', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfGFh0H81I5K5Kz7-nfVFo1LMBpS_6j8KVA&s' },
    { id: '4', name: 'tv', price: '10,000 Birr', image: 'https://media.istockphoto.com/id/1395191574/photo/black-led-tv-television-screen-blank-isolated.jpg?s=612x612&w=0&k=20&c=ps14JZJh0ebkINcbQyHFsR1J5EC7ozkj_WO7Fh_9IOI=' },
  ];

  // Function to handle logout or navigation back to login
  const handleLogout = () => {
    router.push('/'); // Navigate to the login screen (index.js)
  };

  // Function to navigate to the Track Delivery page
  const handleTrackDelivery = () => {
    router.push('/trackDelivery'); // Navigate to the TrackDelivery page (track-delivery.js)
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Customer Dashboard</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={search}
          onChangeText={setSearch}
        />
        <Ionicons name="search" size={24} color="#6200EA" style={styles.searchIcon} />
      </View>

      {/* Account Management Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Management</Text>
       
        <TouchableOpacity style={styles.card}>
          <Ionicons name="settings-sharp" size={24} color="#fff" />
          <Text style={styles.cardText}>Profile Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Product Browsing Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Browsing</Text>
        <FlatList
          data={products}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Order Placement Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Placement</Text>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="cart" size={24} color="#fff" />
          <Text style={styles.cardText}>Checkout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="location-on" size={24} color="#fff" />
          <Text style={styles.cardText}>Address Management</Text>
        </TouchableOpacity>
      </View>

      {/* Order Tracking Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Tracking</Text>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="timer-outline" size={24} color="#fff" />
          <Text style={styles.cardText}>View Order Status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleTrackDelivery}>
          <Ionicons name="location" size={24} color="#fff" />
          <Text style={styles.cardText}>Track Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="chatbox-ellipses" size={24} color="#fff" />
          <Text style={styles.cardText}>Contact Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="help-circle" size={24} color="#fff" />
          <Text style={styles.cardText}>View FAQs</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
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
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#6200EA',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#6200EA',
    padding: 8,
    borderRadius: 8,
  },
  addToCartText: {
    color: '#FFF',
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: '#FF6F61',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
