import { Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "../styles/styles";

const Home: React.FC<Props> = ({ navigation }) =>  {

    const events = [
        { id: '1', title: 'yadda yadda', description: 'yadda yadda', time: '2 hours ago' },
        { id: '2', title: 'yadda yadda', description: 'yadda yadda', time: '3 days ago' },
      ];
    return (
        <View style={styles.home_container}>
      {/* Top Bar */}
      {/* <View style={styles.topBar}>
        <Ionicons name="home-outline" size={24} color="#1D3B1D" />
        <Text style={styles.title}>Home</Text>
        <Ionicons name="person-circle-outline" size={28} color="#1D3B1D" />
      </View> */}


      {/* Upcoming Events */}
      <Text style={styles.sectionTitle}>Listed Jobs</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDescription}>{item.description}</Text>
            <Text style={styles.eventTime}>{item.time}</Text>
          </View>
        )}
      />
    </View>
    )
}

export default Home;