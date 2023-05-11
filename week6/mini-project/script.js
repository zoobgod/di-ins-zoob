// let quotes = [
//   { id: 0, author: "Mark Twain", quote: "The secret of getting ahead is getting started." },
//   { id: 1, author: "Albert Einstein", quote: "Try not to become a man of success but rather to become a man of value." },
//   { id: 2, author: "Walt Disney", quote: "All our dreams can come true, if we have the courage to pursue them." }
// ];

// quotes.push({ id: 3, author: "Nelson Mandela", quote: "It always seems impossible until it's done." });
// quotes.push({ id: 4, author: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." });
// console.log(quotes)

// let random = Math.floor(Math.random() * quotes.length)
// console.log(random)

// let quote = quotes[random].quote
// let author = quotes[random].author
// console.log(quote, author)

// let quoteText = document.getElementById('quote-text')
// let authorText = document.getElementById('author-text')


let quotes = [
  { id: 0, author: "Steve Jobs", quote: "Design is not just what it looks like and feels like. Design is how it works." },
  { id: 1, author: "Zivuch", quote: "Programming is easy, it's people that are hard." },
  { id: 2, author: "Nikita", quote: "When I push my code, I always spray some Holy water on my PC, so that I have a bigger chance that my code is correct." },
  { id: 3, author: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
{ id: 4, author: "Ralph Waldo Emerson", quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
{ id: 5, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
{ id: 6, author: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world." },
{ id: 7, author: "William Shakespeare", quote: "All the world's a stage, and all the men and women merely players." },
{ id: 8, author: "Eleanor Roosevelt", quote: "No one can make you feel inferior without your consent." },
{ id: 9, author: "Buddha", quote: "The mind is everything. What you think you become." },
{ id: 10, author: "Abraham Lincoln", quote: "Whatever you are, be a good one." },
{ id: 11, author: "Winston Churchill", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
{ id: 12, author: "Mother Teresa", quote: "Not all of us can do great things. But we can do small things with great love." }

];

let papaDiv = document.getElementsByClassName('papaDiv');
let mamaDiv = document.getElementsByClassName('mamaDiv');
let generateQuoteButton = document.getElementById('benjaminButtons');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let quote = quoteText.textContent;
let author = authorText.textContent;

generateQuoteButton.addEventListener('click', function() {
 
  for (let i = 0; i < quotes.length; i++) {
    if (quote === quotes[i].quote) {
      console.log('duplicate')
    }
    else {
  let random = Math.floor(Math.random() * quotes.length);
  let quote = quotes[random].quote;
  let author = quotes[random].author;
  quoteText.textContent = quote;
  authorText.textContent = author;
    }
  }
});

function addQuote() {
  let quoteInput = document.getElementById('quoteInput');
  let authorInput = document.getElementById('authorInput');
  
  let newQuote = {
    id: quotes.length,
    author: authorInput.value,
    quote: quoteInput.value,
    likes: 0
  }
  
  quotes.push(newQuote);
  
  quoteInput.value = '';
  authorInput.value = '';

  let newQuoteElement = document.createElement('div');
  newQuoteElement.innerHTML = '<p class="quote">' + newQuote.quote + '</p><p class="author">' + newQuote.author + '</p>';

  let parentElement = document.getElementsByClassName('papaDiv')[0];
  parentElement.appendChild(newQuoteElement);
  
  console.log('New quote added:', newQuote);
}


const filterForm = document.getElementById('filterForm');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');


let filteredQuotes = [];
let currentQuoteIndex = 0;

function filterQuotesByAuthor(author) {
  filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === author.toLowerCase());
  if (filteredQuotes.length > 0) {
    currentQuoteIndex = 0;
    displayQuote(filteredQuotes[currentQuoteIndex]);
  } else {
    quoteText.textContent = "No quotes found for author " + author;
    authorText.textContent = "";
  }
}

function displayQuote(quote) {
  quoteText.textContent = quote.quote;
  authorText.textContent = quote.author;
}

document.getElementById('authorFilterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let authorFilterInput = document.getElementById('authorFilterInput');
  filterQuotesByAuthor(authorFilterInput.value);
  authorFilterInput.value = "";
});

document.getElementById('prevButton').addEventListener('click', function() {
  if (filteredQuotes.length > 0 && currentQuoteIndex > 0) {
    currentQuoteIndex--;
    displayQuote(filteredQuotes[currentQuoteIndex]);
  }
});

document.getElementById('nextButton').addEventListener('click', function() {
  if (filteredQuotes.length > 0 && currentQuoteIndex < filteredQuotes.length - 1) {
    currentQuoteIndex++;
    displayQuote(filteredQuotes[currentQuoteIndex]);
  }
});

filterQuotesByAuthor(""); 
