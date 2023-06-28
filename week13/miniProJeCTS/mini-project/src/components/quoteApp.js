import React, { useState } from 'react';
import quotes from './quotes.js';

function getRandomQuote(usedQuotes) {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  while (usedQuotes.includes(quote)) {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
  }
  return quote;
}

function RandomQuoteGenerator() {
  const [quote, setQuote] = useState(getRandomQuote([]));
  const [usedQuotes, setUsedQuotes] = useState([quote]);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [headerColor, setHeaderColor] = useState('#000000');
  const [buttonColor, setButtonColor] = useState('#000000');

  function generateNewQuote() {
    const newQuote = getRandomQuote(usedQuotes);
    setQuote(newQuote);
    setUsedQuotes([...usedQuotes, newQuote]);
    setBackgroundColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    setHeaderColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    setButtonColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }

  return (
    <div style={{ backgroundColor }}>
      <h1 style={{ color: headerColor }}>{quote.quote}</h1>
      <p style={{ color: headerColor }}>{quote.author}</p>
      <button style={{ backgroundColor: buttonColor }} onClick={generateNewQuote}>
        Generate New Quote
      </button>
    </div>
  );
}

export default RandomQuoteGenerator;