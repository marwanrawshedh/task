import React from 'react';
import classes from './header.module.css'
import EpicPhoto from './ui/EpicPhoto';
function Header(props) {
    return (
        <div className={classes.header}>
            <div className={classes.epic}>
                <EpicPhoto />
                <div className={classes.epixText}>
                    <h1>EPIC</h1>

                    <h1>ACADEMY</h1>
                </div>
            </div>
            <h1 className={classes.rightText} >NodeJS study plan</h1>
        </div>
    );
}

export default Header;