// const checkButton = document.getElementById("checkButton");
// console.log(checkButton);

let rannum = Math.round(Math.random()* 100); //random() generates number between 0 to 1  //round() rounds the number
console.log(rannum);

var live=10;
let text;

const lives= document.getElementById("span");
const message = document.getElementById("attemptCount");

checkButton.onclick = () =>{
    // lives.innerHTML=live;

    var inputValue = document.getElementById("textBox").value;
    console.log(inputValue);
    live--;


    if(inputValue==rannum)
    {
        location.href = "./win.html";

    }
    else if(live==0)
    {
        location.href= "./lose.html";
    }
    else if(inputValue > rannum)
    {
        text = `Your guess is too high...!  . You have ${live} lives remaining`;
    }
    else if(inputValue < rannum)
    {
        text = `Your guess is too low...! You have ${live} lives remaning`;
    }
console.log(text);

// message.style.display="inherit";
message.innerHTML=text;
lives.innerHTML=live;

}

