import React from 'react';

import Header from '../Header/Header';
import classes from './layout.module.css';

const Layout = (props) => {
    const {children} = props;

    return(
        <div className={classes.container}>
            <Header/>

            {children}
        </div>
    )
}

export default Layout;
