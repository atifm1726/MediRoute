import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'

import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {FAB} from 'react-native-paper';

const Home = ({navigation}) => {
  return (
    <ScrollView>
         <View style={styles.bg}>
         <FAB
        style={styles.fab}
        icon="face-profile"
        color="black"
        onPress={() => navigation.navigate("AccountScreen")}
    /> 
         <Image style={{height:250, width:250, }}  source={require('../assets/logomedi.jpeg')}/>

        </View>
       

        <View style={styles.bg2}>
     
        </View>

        <View style={styles.bg1}>
          
        <TouchableOpacity style={styles.top1}  onPress={() => navigation.navigate('MessageScreen')}>
        <Text  
        style={styles.tip1}>| Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.top2} >
        <Text style={styles.tip1}>| Notfications</Text>
        </TouchableOpacity>
        
        
        </View>

        <View style={styles.bg2}>
          <TouchableOpacity style={styles.top3}>
             <Text style={styles.tip1}> | Online Appointment
             </Text>
           </TouchableOpacity>

        </View>


      
    
   

      
    </ScrollView>
    
  )

};

const styles=StyleSheet.create({
 bg:{
   flex:1,
  backgroundColor:'#FFDADA',
  alignItems:'center'
 },
 bg1:{
  flex:2,
 backgroundColor:'#FFDADA',
 flexDirection:'row',
 alignItems:'center'
},
bg2:{
  flex:6,
 backgroundColor:'#FFDADA',
 flexDirection:'row',
 alignItems:'center',

},

 top1:{
  marginTop:100,
  borderRadius:11,
  borderWidth:1,
  width:'35%',
  padding:15,
  alignItems:'center',
  borderColor:'#FFDADA',
  backgroundColor:'red',
  paddingBottom:60,
  paddingTop:60,
  paddingLeft:20,
  marginLeft:10,
  borderWidth:1,
  marginBottom:200
  
 },
 tip1:{
  fontWeight:'bold',
  color:'white'
 },
 top2:{
  marginTop:100,
  borderRadius:11,
  borderWidth:1,
  width:'35%',
  padding:15,
  alignItems:'center',
  borderColor:'#FFDADA',
  backgroundColor:'red',
  paddingBottom:60,
  paddingTop:60,
  paddingLeft:20,
  marginLeft:95,
  marginBottom:200,
  borderWidth:1


},
fab: {
  position: 'absolute',
  margin: 16,
  right: 0,
  bottom: 0,
  backgroundColor:"white"
},
top3:{
  width:'35%',
  alignItems:'center',
  borderColor:'#FFDADA',
  backgroundColor:'red',
  paddingBottom:60,
  paddingTop:60,
  paddingLeft:20,
  marginLeft:10,
  marginBottom:1,
  borderWidth:1,
  borderRadius:11,
  marginTop:-180
 
  
},

top4:{
    width:'35%',
   
    alignItems:'center',
    borderColor:'#FFDADA',
    backgroundColor:'red',
    paddingBottom:60,
    paddingTop:70,
    paddingLeft:20,
    marginLeft:95,
    marginBottom:1,
    borderWidth:1,
    borderRadius:11,
    marginTop:-180
},
top5:{
  
  alignItems:'center',
  borderColor:'#FFDADA',

 
  marginRight:-1,
  borderWidth:1,
  borderRadius:11,
  marginTop:30,
  marginLeft:10
},
tip2:{
  paddingLeft:5
}
})

export default Home;