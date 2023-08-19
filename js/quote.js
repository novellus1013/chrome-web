const quotes = [
  {
    author: "Stephen Hawking",
    text: "Artificial intelligence can solve many problems but it can also make them much worse.",
  },
  {
    author: "Bill Gates",
    text: "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
  },
  {
    author: "Max Tegmark",
    text: "The greatest danger of artificial intelligence is human ignorance and arrogance.",
  },
  {
    author: "Yelena Dudochkina",
    text: "Whether artificial intelligence is aligned with human values and ethics depends on the people creating it.",
  },
  {
    author: "Bertrand Russell",
    text: "We can give machines the ability to think, but we cannot give them responsibility.",
  },
  {
    author: "Tim Berners-Lee",
    text: "Artificial intelligence can tell us what we want to know, but it cannot tell us if it's right.",
  },
  {
    author: "Alan Turing",
    text: "Machines are simply faithful. They are only accountable to humans as to when and how to act.",
  },
  {
    author: "Andrew Ng",
    text: "If we give AI too much power, it will bring about impossible expectations.",
  },
  {
    author: "Zalán Téglásy",
    text: "The danger of artificial intelligence is not that it falls into the wrong hands, but that it works too well.",
  },
  {
    author: "Garry Kasparov",
    text: "The real danger with AI is losing our humanity.",
  },
];

const quoteText = document.querySelector(".quote span:first-child");
const quoteAuthor = document.querySelector(".quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quoteText.innerText = todaysQuotes.text;
quoteAuthor.innerText = `- by ${todaysQuotes.author}`;
