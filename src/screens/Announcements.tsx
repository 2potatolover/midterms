import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView, Switch, StyleSheet, Appearance, SafeAreaView, useColorScheme} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import styles from "../styles/styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar } from "react-native-calendars";

import { SafeAreaProvider } from 'react-native-safe-area-context';

const Announcements: React.FC<Props> = ({ navigation }) => {



    const jpcsLogo = require("../database/images/jpcsLogo.jpg");
    const [isEnabled, setIsEnabled] = useState(false);
        
    const toggleSwitch = () => setIsDark(previousState => !previousState);
    let[isDark, setIsDark] = useState(false);
  
    return (
      
        <SafeAreaProvider>
        <SafeAreaView style={styles.nameOfStyles(isDark)}>
            <Text style={styles.Text(isDark)}>Dark Mode</Text>
            <Switch
                
                style={{marginBottom:500, marginLeft:150}}
                trackColor={{ false: "light", true: "dark" }}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isDark}
                
              />
          
        </SafeAreaView>
      </SafeAreaProvider>

    )
}

export default Announcements;