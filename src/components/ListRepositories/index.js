import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function ListRepositories() {
    const [repositories, setRepositories] = useState([]);
    
    useEffect(() => {
        api.get(`users/viniciusmr1499/repos`).then(response => {
            setRepositories(response.data);
        })
        .catch(err => {
            console.log('error', err);
        });
    }, []);

    return (
        <>
            <ul>
                {repositories.map(repo => (
                    <li key={repo.id} >{repo.name}</li>
                ))}
            </ul>
        </>
    );
}