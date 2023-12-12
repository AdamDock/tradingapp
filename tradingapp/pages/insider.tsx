import Head from 'next/head'
import React, { useEffect, useState} from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainNav from 'components/mainNav.tsx'
import Header from 'components/header.tsx'
import Footer from 'components/footer.tsx'
import Extra from 'components/extracomponent.tsx'
import Link from 'next/link'
import axios from 'axios';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  return (
    <>
      <Head>
        <title>Insider Trading</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <div className={styles.header}><Header/></div>
          <div className={styles.content}>
           <div>
          
           </div>
          </div>
          <div className={styles.footer} id="footer"><Footer/></div>
        </div>

      </main>
      <div className={styles.nav}><MainNav/></div>
    </>
  )
}