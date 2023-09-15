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
  const speciesCount = {};

  for (const item of arrayData) {
    const species = item.species;
    speciesCount[species] = (speciesCount[species] || 0) + 1;
  }

  const arrayCounters = Object.keys(speciesCount).map((species) => ({
    name: species,
    count: speciesCount[species],
    percent: parseFloat(((speciesCount[species] * 100) / totalSpecies).toFixed(2)),
  }));

  return arrayCounters;
}


