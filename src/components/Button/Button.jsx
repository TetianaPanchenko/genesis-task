import React from 'react';

import classes from './button.module.css';

const Button = (props) => {
    const {onclickHandler, buttonText} = props;

    return(
            <button
                className={classes.btn}
                onClick={onclickHandler}
            >
                {buttonText}
            </button>
    )
}

export default Button;
