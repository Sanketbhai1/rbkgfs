// FAQ.js

import React from 'react';
import "../Styles/Faq.css";

const FAQ = () => {
  const faqData = [
    {
      question: " 1.)What is your return policy?",
      answer: "Our return policy allows you to return items within 30 days of purchase. Please check our Returns page for more details."
    },
    
    'spaceBetweenQuestions',
    'spaceBetweenQuestions',

   
    {
      question:  " 2.)How can I track my order?",
      answer: "You can track your order by visiting the Order Status page and entering your order number. If you have an account, you can also track it from your account dashboard."
    },
    {
        question: " 3.)What is your return policy?",
        answer: "Our return policy allows you to return items within 30 days of purchase. Please check our Returns page for more details."
      },
      {
        question: " 4.)What is your return policy?",
        answer: "Our return policy allows you to return items within 30 days of purchase. Please check our Returns page for more details."
      },
      {
        question: " 5.)What is your return policy?",
        answer: "Our return policy allows you to return items within 30 days of purchase. Please check our Returns page for more details."
      },
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-container">
        <br/>
      <h1>Frequently Asked Questions</h1>
      <br/>
      <br/>
      {faqData.map((item, index) => (
         <div key={index} className={item === 'spaceBetweenQuestions' ? 'space' : 'faq-item'}>
            
            {item !== 'spaceBetweenQuestions' && (
      <>
        <h3>{item.question}</h3>
        <p>{item.answer}</p>
      </>
    )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
