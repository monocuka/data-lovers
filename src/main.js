import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

const printData = (characters) => {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'container');

    document.getElementById('root').appendChild(newDiv);

    characters.results.forEach(element => {
        /*         
        const titleDiv = document.createElement('div');
        titleDiv.textContent = element.name;
        newDiv.appendChild(titleDiv);

        const photoDiv = document.createElement('img');
        photoDiv.setAttribute('src', element.image);
        newDiv.appendChild(photoDiv); 
        */

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

printData(data);

console.log(example, data);
