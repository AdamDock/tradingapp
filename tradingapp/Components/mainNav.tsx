import React from "react";
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { title } from "process";


function MainNav(){
    const router = useRouter();
    useEffect(()=>{
        console.log(router)
    const targetComponent = router.asPath.replace(`${router.route}#s`,'');
    const element = document.getElementById(targetComponent);
    if(element){
        element.scrollIntoView({behavior: 'smooth'});
    }
}, [router.asPath]);
    
    
    return (
    <>
    <div className={`${styles.nav} ${styles.shrinknav}`}> 

        <Link href="/home">
            <button className={styles.button}><h1>Home</h1></button>
        </Link>
        <Link href="/insider">
            <button className={styles.button}> <h1>Insider Watch</h1></button>
        </Link>
        <Link href="/stockeval">
            <button className={styles.button}> <h1>Stock Evaluator</h1></button>
        </Link>
        <Link href="/calendar">
            <button className={styles.button}><h1>Event Calendar</h1></button>
        </Link>
        <Link href="/recommend">
            <button className={styles.button}> <h1>Recommended Stocks</h1></button>
        </Link>
        <Link href="#sfooter">
        <button className={styles.button}><h1>More Information</h1></button>
            </Link>
    </div>
    

    </>
    );
}

export default MainNav;