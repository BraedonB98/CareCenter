var Affirm = 
["I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."];//13 items

var Mantras = 
["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."];//15 items

var form = document.getElementById("formId");

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function submitClick()
{
    console.log(event);
    event.preventDefault();
    var box = document.getElementById("messageBox");
    var affirmBox = document.getElementById("affirm");

    console.log("affirmation " + affirmBox.checked)
    if(affirmBox.checked){
        box.innerHTML = Affirm[getRandomInt(13)];
    }
    else{ // YES I KNOW THIS MEANS YOU GET A MONTRA BY DEFALUT IF THE USER DOESNT SELECT ONE. I could also check "montraBox.checked as a else if but considered this to be fine"
        box.innerHTML = Mantras[getRandomInt(15)];
    }
}

function resetClick()
{
    event.preventDefault();
    var box = document.getElementById("messageBox");
    box.innerHTML = "<img src=\"assets/meditate.svg\" width= \"200\" height = \"300\"><img>";
}

document.querySelector("#receiveMessageButton").addEventListener("click", submitClick);
document.querySelector("#resetButton").addEventListener("click", resetClick);