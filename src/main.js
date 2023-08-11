// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

const printData = (characters) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'container');

  document.getElementById('root').appendChild(newDiv);

  characters.results.forEach(element => {
    const template = `
        <div class="card">
            <div class="title">${element.name}</div>
            <div class="photo">
                <img src="${element.image}">
            </div>
            <div class"specie">${element.species}</div>
            
        </div>`;

    newDiv.innerHTML += template;
  });
}
const buttonShowAll = document.getElementById("callAll");
buttonShowAll.addEventListener("click", printData(data));


