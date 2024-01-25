import React, { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css';
const day = 24*60*60*1000;
const storageTimeKey = 'lastApiCallTime';
const storageLastQuoteKey = 'lastQuote';
const storageLastAuthorKey = 'lastAuthor';
const currentTimeInMilliseconds = Date.now();


function Header() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const storageLastQuote = localStorage.getItem(storageLastQuoteKey);
    const storageLastAuthor = localStorage.getItem(storageLastAuthorKey);
    const storageTime = parseInt(localStorage.getItem(storageTimeKey), 10);
    
    console.log(currentTimeInMilliseconds);
    if(storageLastQuote && storageLastAuthor && storageTime +day > currentTimeInMilliseconds){
        setQuote(storageLastQuote);
        setAuthor(storageLastAuthor);
    } else {
    // Fetch quote data
    fetch('/api/quotes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        localStorage.setItem(storageTimeKey, Date.now());
        localStorage.setItem(storageLastQuoteKey, data[0].quote);
        localStorage.setItem(storageLastAuthorKey, data[0].author);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
        // Handle the error, e.g., set a fallback value for quote
        setQuote('Error fetching quote');
      });
    }
  }, []);
  
  return (
    <div className="hover:bg-hover-color rounded-xl hover:outline mt-3">
        <h3 className="hover:text-chocolate text-center">
          <h1 className="text-lg font-bold">{quote}</h1><em>-{author}</em></h3>
      </div>
   
  );
}

export default Header;
