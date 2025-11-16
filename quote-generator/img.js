// const api_url = " https://github.com/lukePeavey/quotable"
const quote= document.getElementById("quote")
const author= document.getElementById("author")

const api_url = "https://random-quotes-freeapi.vercel.app/api/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author
}
 getquote(api_url);