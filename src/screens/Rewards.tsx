import { Text, View, ScrollView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import styles from "../styles/styles";
import {useEffect, useState} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Rewards = () =>  {
  const [marcomendolia,setMarcoMendolia] = useState([]);
  useEffect(() => {
    marcoFranco()
  },[])
  const marcoFranco =async () => {
    let marcomarco = await AsyncStorage.getItem('saved');
    marcomarco = JSON.parse(marcomarco)
    setMarcoMendolia(marcomarco)
  }
    return (
      <ScrollView>
        <View>
                 <View style={styles.joinedEvents}>
        <Text style={styles.sectionTitle}>Saved Jobs</Text>
        <View style={styles.eventCard}>
          <Text style={styles.eventText}>{marcomendolia}</Text>
        </View>
      </View>
        </View>
        </ScrollView>
    )
}

export default Rewards;