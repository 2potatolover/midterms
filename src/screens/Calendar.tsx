import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';
import styles from "../styles/styles";

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
            <Text>Name</Text>
            <TextInput style={styles.emainInput} placeholder=" Enter Email" editable></TextInput>
            <Text>E-mail</Text>
            <TextInput style={styles.emainInput} placeholder=" Enter Email" editable></TextInput>
            <Text>Contact No.</Text>
            <TextInput style={styles.emainInput} placeholder=" Enter Email" editable></TextInput>
            <Text>Why should we hire you?</Text>
            <TextInput style={styles.emainInput} placeholder=" Enter Email" editable></TextInput>
            
    </View>
  );
};


export default CalendarPage;