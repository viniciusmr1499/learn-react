import React from 'react';
import { FaUsers } from 'react-icons/fa';

import './styles.css';

import Header from '../../components/Header';
// import Placar from '../../components/Placar';
import ListRepositories from '../../components/ListRepositories';

function Home() {
    return (
        <>
            <Header logo="Desafio Fortbrasil" icon={<FaUsers color="#000" size={27} />} />

            {/* <div className="container">
                <Placar />
            </div> */}
            <p>
                <h1>Repositories</h1>
                <ListRepositories />
            </p>
        </>
    );
}

export default Home;