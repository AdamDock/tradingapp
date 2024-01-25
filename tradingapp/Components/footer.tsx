import React, {useEffect, useState} from "react";
import styles from '@/styles/Home.module.css'
import MailingList from "./mailingField";
import axios from "axios";
import { set } from "mongoose";





function Footer(){
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const [isSubscribed, setIsSubcribed] = useState(false);
    const [subscriberCount, setSubscriberCount] = useState(0);
    useEffect(() => {
        const fetchSubscriberCount = async () => {
        try {
            const res = await axios.get(`/api/subscriber`);
            const data = await res.data;
            setSubscriberCount(data.count);
        } catch (error) {
            console.error('Error getting subscriber count:', error);
        }
    }
        fetchSubscriberCount();

    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/subscriber`, {email});
            setIsSubcribed(true);
            
        }
        catch(err){
            console.log(err.response.status);
            if(err.response.status === 400){
                console.log('email already exists');
                setError('Email already subscribed');
            }
        }
        
    }
    const handleChange = (e: any) => {
        setEmail(e.target.value);
    }

    
    return (
    <div className={styles.column}>
         <span>
            <h2>
                Friday Five
            </h2>
            <p>
                Sign up today and get weekly stock insights
            </p>
        </span>

        <div className={styles.mailinglist}>
     {!isSubscribed ? (
       <form onSubmit={handleSubmit}>
         <label>
            {error === ''?
            <div>Join {subscriberCount} others and subscribe!</div>:
            <div>{error} Join {subscriberCount} others and subscribe!</div>
            }
          
           <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
           />
         </label>
         <button type="submit">Sign me up!</button>
       </form>
     ) : (
       <MailingList isSubscribed={isSubscribed} email={email} />
       
     )}
        </div>
   
     
       
       
        <span>
            <h3>Educational Guides</h3>
            <ul>
                <li><a href="https://collabfund.com/blog/authors/morgan/">Morgan Housel</a></li>
                <li><a href="https://tboypod.com/">The best one yet.</a></li>
                <li><a href="https://www.theinvestorspodcast.com/we-study-billionaires/">The investors podcast</a></li>
                <li><a href="https://buffett.cnbc.com/annual-meetings/">Berkshire Hathaway Annual reports</a></li>
                <li><a href="https://investor.fm/">Contrarian edge</a></li>
                <li><a href="https://investorjunkie.com/investing/">Investor Junkie</a></li>

            </ul>
        </span>
        <span>
            <h3>Investor X Handles</h3>
            <ul>
                <li><a href="https://x.com/BillAckman?s=20">Bill Ackman</a></li>
                <li><a href="https://x.com/michaeljburry?s=20">Michael Burry</a></li>
                <li><a href="https://x.com/RayDalio?s=20">Ray Dalio</a></li>
                <li><a href="https://x.com/awealthofcs?s=20">Ben Carlson</a></li>
                <li><a href="https://x.com/convictionhold?s=20">Jason Moser</a></li>
                <li><a href="https://x.com/profgalloway?s=20">Scott Galloway</a></li>
                <li><a href="https://x.com/charliebilello?s=20">Charlie Bilello</a></li>
            </ul> 
        </span>
        <span>
        <h3>Investor Resources</h3>
            <ul>
                <li><a href="https://www.tdameritrade.com/">TD Ameritrade</a></li>
                <li><a href="https://finviz.com/">FinViz</a></li>
                <li><a href="https://www.tradestation.com/platforms-and-tools/simulated-trading/?gclid=CjwKCAjwp8OpBhAFEiwAG7NaEvKe6kALOWD4Gf75xoQFylfRcWNfJ6eaZxUcLDWBBP_2WgLqFTbOmRoCw0UQAvD_BwE&gclsrc=aw.ds">TradeStation</a></li>
                <li><a href="https://www.investopedia.com/">Investopedia</a></li>
                <li><a href="https://finimize.com/">Finimize</a></li>
                <li><a href="https://finance.yahoo.com/">Yahoo Finance</a></li>
            </ul>
        </span>
    
    
    </div>
    

    );
}

export default Footer;