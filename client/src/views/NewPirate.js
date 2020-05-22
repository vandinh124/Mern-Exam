import React from 'react';
import PirateForm from '../components/PirateForm';
import {navigate} from '@reach/router';

export default function NewPirate() {
    const newPirate = {
            name : '',
            position :'', 
            treasure : '',
            imageUrl : '',
            phrase: '',
            hookHand : true,
            pegLeg : true,
            eyePatch : true
        };
        
    return (
        <div>
            <h1>Add Pirate</h1>
            <button type="button" onClick={() => navigate("/pirates")}>Crew Board</button>
            <PirateForm
                pirate = {newPirate}
                method = "post"
                url = "http://localhost:8000/api/pirates"
                redirectUrl="/pirates"
                />
        </div>
    )

}