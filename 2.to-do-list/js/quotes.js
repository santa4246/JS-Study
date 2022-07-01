const quotes = [
  {
    quote : "첫 번째 글 입니다. 다른 글을 찾아주세요.",
    author : "첫 번째 작가",
  },
  {
    quote : "두 번째 글 입니다. 다른 글을 찾아주세요.",
    author : "두 번째 작가",
  },
  {
    quote : "세 번째 글 입니다. 다른 글을 찾아주세요.",
    author : "세 번째 작가",
  },
  {
    quote : "네 번째 글 입니다. 다른 글을 찾아주세요.",
    author : "네 번째 작가",
  },
  {
    quote : "다섯 번째 글 입니다. 다른 글을 찾아주세요.",
    author : "다섯 번째 작가",
  },
  {
    quote : "여섯 번째 글 입니다. 다른 글을 찾아주세요.",
    author : "여섯 번째 작가",
  },
  {
    quote : "일곱 번째 글 입니다. 다른 글을 찾아주세요.",
    author : "일곱 번째 작가",
  },
  {
    quote : "여덟 번째 글 입니다. 다른 글을 찾아주세요.",
    author : "여덟 번째 작가",
  },
  {
    quote : "아홉 번째 글 입니다. 다른 글을 찾아주세요.",
    author : "아홉 번째 작가",
  },
  {
    quote : "열 번째 글 입니다. 다른 글을 찾아주세요.",
    author : "열 번째 작가",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;