import React, { useState, useEffect } from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import LogoutButton from '../components/LogoutButton';

export default function AllPirates() {
    const [pirates, setPirates] = useState([]);
    // const [hasError, setHasError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates',{
            withCredentials: true
        })
            .then(res => setPirates(res.data))
            // .catch(() => setHasError(true))
            .catch(() => navigate('/login'))
    }, []);


    function handleDelete(id){
        axios.delete('http://localhost:8000/api/pirates/' + id)
        .then(() => setPirates(pirates.filter(pirate => pirate._id !== id)))
    }

    // if(hasError) return 'Something went wrong';      

    if(pirates === null) return "Loading";

    return (
        <>
        <LogoutButton />
        <div>            
            <h1>Pirate Crew </h1>
            <button type="button" onClick={() => navigate("/pirate/new")}>Add Pirate</button>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {pirates.map(pirate => (
                        <tr key={pirate._id}>
                            <td><Link to={"/pirate/" + pirate._id}><img src={pirate.imageUrl} alt={pirate.name} width="100" height="100"/> </Link></td>
                            <td><h3>{pirate.name}</h3></td>
                            
                            <td>
                                <button onClick={() => navigate('/pirate/' + pirate._id )}>View Pirate</button>{'   '}
                                <button onClick={() => handleDelete(pirate._id)}>Walk the Plank</button>
                            
                                
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
        </>
    )
}