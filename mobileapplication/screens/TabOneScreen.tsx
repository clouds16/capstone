import * as React  from 'react';
import {useState , useEffect} from 'react'
import { StyleSheet , Button, TextInput , ScrollView , SafeAreaView , Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Line } from 'react-chartjs-2'
import YoutubePlayer from 'react-native-youtube-iframe';
import Axios from 'axios'


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'> ) {


  const userID = "616e339efc6733eb328488f7"
  const backendURL = 'http://localhost:3001'

  const [userInfo , setUserInfo] = useState({
    fname : "" ,
    lname: "",
    userID: ""
  })

    useEffect(()=> {
      Axios.get(backendURL+ '/profile/' + userID)
        .then( (res) =>  {
          console.log(res);

          setUserInfo(prevState => ({
            ...prevState,
            ["fname"]: res.data.fname,
            ["lname"]: res.data.lname,
            ["userID"] : res.data._id
        }));
        console.log(userInfo)
          
        })
          .catch( e=> console.log( " Could not gather info"))
    }, [] )


  function buttonPress() {
    return "Some Text"
  }

  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };



  return (
    <View style={styles.page}>
      <ScrollView > 
        <Text> Welcome {userInfo.fname } ,{userInfo.lname} </Text>
        <View style= {styles.container}> 
          <Text > Welcome { userInfo.fname} </Text>
        </View>

        <Text> Recent Achievements </Text>

        <View style={styles.container}>
          <Line data={data} options={options} />
        </View>

        <Text> Upcoming Workouts </Text>

        <View style={styles.container}>
        <YoutubePlayer height={300} play={true} videoId={'6_hfafaneag'}/>
        </View>




      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },


  container : {
    padding: 10 ,
    margin : 20 , 
    backgroundColor : 'white' ,
    color :  'black',
    height: 200, 
    borderRadius : 20
    
  },
  image: {
    height: 30,
    width: 30, 
    scale : .5
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});


// var styles = StyleSheet.create({

// });