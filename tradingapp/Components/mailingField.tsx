import React from 'react';
const MailingList = ({ isSubscribed, email }) => {
    return (
      <div>
        {isSubscribed ? (
          <p>Thank you for subscribing, {email}.</p>
        ) : (
          <p></p>
        )}
      </div>
    );
  };
  
  export default MailingList;