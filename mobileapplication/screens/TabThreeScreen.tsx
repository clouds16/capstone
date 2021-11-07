import * as React  from 'react';
import {useState} from 'react'
import { StyleSheet , Button, TextInput , TouchableOpacity ,  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Collapsible from 'react-native-collapsible';
import DropDownPicker from 'react-native-dropdown-picker';
import { Title } from 'chart.js';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  let [isButton1 , setIsButton1] = useState(true)
  let [isButton2, setIsButton2] =  useState(true)


  let [weight, setWeight] = useState("")
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [units, setUnits] = useState([
    {label: 'lbs', value: 'lbs'},
    {label: 'kg', value: 'kg'}
  ]);

  const [muscleGroup, setMuscleGroup] = useState([
    {label: 'Shoulders', value: 'shoulders'},
    {label: 'Bicep', value: 'bicep'},
    {label: 'Tricep', value: 'tricep'},
    {label: 'Upper Back', value: 'uback'},
    {label: 'Lower Back', value: 'lback'},
    {label: 'Calves', value: 'calves'},
    {label: 'Legs', value: 'legs'}
  ]);

  function buttonPress() {
    isButton1 ? setIsButton1(false) : setIsButton1(true)
  }

  function button2Pressed() {
    isButton2 ? setIsButton2(false) : setIsButton2(true)
    
  }

  return (
    <View style={styles.container}>
      <Button onPress={buttonPress} title="Add New Workout" > </Button>
      <Collapsible collapsed={isButton1} style={ styles.collapsed}>
        <Text > Some text that should be Button1</Text>
        <TextInput style={styles.input}
          
          onChangeText={setWeight}
          value={weight}
          placeholder="Enter Weight"
          keyboardType="numeric" />

        <DropDownPicker
          
          open={open}
          value={value}
          items={units}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setUnits}/>

        <Button onPress={()=> console.log("is pressed")} title="Submit"></Button>

      </Collapsible>

      <Button onPress={button2Pressed} title="Add new Weight" > </Button>
      <Collapsible collapsed={isButton2}>
        <Text > Section2</Text>
      </Collapsible>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
    color: 'rgba(255,255,255)'
  },
  buttonStyle:{
    alignItems:'center',
    backgroundColor: '#F92660',
    width:150,
    height:50,
    marginTop:20,
    marginBottom:10,
    marginRight:15,
    padding:5,
  },
  collapsed: {
    padding: 10,
    margin : 10,
    height: 400,
    backgroundColor : 'white',
    borderRadius: 10
  }, 
  buttondist: {
    margin: 10,

  }
});
