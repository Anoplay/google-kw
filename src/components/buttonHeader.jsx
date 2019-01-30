import React from 'react';
import './app.css';
const ButtonHeader = props =>{
    return(
            
            <div className="header-content">
                <div className="header-menu text">Gmail</div>
                <div className="header-menu text">Gambar</div>
                <div className="header-menu2">
                    <div className="icon-dashboard"></div>
                </div>
                <div className="header-menu2">
                    <div className="icon-bell"></div>
                </div>
                <div className="header-menu">
                    <div className="icon-profile"></div>
                </div>
            </div>
            
    )
}

export default ButtonHeader;