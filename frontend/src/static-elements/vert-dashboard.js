import React from 'react';
import { useHistory } from 'react-router-dom';

const VerticalDash = (props) => {
   
    let pushhistory = useHistory();

    function onButtonClick(e) {
        const newDest = '/profile/' + props.params.id + "/" + e.target.name
        console.log(newDest)
    }

    return (

        <div className="h-screen w-100 flex flex-col m-2" >
            <button onClick={onButtonClick} name="profile" className="m-2 border-black bg-blue-400 border-2 w-full h-20 ">Profile </button> 
            <button onClick={onButtonClick} name="Charts" className="m-2 border-black bg-blue-400 border-2 w-full h-20 ">Video Lessons</button>
            <button className="m-2 border-black bg-blue-400 border-2 w-full h-20 ">Check Progress</button>
            <button className="m-2 border-black bg-blue-400 border-2 w-full h-20 ">Charts </button>
            <button className="m-2 border-black bg-blue-400 border-2 w-full h-20 ">Charts </button>
            <button className="m-2 border-black bg-blue-400 border-2 w-full h-20 ">Settings </button>  
        </div>
    );
};

export default VerticalDash;