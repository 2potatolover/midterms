import { Button, Text, TextInput, TouchableOpacity, View, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Props } from '../navigation/props'
import styles from "../styles/styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const LogIn: React.FC<Props> = ({ navigation }) =>  {

    const logInImg = require("../database/images/logInImg.png")

    return (
        <DismissKeyboard>
            <View style={styles.container}>
           <ScrollView>
           <View style={styles.inner_container}>
           <Text style={styles.headerTxt}>Job Finder</Text>
            <View>
                <Image source={logInImg} style={styles.logInImg}/>
            </View>
            <Text style={styles.EmailTxt}>E-mail</Text>
            <TextInput style={styles.emainInput} placeholder=" Enter Email" editable></TextInput>
            <Text style={styles.EmailTxt}>Password</Text>
            <TextInput style={styles.emainInput} placeholder=" Enter password" editable></TextInput>
            <TouchableOpacity style={styles.loginBtn}onPress={() => navigation.navigate('HomeScreenNavigator')} >
                <Text style={styles.loginTxt}>
                    Continue
                </Text>
            </TouchableOpacity>
            </View>
           </ScrollView>
            
            
        </View>
        </DismissKeyboard>
        
    )
}

export default LogIn;