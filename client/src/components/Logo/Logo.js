import React from 'react';

import orLogo from '../../assets/images/open-rolls.png';
import classes from './Logo.css';

const logo = (props) => (
    <div>
        <img className={props.style} src={orLogo} alt="ORLogo" />
    </div>
);

export default logo;