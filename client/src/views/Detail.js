import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate} from '@reach/router';


export default ({id}) => {
    const [pirate, setPirate] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(res=>setPirate(res.data))
    },[id])


    if (pirate===null) return 'Loading...';
    return (
        <>
            <div>
                <button type="button" onClick={() => navigate("/pirates")}>Crew Board</button>
                <h1>{pirate.name}</h1>
                <img src={pirate.imageUrl} alt={pirate.name} width="300" height="300"/>  
                <h2>{' "' + pirate.phrase + '" '}</h2>
            </div>
            <div>
                <h2>About</h2>
                <p>Position: {pirate.position}</p>
                <p>Treasure: {pirate.treasure}</p>
                <p>Peg Leg: {pirate.pegLeg ? 'Yes' : 'No'}</p>
                <p>Eye Patch: {pirate.eyePatch ? 'Yes' : 'No'}</p>
                <p>Hook hand: {pirate.hookHand ? 'Yes' : 'No'}</p>
            </div>
            
        </>
    )
}