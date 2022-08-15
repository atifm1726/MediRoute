import React,{useState} from 'react'
import { View, Text ,Image,StyleSheet,KeyboardAvoidingView,TouchableOpacity,ActivityIndicator,ScrollView} from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


export default function SignupScreen({navigation}) {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [image,setImage] = useState(null)
    const [showNext,setShowNext] = useState(false)
    const [loading,setLoading] = useState(false)
    if(loading){
        return  <ActivityIndicator size="large" color="#00ff00" />
    }
    const userSignup = async ()=>{
        setLoading(true)
        if(!email || !password || !name){
               alert("please add all the field")
               return 
        }
        try{
          const result =  await auth().createUserWithEmailAndPassword(email,password)
            firestore().collection('users').doc(result.user.uid).set({
                name:name,
                email:result.user.email,
                uid:result.user.uid,
                pic:image,
                status:"online"
            })  
            setLoading(false)
        }catch(err){
            alert("something went wrong")
        }
       

    }
    
    return (
        <ScrollView>

        
        <KeyboardAvoidingView behavior="position">
            <View style={styles.box1}>
               
                <Image style={styles.img} source={require('../assets/hee.png')} />
            </View>
            <View style={styles.box2}>
                {!showNext && 
                <>
                 <TextInput
                 label="Email"
                 value={email}
                 onChangeText={(text)=>setEmail(text)}
                 mode="outlined"
                />
                <TextInput
                 label="password"
                 mode="outlined"
                 value={password}
                 onChangeText={(text)=>setPassword(text)}
                 secureTextEntry
                />
                 <TextInput
                 label="Full Name"
                 mode="outlined"
                />
                 <TextInput
                 label="Address"
                 mode="outlined"
                />
                 <TextInput
                 label="Contact Number"
                 mode="outlined"
                 keyboardType='numeric'
                />
                </>
                }
               
               {showNext ?
                <>
                 <TextInput
                 label="Name"
                 value={name}
                 onChangeText={(text)=>setName(text)}
                 mode="outlined"
                />
                
                <Button
                mode="contained"
                style={{marginTop:20}}
                onPress={()=>userSignup()}
                >Signup</Button>

               <TouchableOpacity style={{textAlign:"center", marginTop:25,marginLeft:115}} onPress={()=>navigation.goBack()}>
                   <Text>
                       Go Back
                   </Text>
               </TouchableOpacity>

                </>
                :
                 <Button
                 style={{marginTop:20}}
                mode="contained"
                onPress={()=>setShowNext(true)}
                >Next</Button>
                }

              <TouchableOpacity onPress={()=>navigation.goBack()}><Text style={{textAlign:"center", marginTop:25}}>Already have an account ?</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize:22,
        color:"green",
        margin:15
    },
    img:{
        width:250,
        height:250
    },
    box1:{
        alignItems:"center"
    },
    box2:{
    width:"70%",
        justifyContent:"center",
        height:"50%",
        margin:20,
        marginLeft:55
    }
 });