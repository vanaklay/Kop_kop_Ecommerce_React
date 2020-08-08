import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Directory.styles.scss';

import MenuItem from '../menu-item/MenuItem';
import { selectSections } from '../../redux/selectors';


const Directory = ({ sections }) => {
    const renderSections = () => (
        sections.map(({ id, ...otherSectionProps }) => (<MenuItem key={id} {...otherSectionProps} />)));
        
    return (
        <div className='directory-menu'>
            { renderSections() }
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    sections: selectSections
});
export default connect(mapStateToProps)(Directory);