
let colorsLib = [
    '#32372D', '#745D57',
    '#A63340', '#82617B', '#2C3849',
    '#B4BDB6', '#4F5860', '#414440',
    '#8F6861', '#D19E83', '#487066'
]

let quoteData;

let quoteXhr = new XMLHttpRequest();

quoteXhr.open('GET', 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', false);

quoteXhr.send();

if(quoteXhr.status !==200) {
    console.log(quoteXhr.status + ': ' + quoteXhr.statusText);
} else {
    quoteData = JSON.parse(quoteXhr.responseText);}





function colorRandom () {
    return colorsLib[Math.round(Math.random() * colorsLib.length-1)];
}

function quoteRandom () {
    return quoteData.quotes[Math.round(Math.random() * quoteData.quotes.length-1)];
}



function quoteIt() {
    let primary = colorRandom();
    let quote = quoteRandom();
    let button = document.querySelectorAll('.button');

    document.body.style.backgroundColor = primary;
    document.body.style.transition = "all 1s ease";

    setTimeout(function(){
        text.innerHTML = quote.quote;
        text.style.transition = "all 1s ease";
        text.style.opacity = 1;
        author.innerHTML = "-" + quote.author;
        author.style.opacity = 1;
        author.style.transition = "all 1s ease";
        document.getElementById('quote-box').style.color = primary;
        document.querySelector('.fas').style.transition = "all 1s ease";
        document.querySelector('.fas').style.opacity = 1;
    }, 500)
    text.style.opacity = 0;
    author.style.opacity = 0;
    document.querySelector('.fas').style.opacity = 0;
    
    for(let i = 0; i < button.length; i++){
        button[i].style.transition = "all 1s ease";
        button[i].style.backgroundColor = primary;
    }
    button[0].href = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote.quote + '" ' + ' -' + quote.author);
    button[1].href = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' + encodeURIComponent(quote.author) + '&content=' + encodeURIComponent(quote.quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
}

window.addEventListener("load", function() {
    quoteIt();
})

newQuote.onclick = function() {
    quoteIt();
}