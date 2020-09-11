import React from 'react';

const Smurf = ({smurf}) => {

    return <div className='smurf-card'>
        <h2>{smurf.name}</h2>
        <div>
            <p>{smurf.age} years old</p>
            <p>{smurf.height} tall</p>
        </div>
    </div>
}

export default Smurf