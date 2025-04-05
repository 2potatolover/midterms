import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Button, Modal, SafeAreaView, ActivityIndicator, Image, FlatList, Switch, Pressable, TextInput} from "react-native";
import { Props } from "../navigation/props";
import styles from "../styles/styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Rewards: React.FC<Props> = ({ navigation }) => {

    const [openModal, setOpenModal] = useState(false);
    const [savedJobs, setSavedJobs] = useState();
    const [savedID, setSavedID] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [jobData, setJobData] = useState([]);
    const isFocused = useIsFocused();
    const [refreshing, setRefreshing] = useState(false)
    const toggleSwitch = () => setIsDark(previousState => !previousState);
    let[isDark, setIsDark] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        fetchData();
    }, []);
    
    useEffect(() => {
        if (jobData && jobData.length > 0) {
            getSavedData();
        }
    }, [jobData]);
    const getSavedData = async () => {
       
        setIsLoading(true);
        try {
            let saved = await AsyncStorage.getItem('saved');
            saved = JSON.parse(saved)
            let savedData = [];
    
            if (saved) {
                jobData.forEach(data => {
                    if (saved.includes(data.id)) {
                        savedData.push(data)
                        console.log(saved)
                        return;

                    }
                })
                setSavedJobs(savedData);
            } else {
                setSavedJobs(null)
            }
        } catch (error) {
            console.error(error);
        }
         finally {
            setIsLoading(false);
        }
       
    }

    const fetchData = async () => {
        setIsLoading(true);
        
        try {
           
            const data: any = await AsyncStorage.getItem('jobs')
            // let saved = await AsyncStorage.getItem('saved');
            // saved = JSON.parse(saved)
            // const jobs = JSON.parse(data)
            if (data) {
                
                // jobs.map((job) => {
                //     console.log(job.id, job.title)
                // } )
                setJobData(JSON.parse(data))
                
            }
            // getSavedData();

        } catch (error: any) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    function renderModal() {
        return (
            <SafeAreaProvider>
            <SafeAreaView>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}>
                <View>
                  <View>
                    <Text>Hello World!</Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text>Hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
              </Pressable>
            </SafeAreaView>
          </SafeAreaProvider>
        )
    }

    const handleRefresh = () => {
        setRefreshing(true)

        fetchData()
        getSavedData()
        setRefreshing(false)
    }


    if (isLoading) {
        
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large"/>
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }



    return (
        <View style={styles.home_container(isDark)}>

            <Text style={styles.sectionTitle(isDark)}>Saved Jobs</Text>
            <Text style={styles.Text(isDark)}>Dark Mode</Text>
<Switch
                onValueChange={toggleSwitch}
                value={isDark}
                
              />
                  

              
                    {/* {savedJobs ? savedJobs.map(renderSavedJobs) : <Text>No jobs saved</Text>} */}
                    <FlatList
                    
                        data={savedJobs}
                        keyExtractor={(renderSavedJobs, index) => index.toString()}
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        
                        renderItem={({item}) => (
                            <View style={styles.eventItem(isDark)}>
                            
                            <Text style={styles.eventTitle(isDark)}>{item.title}</Text>
                            <Text style={styles.eventDescription(isDark)}>{item.companyName}</Text>
                            <Text style={styles.eventDescription(isDark)}>Minimum Salary: {item.minSalary}</Text>
                            <Text style={styles.eventDescription(isDark)}>Maximum Salary: {item.maxSalary}</Text>
                            <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            
            <Text>Name</Text>
            <TextInput style={styles.emainInput} placeholder=" Enter Email" editable></TextInput>
            <Text>E-mail</Text>
            <TextInput style={styles.emainInput} placeholder=" Enter Email" editable></TextInput>
            <Text>Contact No.</Text>
            <TextInput style={styles.emainInput} placeholder=" Enter Email" editable></TextInput>
            <Text>Why should we hire you?</Text>
            <TextInput style={styles.emainInput} placeholder=" Enter Email" editable></TextInput>
        
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Apply</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Apply</Text>
        </Pressable>
                          </View>
                          
                        )}
                        
                    />
                    
                {/* {savedJobs ? savedJobs.map((data) => {
                    return <Text>{data.id}   {data.title}</Text>
                }) : <Text>No saved jobs</Text>} */}

        </View>
    )
}
export default Rewards;
