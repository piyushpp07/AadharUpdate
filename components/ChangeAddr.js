import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';

const ChangeAddr = ({ navigation }) => {
   const [no, setNo] = useState();
   const [show, setShow] = useState(false)
   return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
         <Text style={{ fontSize: 28, fontWeight: '700', top: 2 }}>Change Address</Text>
         <Text style={{ fontSize: 16, fontWeight: '500', left: 3, }}>To Change your Address details enter your Landlord’s Aadhar number/Phone no.,
            then ask him/her to verify your details and share the OTP with you</Text>
         {show === false ? (<>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Owners Phone No</Text>
            <View style={{ width: 310, top: 90 }}>
               <TextInput
                  label="Phone No"
                  value={no}
                  onChangeText={no => setNo(no)}
                  style={{ bottom: 70 }}
               />
            </View>
            <Button style={{ top: 40, borderRadius: 10 }} mode='contained' onPress={() => { setShow(true) }}>Next</Button></>
         ) :
            (
               <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Owners Phone No</Text>
                  <View style={{ width: 310, top: 90 }}>
                     <TextInput
                        label="Enter OTP"
                        value={no}
                        onChangeText={no => setNo(no)}
                        style={{ bottom: 70 }}
                     />

                  </View>


                  <Button style={{ top: 40, borderRadius: 10 }} mode='contained' onPress={() => { setShow(true) }}>Verify</Button>

               </View>
            )}


      </View>
   );
}

const styles = StyleSheet.create({})

export default ChangeAddr;
