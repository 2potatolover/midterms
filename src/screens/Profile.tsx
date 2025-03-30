import { Text, View, Button, Platform, TouchableOpacity, StatusBar, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import styles from "../styles/styles";

const Profile: React.FC<Props> = ({ navigation }) =>  {
    return (
        <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f5f5f5"
        translucent={Platform.OS === 'android'} 
      />

      <View style={styles.profileSection}>
        <View style={styles.pictureSlot} />
        <Text style={styles.userLabel}>User</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Jobs saved</Text>
          <Text style={styles.statValue}>8</Text>
        </View>
      </View>
    </View>

    )
}

export default Profile;