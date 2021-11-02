import React, {useState , useEffect} from 'react';
import Axios from "axios"
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



import WeightLoss from "../../images/selectprogram/weightloss-2.jpeg"
import Cutting from "../../images/selectprogram/cardio.jpg"
import Bulking from "../../images/selectprogram/muscular.jpeg"
import Toning from "../../images/selectprogram/toning.jpg"
import Light from "../../images/selectprogram/trainer.jpeg"
import Moderate from "../../images/selectprogram/muscular-2.jpeg"
import Extreme from "../../images/selectprogram/muscular.jpeg"

const Profile = (props) => {
    
    const handleDragStart = (e) => e.preventDefault();
    
    let [user , setUser] = useState(props.match.params.id)
    let [userData, setUserData] = useState({})

    useEffect(() => {
        Axios.get('/profile/'+ user).then( (res) => {
            setUserData(...userData , res )
        }).catch( e => console.log(e))
    }, [])

    

    const items = [
        <img src={Toning} onDragStart={handleDragStart} />,
        <img src={Cutting} onDragStart={handleDragStart} />,
        <img src={Bulking} onDragStart={handleDragStart} />,
];
    return (
        <section className="w-screen h-screen bg-yellow-300 flex ">
            <div className="w-full h-full bg-blue-500 ">
                    Left
            </div>

            <div className="w-full h-full bg-green-100 flex-row" >
                <div className="flex-1  bg-pink-300" > 
                    Top 
                </div>
                <div className="flex-1  border-indigo-700">
                    
                </div>
            </div>
        </section>
    );
};

export default Profile;