import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  //for login
    container: {
      flex: 1,
      backgroundColor: '#c8dec8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inner_container: {
      flex: 1,
      backgroundColor: '#c8dec8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBtn: {
      backgroundColor: '#3f9e77', 
      padding: 10,
      borderRadius: 12
      
    },
    loginTxt: {
      color: 'white',
      paddingHorizontal: '29%',
      paddingVertical: 4,

    },
    headerTxt: {
      fontSize: 40,
      zIndex: 1,
      paddingTop: 94

      },
    EmailTxt: {
      paddingRight: '60%',
      paddingTop: 0

    },
    emainInput: {
      backgroundColor: 'white', 
      width: '94%',
      borderWidth: 1,
      borderColor: '#c9c9c9',
      borderRadius: 4,
      margin: 12,
      height: 50
    },
    or: {
      margin: 20,
      paddingBottom: 4,
      fontSize: 13
    },
    TxtBelow: {
      alignItems: 'center',
      marginTop: '46%'
    }, 
    TxtB: {
      color: 'grey',
      fontSize: 11
    },
    logInImg: {
      top: -45,
      width: 300,
      height: 200,
      borderRadius: 100
    },

  //cut for login

  // tab bar styles
    tabStyles: {
      // bottom: -10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#086E3D',
      borderTopWidth: 0,
      position: 'absolute',
      elevation: 0,
      height: 60,
      flex: 1,
      justifyContent: 'center',

      
      
      
    },
    curvedLogo: {
      position: 'absolute',
      left: -28,
      bottom: 5,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    curvedLogoBox: {
      position: 'absolute',
      top: -30,
      left: 16,
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      width: 56,
      backgroundColor: '#086E3D',
      borderRadius: 35,
      shadowColor: 'black',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.6,
      elevation: 10
    },
    // END of tab bar styles


    // home styles

    home_container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#1D3B1D',
    },
    joinedEvents: {
      backgroundColor: '#D9EAD3',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1D3B1D',
      marginBottom: 10,
    },
    eventCard: {
      backgroundColor: '#B6D7A8',
      padding: 15,
      borderRadius: 10,
    },
    eventText: {
      fontSize: 16,
      color: '#1D3B1D',
      fontWeight: 'bold',
    },
    eventItem: {
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
    },
    eventTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#1D3B1D',
    },
    eventDescription: {
      fontSize: 14,
      color: '#666',
    },
    eventTime: {
      fontSize: 12,
      color: '#999',
    },
    // END of Home Styles

    //Announcements Styles
    jpcsImg: {
      marginTop: 10,
      width: 55,
      height: 55,
      borderRadius: 150,
      
    },
    announcements_img_container: {
      borderBottomWidth: 1,
      marginHorizontal: 20,
      padding: 3,
      borderBottomColor: '#BCB2B5'
    },
    announcements_inner_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      
    },
    announcements_icons_container: {
      flexDirection: 'row',
    },
    announcements_icons: {
      padding: 10,
    },
    announcements_setDate: {
      borderTopWidth: 1, 
      marginHorizontal: 20, 
      padding: 6, 
      borderTopColor: '#BCB2B5',
      flexDirection: 'row'
    },
    announcements_postEvent: {
      bottom: 20,
      alignItems: 'center',
      zIndex: 10,
      
    },
    announcements_postEventBtn: {
      backgroundColor: '#086E3D',
      borderRadius: 20
      
    },
    announcements_postEventTxt: {
      fontWeight: '900', 
      fontSize: 20, 
      padding: 20, 
      color: 'white'
    },
    announcement_InputTxt: {
      backgroundColor: 'white', 
      width: '94%',
      borderWidth: 1,
      borderColor: '#c9c9c9',
      borderRadius: 15,
      margin: 12,
      marginTop: 20
      // height: 50
    },
    announcement_InputTxt_multiline: {
      backgroundColor: 'white', 
      width: '94%',
      borderWidth: 1,
      borderColor: '#c9c9c9',
      borderRadius: 15,
      margin: 12,
      minHeight: 100,
      textAlignVertical: 'top',
      marginTop: 2
    },
    announcement_InputTxt_Points: {
      backgroundColor: 'white', 
      width: '50%',
      borderWidth: 1,
      borderColor: '#c9c9c9',
      borderRadius: 15,
      margin: 12,
      marginTop: 2
      // height: 50
    },
   
    // END OF ANNOUNCEMENTS

    // PROFILE STYLES
    profile_container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      padding: 16,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
    },
    profileSection: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      alignItems: 'center',
      width: '100%',
    },
    profileTopBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 16,
    },
    rightButtons: {
      flexDirection: 'row',
      gap: 16,
    },
    button: {
      padding: 8,
    },
    buttonText: {
      fontSize: 18,
    },
    profileTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      position: 'absolute',
      left: '50%',
      transform: [{ translateX: -50 }],
    },
    pictureSlot: {
      width: 100,
      height: 100,
      backgroundColor: '#ccc',
      borderRadius: 50,
      marginBottom: 16,
    },
    userLabel: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      marginTop: 16,
      width: '100%',
    },
    stat: {
      alignItems: 'center',
    },
    statLabel: {
      fontSize: 14,
      color: '#666',
    },
    statValue: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 4,
    },

    // END of PROFILE styles
  
    
  });


  export default styles;
  