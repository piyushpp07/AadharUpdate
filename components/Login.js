import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import AadharColor from '../assets/AadharColor.svg'
import { Button, TextInput } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';
function Login({ navigation }) {
   const [a, setA] = useState(true)
   const [b, setB] = useState(false)
   const [text, setText] = useState()
   const [otp, setOtp] = useState()
   return (

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bottom: 50 }}>
         <Image source={require('../assets/Aadhar-Color.png')} style={styles.logo} />
         {
            a === true ?
               (<TouchableOpacity style={styles.btn1} onPress={() => { setA(false) }}>
                  <Text style={{ color: 'white' }}>Get Started  </Text>
               </TouchableOpacity>) :
               (<View style={{ width: 290 }}>
                  <KeyboardAvoidingView>
                     <Text style={{ alignItems: 'center', color: 'black', fontWeight: 'bold', fontSize: 20, width: 400, height: 120 }}>
                        Enter your Aadhar no :
                     </Text>
                     <TextInput
                        label="Aadhar No"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={{ bottom: 70 }}
                     />
                     <Button mode='contained' onPress={() => { setB(true) }} style={styles.btn2}> Send OTP </Button >
                     {b === true ? <>
                        <TextInput label="Enter 6 digit OTP"
                           value={otp}
                           onChangeText={otp => setOtp(otp)} style={{ bottom: 25 }} />
                        <TouchableOpacity style={{ bottom: 15 }}>
                           <Text style={{ fontWeight: '800' }}>Resend OTP</Text>
                        </TouchableOpacity>
                        <Button mode='contained'
                           onPress={() => { navigation.navigate('Home') }} style={{ backgroundColor: 'red' }} >
                           Next</Button>
                     </> : <></>}
                  </KeyboardAvoidingView>
               </View >
               )
         }
      </View >


   );
}

const styles = StyleSheet.create({
   logo: {
      width: 158,
      height: 108,
      bottom: 60
   },
   btn1: {
      width: 320,
      height: 40,
      top: 19,
      backgroundColor: '#005A9C',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,

   },
   btn2: {
      bottom: 50
   }
})

export default Login;
