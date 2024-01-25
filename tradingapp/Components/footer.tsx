import React, {useEffect, useState} from "react";
import styles from '@/styles/Home.module.css'
import MailingList from "./mailingField";
import axios from "axios";
import { set } from "mongoose";
import Button from '@mui/material/Button';





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
    <div className="flex justify-center">
         <span className="flex flex-col items-center justify-center grow">
            <h2 className="font-bold text-2xl">
                Friday Five- Sign up today and get weekly stock insights.
            </h2>
            

     {!isSubscribed ? (
       <form onSubmit={handleSubmit} className="text-center">
         <label>
            {error === ''?
            <div className="font-semibold text-lg text-center">Join {subscriberCount} others and subscribe!</div>:
            <div className="font-semibold text-lg text-center">{error} Join {subscriberCount} others and subscribe!</div>
            }
          
           <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
             className={styles.inputField}
           />
         </label>
         <Button 
          className="p-2 m-4 text-lg font-bold text-black hover:text-chocolate hover:bg-hover-color bg-hover-color"
          variant="contained" 
          type="submit">
            Sign me up!
        </Button>
       </form>
     ) : (
       <MailingList isSubscribed={isSubscribed} email={email} />
       
     )}
     </span>
   
     
       
       
        <span className=" p-5 bg-hover-color rounded-xl outline m-2 outline-black mt-3 hover:text-chocolate">
            <h3 className="font-bold text-xl">Educational Guides</h3>
            <ul className="list-disc">
                <li className="hover:text-black"><a href="https://collabfund.com/blog/authors/morgan/">Morgan Housel</a></li>
                <li className="hover:text-black"><a href="https://tboypod.com/">The best one yet.</a></li>
                <li className="hover:text-black"><a href="https://www.theinvestorspodcast.com/we-study-billionaires/">The investors podcast</a></li>
                <li className="hover:text-black"><a href="https://buffett.cnbc.com/annual-meetings/">Berkshire Hathaway Annual reports</a></li>
                <li className="hover:text-black"><a href="https://investor.fm/">Contrarian edge</a></li>
                <li className="hover:text-black"><a href="https://investorjunkie.com/investing/">Investor Junkie</a></li>

            </ul>
        </span>
        <span className="p-5 bg-hover-color rounded-xl outline-black m-2 outline mt-3 hover:text-chocolate">
            <h3 className="font-bold text-xl">Investor X Handles</h3>
            <ul className="list-disc">
                <li className="hover:text-black"><a href="https://x.com/BillAckman?s=20">Bill Ackman</a></li>
                <li className="hover:text-black"><a href="https://x.com/michaeljburry?s=20">Michael Burry</a></li>
                <li className="hover:text-black"><a href="https://x.com/RayDalio?s=20">Ray Dalio</a></li>
                <li className="hover:text-black"><a href="https://x.com/awealthofcs?s=20">Ben Carlson</a></li>
                <li className="hover:text-black"><a href="https://x.com/convictionhold?s=20">Jason Moser</a></li>
                <li className="hover:text-black"><a href="https://x.com/profgalloway?s=20">Scott Galloway</a></li>
                <li className="hover:text-black"><a href="https://x.com/charliebilello?s=20">Charlie Bilello</a></li>
            </ul> 
        </span>
       
        
        <span className="p-5 bg-hover-color rounded-xl mr-10 outline-black outline mt-3 m-2 hover:text-chocolate">
        <h3 className="font-bold text-xl">Investor Resources</h3>
            <ul className="list-disc">
                <li className="hover:text-black"><a href="https://www.tdameritrade.com/">TD Ameritrade</a></li>
                <li className="hover:text-black"><a href="https://finviz.com/">FinViz</a></li>
                <li className="hover:text-black"><a href="https://www.tradestation.com/platforms-and-tools/simulated-trading/?gclid=CjwKCAjwp8OpBhAFEiwAG7NaEvKe6kALOWD4Gf75xoQFylfRcWNfJ6eaZxUcLDWBBP_2WgLqFTbOmRoCw0UQAvD_BwE&gclsrc=aw.ds">TradeStation</a></li>
                <li className="hover:text-black"><a href="https://www.investopedia.com/">Investopedia</a></li>
                <li className="hover:text-black"><a href="https://finimize.com/">Finimize</a></li>
                <li className="hover:text-black"><a href="https://finance.yahoo.com/">Yahoo Finance</a></li>
            </ul>
        </span>
    </div>
    

    );
}

export default Footer;