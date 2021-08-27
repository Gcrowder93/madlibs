// import functions
const paragraph = document.getElementById('paragraph');

const button = document.getElementById('button');

const verb1text = document.getElementById('verb-1');
const noun1text = document.getElementById('noun-1');
const verb2text = document.getElementById('verb-2');
const adjective1text = document.getElementById('adjective-1');
console.log(adjective1text);
const bodypart1text = document.getElementById('bodypart-1');
const name1text = document.getElementById('name-1');
const verb3text = document.getElementById('verb-3');
const animal1text = document.getElementById('animal-1');
const bodypart2text = document.getElementById('bodypart-2');
const adjective2text = document.getElementById('adjective-2');
const animal2text = document.getElementById('animal-2');

const verb1 = document.getElementById('verb-1-input');
const noun1 = document.getElementById('noun-1-input');
const verb2 = document.getElementById('verb-2-input');
const adjective1 = document.getElementById('adjective-1-input');
const bodypart1 = document.getElementById('bodypart-1-input');
const name1 = document.getElementById('name-1-input');
const verb3 = document.getElementById('verb-3-input');
const animal1 = document.getElementById('animal-1-input');
const bodypart2 = document.getElementById('bodypart-2-input');
const adjective2 = document.getElementById('adjective-2-input');
const animal2 = document.getElementById('animal-2-input');

button.addEventListener('click', () => {
    verb1text.innerText = verb1.value;
    noun1text.innerText = noun1.value;
    verb2text.innerText = verb2.value;
    adjective1text.innerText = adjective1.value;
    bodypart1text.innerText = bodypart1.value;
});