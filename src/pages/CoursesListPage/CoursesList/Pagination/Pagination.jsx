import React from 'react';

import classes from './pagination.module.css';

const Pagination = (props) => {
    const {
        pageNumbers,
        paginate,
    } = props;

    return (
        <div>
            <ul className={classes.pagination}>
                {pageNumbers.map((number) => (
                    <li className={classes.pageItem} key={number}>
                        <a
                            href='#'
                            className={classes.item}
                            onClick={paginate(number)}
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;
