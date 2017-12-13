import React from 'react';

import orLogo from '../../assets/images/open-rolls.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={orLogo} alt="ORLogo" />
    </div>
);

export default logo;