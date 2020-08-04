import React from 'react';
import './Directory.styles.scss';

import MenuItem from '../menu-item/MenuItem';
import sections from '../../services/directory.data';

const Directory = () => {
    const renderSections = () => (
        sections.map(section => (<MenuItem key={section.id} title={section.title} 
                imageUrl={section.imageUrl} size={section.size} />)));
        
    return (
        <div className='directory-menu'>
            { renderSections() }
        </div>
    );
};

export default Directory;