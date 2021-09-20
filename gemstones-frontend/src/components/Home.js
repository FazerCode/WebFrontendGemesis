import React from 'react';
import Image from '../resources/background.jpg'

const Home = () => {


    return (
        <div className="container" style={{ marginBottom: 500}} >
            <div
                style={{ backgroundImage: 'url(' + Image + ')' }}
                className="background" id="home">
                <div className="container" style={{ marginTop: 200,  color: 'white'}}>
                    <p>Welcome to Gemesis</p>
    
                </div>
            </div>
        </div>
    );
}

export default Home;