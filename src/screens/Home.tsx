import { Text, View, FlatList, ActivityIndicator, StatusBar, Button, ToastAndroid, TextInput, Switch} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import styles from "../styles/styles";
import {useEffect, useState} from "react"
import filter from "lodash.filter";
import { SafeAreaView } from "react-native-safe-area-context";


  const  Api = () => {
    let[isLoading, setIsLoading] = useState(true);
    let[error,setError] = useState();
    let[savedata,setSavedData] = useState([]);
    let[response,setResponse] = useState([]);
    let[searchQuery,setSearchQuery] = useState();
    let[searchData, setSearchData] = useState([]);
    const toggleSwitch = () => setIsDark(previousState => !previousState);
    let[isDark, setIsDark] = useState(false);
    let ids = 1;

    useEffect(() => {
      fetch("https://empllo.com/api/v1")
      .then(res => res.json())
      .then(
        (result) => {
          let newData = result.jobs.map((data: any, idx: any) => ({ ...data, id: ids++ }))
          AsyncStorage.setItem('jobs', JSON.stringify(newData))
          setIsLoading(false)
          setResponse(newData)
          setSearchData(newData)
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

      const handleSearch = (query) => {
        setSearchQuery(query);
        const formattedQuery = query.toLowerCase();
        const filteredData = filter(searchData, (item) => {
            return contains(item, formattedQuery);
        })

        setResponse(filteredData);
    }
    const contains = ({ title }, query) => {

        if (title.toLowerCase()?.includes(query)) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <View style={styles.home_container(isDark)}>
      <Text style={styles.sectionTitle(isDark)}>Listed Jobs</Text>
      <TextInput placeholder="Search jobs here..."style={styles.searchbar}value={searchQuery} onChangeText={(query) => handleSearch(query)}></TextInput>
      <Text style={styles.Text(isDark)}>Dark Mode</Text>
<Switch
                onValueChange={toggleSwitch}
                value={isDark}
                
              />
              
      <FlatList
      
        data={response}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem(isDark)}>
            {getContent()}
            <Text style={styles.eventTitle(isDark)}>{item.title}</Text>
            <Text style={styles.eventDescription(isDark)}>{item.companyName}</Text>
            <Text style={styles.eventDescription(isDark)}>Minimum Salary: {item.minSalary}</Text>
            <Text style={styles.eventDescription(isDark)}>Maximum Salary: {item.maxSalary}</Text>
            <Button title="Save Data" onPress={() => addSavedJobs(item.id)}/>
              <Text></Text>
          </View>
        )}
      />
      
    </View>
    )
}
export default Api;
