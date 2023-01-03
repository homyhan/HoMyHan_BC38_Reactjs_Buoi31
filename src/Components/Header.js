import React, { Component } from 'react';
import styles from '../Components/Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <p>TRY GLASSES APP ONLINE</p>
            </header>
        );
    }
}

export default Header;