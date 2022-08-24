const adviceText =document.querySelector("#Advice")
const dicebtn= document.querySelector("#A-btn");
const JokeText =document.querySelector("#Joke")
const dice1btn= document.querySelector("#J-btn");
const id= document.querySelector("#num")
const main= document.querySelector(".container")
const change= document.querySelector(".button")
const next= document.querySelector(".dad")
generateAdvice();
generateJoke();
dice1btn.addEventListener("click",generateJoke)
dicebtn.addEventListener("click",generateAdvice)
change.addEventListener("click",()=>
{
    main.classList.toggle("hide")
    next.classList.toggle("hide")

})
function generateAdvice()
{
    fetch("https://api.adviceslip.com/advice", { cache: 'no-cache' },{
        headers:
        {
            'Accept':'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {
        id.innerHTML=data.slip.id;
        adviceText.innerHTML=data.slip.advice;
    })
}
function generateJoke()
{
    fetch('https://icanhazdadjoke.com',{
        headers:
        {
            'Accept':'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {
        JokeText.innerHTML=data.joke;
    })
    // const resource= await fetch('https://api.adviceslip.com/',config);
    // const data= await resource.json();
}
