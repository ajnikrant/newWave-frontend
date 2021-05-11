import React from 'react';

function Filter({ listingsArr }){
    return (
        <div>
            <select>
                <option>Whatevs</option>
                <option>Low to High</option>
                <option>High to Low</option>
            </select>
            <select>
                <option>Whatevs</option>
                <option>Sale only</option>
                <option>Trade only</option>
            </select>
        </div>
    )
}

export default Filter