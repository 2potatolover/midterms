import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView, Switch, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import styles from "../styles/styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar } from "react-native-calendars";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const Announcements: React.FC<Props> = ({ navigation }) => {



    const jpcsLogo = require("../database/images/jpcsLogo.jpg");
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const handleDayPress = (day: { dateString: string }) => {
        setSelectedDate(day.dateString);
    };
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Text>Dark Mode</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </SafeAreaView>
      </SafeAreaProvider>

    )
}

export default Announcements;