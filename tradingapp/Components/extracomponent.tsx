import React from "react";
import styles from '@/styles/Home.module.css'

function counter(){
    let n=1;
    for(let i =5; i < 10; i++){
        n++;
    }
    return n;

}
function Extra(){
    return (
    <>
    <div className={styles.homeextra}>

        <h1>Welcome to your stock trading interface. </h1>
        <h3>-All the information you need is now at your fingertips.</h3>

        
    
    </div>
    

    </>
    );
}

export default Extra;