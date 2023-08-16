import { filterData, sortData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

const printData = (characters) => {

  if (document.getElementById('container')) {
    
    const container = document.getElementById('container');
    document.getElementById('root').removeChild(container);
  }

  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'container');

  document.getElementById('root').appendChild(newDiv);

  characters.forEach(element => {
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
buttonShowAll.addEventListener("click", () => {
  printData(data.results);
});


const btnFilter = document.getElementById("Filter");
btnFilter.addEventListener("click", () => {
  const speciesList = document.getElementById("Filters");
  const selectedSpecie = speciesList.options[speciesList.selectedIndex].value;
  //carga cuando doy click y si la pongo afuera se carga al iniciar y no funciona; 
  const filteredData =  filterData(selectedSpecie, data.results);
  printData(filteredData);
});

const buttonAscend = document.getElementById('orderAscen');
buttonAscend.addEventListener("click", () => {
  const sortedDataAsc = sortData(data);
  printData(sortedDataAsc);
});

const buttonDescen = document.getElementById('orderDescen');
buttonDescen.addEventListener("click", () => {
  const sortedDataDesc = sortData(data);
  printData(sortedDataDesc.reverse());
});





