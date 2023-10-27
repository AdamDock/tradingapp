import React from "react";
import styles from '@/styles/Home.module.css'

function Header(){
    return (
    <>
    <div className={styles.header}>
        <h3>Quote</h3>
        <h1>-Author</h1>
    </div>
    </>
    );
}

export default Header;