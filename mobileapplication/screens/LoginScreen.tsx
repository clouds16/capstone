import * as React  from 'react';
import {useState} from 'react'
import { StyleSheet , Button, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }) {

  let [userinfo, setUserInfo] = useState({ 
    email: "",
    password: ""
  })

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  

  function buttonPress( ) {
    navigation.push("Profile")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={styles.input}
        onChangeText={setEmail }
        value={email}
        placeholder="Email"
        keyboardType = "default"
     
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword }
        value={password}
        placeholder="Password"
     
      />
      <Button
        onPress={buttonPress}
        title="Login!"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    backgroundColor: 'white'
  },
});
