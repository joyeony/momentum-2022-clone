const quotes = [    
{
quote:`Spread love everywhere you go.`,
author: `Mother Teresa`,
},
{
quote:`When you reach the end of your rope, tie a knot in it and hang on.`,
author: `Franklin D. Roosevelt`,
},
{
quote:`Always remember that you are absolutely unique. Just like everyone else.`,
author: `Margaret Mead`,
},
{
quote:`Don't judge each day by the harvest you reap but by the seeds that you plant.`,
author: `Robert Louis Stevenson`,
},
{
quote:`The future belongs to those who believe in the beauty of their dreams.`,
author: `Eleanor Roosevelt`,
},
{
quote:`Tell me and I forget. Teach me and I remember. Involve me and I learn.`,
author: `Benjamin Franklin`,
},
{
quote:`The best and most beautiful things in the world cannot be seen or even touched.`,
author: `Helen Keller`,
},
{
quote:`It is during our darkest moments that we must focus to see the light.`,
author: `Aristotle`,
},
{
quote:`Whoever is happy will make others happy too.`,
author: `Anne Frank`,
},
{
quote:`Go instead where there is no path and leave a trail.`,
author: `Ralph Waldo Emerson`,
}
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // array 0 ~ 9 lines read

quote.innerText = todaysQuote.quote; //since array has quote and author
author.innerText = todaysQuote.author;
