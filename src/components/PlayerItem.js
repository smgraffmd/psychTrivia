import React from 'react';
import { connect } from 'react-redux';

export const PlayerItem = (props) => (

    <div className="player__items">
        <svg height="100" width="100">
            <circle cx="50" cy="50" r="35" fill={props.colour} />
        </svg>

        <h3 >{props.name}</h3>
    </div>

)

export default PlayerItem;

