import React from 'react';
import './app.css';
import ContentGoogle from './contentGoogle';
import ContentSearch from './contentSearch';
import ContentMenu from './contentMenu';

const ContentBody = props =>{
    return(
        
        <div className="body">
            <ContentGoogle/>
            <ContentSearch/>
            <ContentMenu/>
        </div>
    )
}

export default ContentBody;