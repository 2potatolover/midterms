import { Text, View, FlatList, ActivityIndicator, StatusBar, Button, ToastAndroid} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import styles from "../styles/styles";
import {useEffect, useState} from "react"



  const  Api = () => {
    let[isLoading, setIsLoading] = useState(true);
    let[error,setError] = useState();
    let[savedata,setSavedData] = useState([]);
    let[response,setResponse] = useState([]);
    let ids = 1;

    useEffect(() => {
      fetch("https://empllo.com/api/v1")
      .then(res => res.json())
      .then(
        (result) => {
          let newData = result.jobs.map((data: any, idx: any) => ({ ...data, id: ids++ }))
          setIsLoading(false)
          setResponse(newData)
        },
        (error) => {
          setIsLoading(false);
        setError(error)
        }
      )
    }, []);

    const getContent = () => {
      if (isLoading) {
        return <Text>None</Text>
  
      }
      if(error) {
        return <Text>{error}</Text>
      }
      return <>{response.map((item) => {
        <Text>
          {item.title}
        </Text>
      })}</>

    };

    const addSavedJobs = async (id) => {

        let jobArray = await AsyncStorage.getItem('saved');
        jobArray = JSON.parse(jobArray)

        if (jobArray) {
            let array = jobArray
            array.push(id);

            try {
                await AsyncStorage.setItem('saved', JSON.stringify(array));
                ToastAndroid.show(
                    "Job Saved", ToastAndroid.SHORT
                );

            }
            catch(error){
              return console.error(error)
            }

        } else {
            let array = []
            array.push(id);

            try {
                await AsyncStorage.setItem('saved', JSON.stringify(array));
                ToastAndroid.show(
                    "Job Saved", ToastAndroid.SHORT
                );

            } catch (error) {
                console.error(error);
                return;
            }
        }



    }

    const events = [
        { id: '1', title: 'yadda yadda', description: 'yadda yadda', time: '2 hours ago' },
        { id: '2', title: 'yadda yadda', description: 'yadda yadda', time: '3 days ago' },
      ];
    return (
        <View style={styles.home_container}>
      <Text style={styles.sectionTitle}>Listed Jobs</Text>
      <FlatList
      
        data={response}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            {getContent()}
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDescription}>{item.companyName}</Text>
            <Text style={styles.eventDescription}>Minimum Salary: {item.minSalary}</Text>
            <Text style={styles.eventDescription}>Maximum Salary: {item.maxSalary}</Text>
            <Text style={styles.eventTime}>{item.id}</Text>
            <Button title="Save Data" onPress={() => addSavedJobs(item.id)}/>
          </View>
        )}
      />
    </View>
    )
}
export default Api;