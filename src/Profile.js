import React from 'react';
import SaleDetails from './SaleDetails';

function Profile({profileDetails}){
    const {username, sales, email, location, avatar="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"}= profileDetails

    const rendersaleDetails = () =>(sales.map(saleObj => <SaleDetails  key={saleObj.id} saleObj={saleObj}/> ))
        
    
    
    return (
        <div className="profile-container" >
            <div className="profileInfo">
                <h2>Welcome back {username}!</h2>
                <br></br>
                <img src={"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"} alt={username} />
                <br></br>
                <br></br>
                <p> Email: {email}</p>
                <br></br>
                <p>Your location: {location}</p>
            </div>
            <div className="profileSales">
                <h2>Purchase History: </h2>
                <hr></hr>
                {sales && rendersaleDetails()}
            </div>
        </div>
    )
}

export default Profile

