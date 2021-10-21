import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Axios from "axios"
import { useHistory } from 'react-router-dom';


import Toning from "../../images/selectprogram/toning.jpg"
import Light from "../../images/selectprogram/trainer.jpeg"
import Moderate from "../../images/selectprogram/muscular-2.jpeg"
import Extreme from "../../images/selectprogram/muscular.jpeg"


const SelectSchedule = (props) => {
    const userid = props.match.params.id ;  
    
    const history = useHistory();

    let [profileInfo , setProfileInfo] = useState({
        program : ""
    })

    useEffect( () => {

        // Axios.get("/profile/" + userid  ).then( (res) => {

        // })
        // .catch(e => console.log(e))

    }, []);


    function buttonPressed(e) {
        //setProfileInfo(...profileInfo , profileInfo.program = e.target.name)
        console.log(profileInfo)
        history.push('/profile/:id/')
        
    }

   
    return (
        <section className="page font-serif">
            <div className="select-program bg-gray-100 self-center  text-center p-5s text-6xl "> Select a Schedule </div>

            <div className="h-screen w-full bg-gray-100 flex flex-row justify-center ">
                <button onClick={buttonPressed}  name="weight-loss" className="relative flex-1 m-14 bg-red-400 flex hover:m-2 hover:bg-blue-300 rounded-2xl  overflow-hidden hover:border-green-500 hover:border-10 hover:border-box">
                    <img src={Light} alt="" className=" block object-cover   transition-shadow" />
                    <h2 className="p-3  text-center  text-8xl text-white absolute"> Light</h2>
                </button>

                <button onClick={buttonPressed} name="toning" className=" relative flex-1 m-14 bg-red-400 flex hover:m-2 hover:bg-blue-300  rounded-2xl overflow-hidden">
                    <img src={Moderate} alt="" className="block object-cover   transition-shadow" />
                    <h2 className="p-3  text-center  text-8xl text-white absolute"> Moderate </h2>
                </button>

                <button onClick={buttonPressed} name="bulking" className="relative flex-1 m-14  bg-red-400 flex hover:m-2 hover:bg-blue-300 rounded-2xl  overflow-hidden ">
                    <img src={Extreme} alt="" className="block object-cover" />
                    <h2 className="p-3  text-center  text-8xl text-white absolute"> Extreme </h2>
                </button>
            
            </div>
        </section>
        
    );

};

export default SelectSchedule;



