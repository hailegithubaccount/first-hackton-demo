
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Main Login Screen */}
      <Stack.Screen name="index" />
      
      {/* Dashboards */}
      <Stack.Screen name="customerDashboard" />
      <Stack.Screen name="sellerDashboard" />
      <Stack.Screen name="deliverDashboard" />
      <Stack.Screen name="trackDelivery" />
    </Stack>
  );
}
