import React, {useState} from "react";
import styles from '@/styles/Home.module.css'
import MailingList from "./mailingField";

function Footer(){
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubcribed] = useState(false);

    const handleSubmit = (event)=> {
        event.preventDefault();
        if(!isSubscribed){
            console.log('subscribed with email: ', email);
            setIsSubcribed(true);
        }
    };
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
           Join Mailing List:
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