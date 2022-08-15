import React,{useEffect,useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import SignupScreen from './screens/SignupScreen';
import MainPage from './screens/LoginScreen copy';
import LoginScreen from './screens/LoginScreen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth'
import MessageScreen from './screens/MessageScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ChatScreen from './screens/ChatScreen';
import firestore from '@react-native-firebase/firestore'
import AccountScreen from './screens/AccountScreen';
import HomeScreen from './screens/HomeScreen';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);


const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
  },
};


const Stack = createStackNavigator();

const Navigation = ()=>{
  const [user,setuser] = useState('')
  useEffect(()=>{
   const unregister =  auth().onAuthStateChanged(userExist=>{
      if(userExist){
       
        firestore().collection('users')
        .doc(userExist.uid)
        .update({
          status:"online"
        })
        setuser(userExist)


      } 
 
      else setuser("")
    })

    return ()=>{
      unregister()
    }

  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
         headerTintColor:"red"
       }}
      
      >
        {user?
        <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="MessageScreen"  > 

         {props => <MessageScreen {...props}  user={user} />}
        </Stack.Screen>

        <Stack.Screen name="ChatScreen" options={({ route }) => ({ title:<View><Text>{route.params.name}</Text><Text>{route.params.status}</Text></View> })}>
          {props => <ChatScreen {...props} user={user} /> }
        </Stack.Screen>
        <Stack.Screen name="AccountScreen">
          {props => <AccountScreen {...props} user={user}/> }
        </Stack.Screen>
       
        
        </>
        :
        <>
         <Stack.Screen name="MainPage" component={MainPage} options={{headerShown:false}}/>
         <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/> */}
        <Stack.Screen name="signup" component={SignupScreen} options={{headerShown:false}}/>
        {/* <Stack.Screen name="hom" component={HomeScreen} options={{headerShown:false}}/> */}
        
        
       
        
        </>
        }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const App = () => {


  return (
    <>
      <PaperProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="red" />
       <View style={styles.container}>
         <Navigation />
       </View>
      </PaperProvider>

    </>
  );
};

const styles = StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:"white"
   }
});

export default App;