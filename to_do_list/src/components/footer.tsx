import * as React from 'react';
import styles from './Footer.module.css';

const Footer  = () => {
    return (
        <footer className={styles.footer}>
            <p>
                <span className={styles.footer_span}>ToDoList</span> @2024
            </p>
        </footer>
    );
}

export default Footer;
