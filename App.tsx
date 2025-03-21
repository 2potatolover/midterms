import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./src/styles/styles"
import AppNavigator from './src/navigation/AppNavigator';
export default function App() {
  return (
    <AppNavigator />
  );
}

