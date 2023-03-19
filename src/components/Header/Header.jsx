import React from 'react';

import classes from './header.module.css'
import logo from '../../assets/logo/logo.webp'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.headerContainer}>
                <div className={classes.headerInfoBox}>
                    <img className={classes.logo} src={logo}/>

                    <div className={classes.titleBox}>
                        <h1 className={classes.title}>Genesis courses</h1>

                        <h2 className={classes.nayword}>Make your dreams come true</h2>
                    </div>
                </div>

                <div className={classes.linksBox}>
                    <div className={classes.boxLink}>
                        <a
                            href="http://facebook.com/GenesisEducationKyiv"
                            target={'_blank'}
                            className={classes.link}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="32" height="32"
                                 viewBox="0 0 32 32">
                                <circle cx="16" cy="16" r="14" fill="#449bb3"></circle><path fill="#fff" d="M18,30h-1V20h3.059l0.375-3H17v-2.5c0-1.378,1.121-2.5,2.5-2.5V8H19c-3.309,0-6,2.691-6,6v3h-3v3h3	v9.5h-1V21H9v-5h3v-2c0-3.86,3.141-7,7-7h1.5v6h-1c-0.827,0-1.5,0.673-1.5,1.5V16h3.566l-0.625,5H18V30z"></path><path fill="#302529" d="M16,31C7.729,31,1,24.271,1,16S7.729,1,16,1s15,6.729,15,15S24.271,31,16,31z M16,3	C8.832,3,3,8.832,3,16s5.832,13,13,13s13-5.832,13-13S23.168,3,16,3z"></path>
                            </svg>
                        </a>
                    </div>

                    <div className={classes.boxLink}>
                        <a
                            href="https://www.instagram.com/genesis_academy_ua/"
                            className={classes.link}
                            target={'_blank'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="32" height="32"
                                 viewBox="0 0 32 32">
                                <rect width="24" height="24" x="4" y="4" fill="#f28d74"></rect><path fill="#fff" d="M16,21c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S18.757,21,16,21z M16,12c-2.206,0-4,1.794-4,4	s1.794,4,4,4s4-1.794,4-4S18.206,12,16,12z"></path><path fill="#fff" d="M20.5,25h-9C9.019,25,7,22.981,7,20.5v-9C7,9.019,9.019,7,11.5,7h9c2.481,0,4.5,2.019,4.5,4.5v9	C25,22.981,22.981,25,20.5,25z M11.5,8C9.57,8,8,9.57,8,11.5v9c0,1.93,1.57,3.5,3.5,3.5h9c1.93,0,3.5-1.57,3.5-3.5v-9	C24,9.57,22.43,8,20.5,8H11.5z"></path><path fill="#302529" d="M29,29H3V3h26V29z M5,27h22V5H5V27z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
