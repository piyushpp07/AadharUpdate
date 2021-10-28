import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

const Home = ({ navigation }) => {
   return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#FFFFFF", padding: 30 }}>
         <Text style={styles.hea}>Aadhar Details</Text>
         <Avatar.Image size={160} source={require('../assets/icon.png')} style={styles.img} />
         <View style={{ top: 20, alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
            <Text style={styles.t1}>Name:Piyush Paradkar</Text>
            <Text style={styles.t2}>Gender: M</Text>
            <Text style={styles.t2}>Address: 176/24 Rani Durgawati ward Pandhurna Dist Chhindwara</Text>
         </View>
         <Button style={{ top: 50 }} onPress={() => {
            navigation.navigate("ChangeAddress")
         }} mode="contained">Change Address</Button>
      </View>

   );
}

const styles = StyleSheet.create({
   hea: {

      fontWeight: 'bold',
      fontSize: 25
   },
   t1: {
      fontWeight: 'bold',
      fontSize: 20
   },
   t2: {
      fontWeight: 'bold',
      fontSize: 18,
   },
   img: {
      top: 10
   }
})

export default Home;
