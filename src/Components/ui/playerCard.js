import React from 'react';

const PlayerCard = (props) => (
    <div className="player_card_wrapper"> 
        <div className="player_card_thmb" style={{background:`#f2f9ff url(${props.bck})` }}>

        </div>
        <div className="player_card_info">
            <div className="player_card_number">
                {props.number}
            </div>
            <div className="player_card_name">
                <span>{props.name}</span>
            </div>
        </div>
    </div>
);

export default PlayerCard;