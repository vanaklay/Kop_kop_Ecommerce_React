import React from 'react';
import './Directory.styles.scss';

import MenuItem from '../menu-item/MenuItem';
import sections from '../../services/directory.data';

const Directory = () => {
    const renderSections = () => (
        sections.map(({ id, ...otherSectionProps }) => (<MenuItem key={id} {...otherSectionProps} />)));
        
    return (
        <div className='directory-menu'>
            { renderSections() }
        </div>
    );
};

export default Directory;