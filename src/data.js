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
  let countDisease = 0;
  let countHuman = 0;
  let countHumanoid = 0;
  let countMytholog = 0;
  let countParasite = 0;
  let countPoopybutthole = 0;
  let countRobot = 0;
  let countVampire = 0;
  let countUnknown = 0;



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
    if (arrayData[i].species === 'Disease' ) {
      countDisease ++
    }
    if (arrayData[i].species === 'Human') {
      countHuman ++
    }
    if (arrayData[i].species === 'Humanoid') {
      countHumanoid ++;
    }
    if (arrayData[i].species === 'Mytholog') {
      countMytholog ++
    }
    if (arrayData[i].species === 'Parasite') {
      countParasite ++
    }
    if (arrayData[i].species === 'Poopybutthole') {
      countPoopybutthole ++;
    }
    if (arrayData[i].species === 'Robot') {
      countRobot ++
    }
    if (arrayData[i].species === 'Vampire') {
      countVampire ++
    }
    if (arrayData[i].species === 'unknown') {
      countUnknown ++;
    }
  }

  arrayCounters.push({'name':'Alien', 'count': countAlien, 'percent': parseFloat(((countAlien*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'Animal', 'count': countAnimal, 'percent': parseFloat(((countAnimal*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'Cronenberg','count': countCronenberg, 'percent': parseFloat(((countCronenberg*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'Disease','count': countDisease, 'percent': parseFloat(((countDisease*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'Human','count': countHuman, 'percent': parseFloat(((countHuman*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'Humanoid','count': countHumanoid, 'percent': parseFloat(((countHumanoid*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'Mytholog','count': countMytholog, 'percent': parseFloat(((countMytholog*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'Parasite','count': countParasite, 'percent': parseFloat(((countParasite*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'Poopybutthole','count': countPoopybutthole, 'percent': parseFloat(((countPoopybutthole*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'Robot','count': countRobot, 'percent': parseFloat(((countRobot*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'Vampire','count': countVampire, 'percent': parseFloat(((countVampire*100)/totalSpecies).toFixed(2))});
  arrayCounters.push({'name':'unknown','count': countUnknown, 'percent': parseFloat(((countUnknown*100)/totalSpecies).toFixed(2))});

  return arrayCounters;
  
}
