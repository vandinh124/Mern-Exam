import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

export default function PirateForm({pirate, method, url, redirectUrl}) {

    const [name, setName] = useState(pirate.name); 
    const [position, setPosition] = useState(pirate.position);
    const [treasure, setTreasure] = useState(pirate.treasure);
    const [imageUrl, setImageUrl] = useState(pirate.imageUrl);
    const [phrase, setPhrase] = useState(pirate.phrase);
    const [hookHand, setHookHand] = useState(pirate.hookHand);
    const [pegLeg, setPegLeg] = useState(pirate.pegLeg);
    const [eyePatch, setEyePatch] = useState(pirate.eyePatch);

    const [errors, setErrors] = useState([]);


    function onSubmitHandler (e) {
        e.preventDefault();
        setErrors([]);
        axios[method](url,{
            name,
            position, 
            treasure,
            imageUrl,
            phrase,
            hookHand,
            pegLeg,
            eyePatch
        })
            .then(() => navigate('/pirates'))
            .catch(err => {
                const errs = [];
                const innerErrorObj = err.response.data.errors;

                for(const key in innerErrorObj){
                    errs.push(innerErrorObj[key].message);
                }
                setErrors(errs);
            })
    }   
    return (
        <>
            {errors.map((error, i)=> (
                <p key={i} style={{color: 'red'}}>{error}</p>
            ))}
            <form onSubmit={onSubmitHandler}>
                <div>
                    <p>Pirate name</p>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange = {e=>setName(e.target.value)}/>

                    <p>Image URL</p>
                    <input
                        name="imageUrl"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}/>

                    <p># of Treasure chests:</p>
                    <input 
                        type="number" 
                        name="treasure" 
                        value={treasure} 
                        onChange = {e => setTreasure(e.target.value)}/>
                    
                    <p>Pirate Catch Phrase</p>
                    <input 
                        type="text" 
                        name="phrase" 
                        value={phrase} 
                        onChange = {e=>setPhrase(e.target.value)}/>
                </div>
                <div>
                    <p>Crew Position:</p>
                    <select onChange={ e => setPosition(e.target.value)}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quater Master">Quater Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>                        
                    </select><br/>

                    <label>Peg Leg</label>
                    <input
                        type="checkbox"
                        checked={pegLeg}
                        onChange={e => setPegLeg(e.target.checked)}
                    /><br/>

                    <label>Eye Patch</label>
                    <input
                        type="checkbox"
                        checked={eyePatch}
                        onChange={e => setEyePatch(e.target.checked)}
                    /><br/>

                    <label>Hook hand</label>
                    <input
                        type="checkbox"
                        checked={hookHand}
                        onChange={e => setHookHand(e.target.checked)}
                    />  <br/>                 
                    
                </div>
                <button>Submit</button>{'   '}
                <button type="button" onClick={() => navigate(redirectUrl)}>Cancel</button>
            </form>
        </>
    )
}
