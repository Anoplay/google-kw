import React from 'react';
import './app.css';
// import img from './googlelogo_color_272x92dp.png';

const ContentGoogle = props =>{
    return(

        <div className="content-google">
            <img src={require('./googlelogo_color_272x92dp.png')} className="img" />
        </div>
            
    )
}

export default ContentGoogle;