const quotes = [
  {
    qoute: 'cat',
    author: 'Mitch Hedberg',
  },
  {
    qoute: 'cat',
    author: 'Mitch Hedberg',
  },
  {
    qoute: 'cat',
    author: 'Mitch Hedberg',
  },
  {
    qoute: 'cat',
    author: 'Mitch Hedberg',
  },
  {
    qoute: 'cat',
    author: 'Mitch Hedberg',
  },
  {
    qoute: 'cat',
    author: 'Mitch Hedberg',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.textContent = todaysQuote.qoute;
author.textContent = todaysQuote.author;
