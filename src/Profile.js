import React from 'react';
import SaleDetails from './SaleDetails';

function Profile({profileDetails}){
    const {username, sales, email, location, avatar="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"}= profileDetails


    
    return (
        <div>
            <h3>Welcome back {username}!</h3>
            <img src={"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"} alt={username} />
            <p> Email: {email}</p>
            <p>Your location: {location}</p>
            <p>Purchase History: </p>
        </div>
    )
}

export default Profile

