import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import styles from "../styles/styles";

const Rewards: React.FC<Props> = ({ navigation }) =>  {
    return (
        <View>
                 <View style={styles.joinedEvents}>
        <Text style={styles.sectionTitle}>Saved Jobs</Text>
        <View style={styles.eventCard}>
          <Text style={styles.eventText}>blank</Text>
        </View>
      </View>
        </View>
    )
}

export default Rewards;