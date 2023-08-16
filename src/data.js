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
