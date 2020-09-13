import React, { useState } from 'react';

import './styles.css'

export default function Placar() {
    const [saoPaulo, setSaoPaulo] = useState(0);
    const [palmeiras, setPalmeiras] = useState(0);
    
    function golSaoPaulo() {
        let result = saoPaulo + 1;

        setSaoPaulo(result);
    }

    function golPalmeiras() {
        let result = palmeiras + 1;

        setPalmeiras(result);
    }

    return (
        <>
            <div>
                <h1>Placar do JOGO</h1>
                
                <div className="game">
                    <span>São paulo: {saoPaulo}</span> x <span>Palmeiras: {palmeiras}</span>
                </div>

                <div className="buttons">
                    <button type="button" onClick={golSaoPaulo}>Gol são paulo</button>

                    <button type="button" onClick={golPalmeiras}>Gol são paulo</button>
                </div>
            </div>
        </>
    );
}