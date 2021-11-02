import React, {useState , useEffect} from 'react';
import Axios from "axios"
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Line} from 'react-chartjs-2'


const Profile = (props) => {
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



    const handleDragStart = (e) => e.preventDefault();
    
    let [user , setUser] = useState(props.match.params.id)
    let [userData, setUserData] = useState({})

    useEffect(() => {
        Axios.get('/profile/'+ user).then( (res) => {
            setUserData(...userData , res )
        }).catch( e => console.log(e))
    }, [])

    
    return (
        <div className="w-screen h-screen bg-yellow-300  flex">
            
            <div className="grid grid-cols-2 gap-4  ">
              <div className=" bg-blue-500 m-10 ">
                    Left
              </div>

              <div className=" bg-green-100 m-10 p-5" >
                <div className='header'>
                    <h1 className='title'>Line Chart</h1> 
                </div>
                <Line data={data} options={options} />
              </div>
            </div>
        </div>
    );
};

export default Profile;



// mport React from 'react';
// import { Line } from 'react-chartjs-2';



// const LineChart = () => (
//   <>

//   </>
// );

// export default LineChart;