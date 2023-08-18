// estas funciones son de ejemplo

export const filterData = (specie, data) => data.filter((element) => element.species === specie);

export const sortData = (data) => {

  const theArr = Array.from(data['results']);
  //array from es para generar una copia de el array original. 
  
  const orderBy = theArr.sort(function(a,b) {
    if(a.name > b.name ){
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
  
  });

  return orderBy;
  
};

export const computeState = (data) => {

  const arrayData = data['results'];
  const totalSpecies = arrayData.length;
  let countAlien = 0;
  let countAnimal = 0;
  let countCronenberg = 0;
  const arrayCounters = [];

  for (let i = 0; i < totalSpecies; i++) {
    if (arrayData[i].species === 'Alien' ) {
      countAlien ++
    }
    if (arrayData[i].species === 'Animal') {
      countAnimal ++
    }
    if (arrayData[i].species === 'Cronenberg') {
      countCronenberg ++;
    }
  }

  arrayCounters.push({'Alien': countAlien, 'percent': parseFloat(((countAlien*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'Animal': countAnimal, 'percent': parseFloat(((countAnimal*100)/totalSpecies).toFixed(2))});
  
  console.log(countAlien, countAnimal, countCronenberg);
  console.log(arrayCounters);
 

}
