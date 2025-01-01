import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Switch } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import useRouter hook

export default function Deliver() {
  const [orders, setOrders] = useState([
    {
      id: '1',
      customer: 'ezra umer',
      pickup: '123 Main St',
      dropoff: '456 Elm St',
      status: 'Awaiting Pickup',
    },
    {
      id: '2',
      customer: 'Aman',
      pickup: '789 Oak St',
      dropoff: '321 Pine St',
      status: 'In Transit',
    },
  ]);

  const [earnings, setEarnings] = useState({ daily: 50, weekly: 300, total: 1200 });
  const [isAvailable, setIsAvailable] = useState(false);
  const router = useRouter(); // Get the router object

  // Logout function
  const handleLogout = () => {
    router.push('/'); // Navigate to the login screen (index.js)
  };

  // Navigate to TrackDelivery page
  const handleViewMap = () => {
    router.push('/trackDelivery'); // Navigate to the TrackDelivery page
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Delivery Dashboard</Text>

      {/* Availability Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Availability</Text>
        <View style={styles.availabilityToggle}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {isAvailable ? 'Available for Deliveries' : 'Unavailable'}
          </Text>
          <Switch
            value={isAvailable}
            onValueChange={(value) => setIsAvailable(value)}
            trackColor={{ false: '#ccc', true: '#6200EA' }}
            thumbColor={isAvailable ? '#FFF' : '#999'}
          />
        </View>
      </View>

      {/* Account Management Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Management</Text>
       
        <TouchableOpacity style={styles.card}>
          <Ionicons name="settings-sharp" size={24} color="#fff" />
          <Text style={styles.cardText}>Profile Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Order Management Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Management</Text>
        {isAvailable ? (
          orders.map((order) => (
            <View key={order.id} style={styles.orderCard}>
              <Text style={styles.orderText}>
                <Text style={{ fontWeight: 'bold' }}>Customer:</Text> {order.customer}
              </Text>
              <Text style={styles.orderText}>
                <Text style={{ fontWeight: 'bold' }}>Pickup:</Text> {order.pickup}
              </Text>
              <Text style={styles.orderText}>
                <Text style={{ fontWeight: 'bold' }}>Dropoff:</Text> {order.dropoff}
              </Text>
              <Text style={styles.orderText}>
                <Text style={{ fontWeight: 'bold' }}>Status:</Text> {order.status}
              </Text>
              <View style={styles.orderActions}>
                <TouchableOpacity style={styles.orderButton}>
                  <Text style={styles.orderButtonText}>Request</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.orderButton}>
                  <Text style={styles.orderButtonText}>Reject</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.unavailableText}>Set your availability to view and accept orders.</Text>
        )}
      </View>

      {/* Navigation Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Navigation</Text>
        <TouchableOpacity style={styles.card} onPress={handleViewMap}>
          <MaterialIcons name="map" size={24} color="#fff" />
          <Text style={styles.cardText}>View Map</Text>
        </TouchableOpacity>
      </View>

      {/* Earnings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Earnings</Text>
        <View style={styles.earningsCard}>
          <Text style={styles.earningsText}>Daily Earnings: {earnings.daily} birr</Text>
          <Text style={styles.earningsText}>Weekly Earnings: {earnings.weekly} birr</Text>
          <Text style={styles.earningsText}>Total Earnings: {earnings.total} birr</Text>
        </View>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="cash" size={24} color="#fff" />
          <Text style={styles.cardText}>Request Payout</Text>
        </TouchableOpacity>
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="chatbox-ellipses" size={24} color="#fff" />
          <Text style={styles.cardText}>Contact Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="alert-circle" size={24} color="#fff" />
          <Text style={styles.cardText}>Report Problem</Text>
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  availabilityToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
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
  orderCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5,
  },
  orderActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  orderButton: {
    backgroundColor: '#6200EA',
    padding: 10,
    borderRadius: 8,
  },
  orderButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
  unavailableText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
  earningsCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  earningsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  logoutButton: {
    backgroundColor: '#FF6F61',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
