export function egyedi_betuk(szoveg = "") {
  // ide kell írni a megoldást ciklussal és elágazással
  
  
  const lista = [];
  for (let index = 0; index < szoveg.length; index++) {
    let betu = szoveg[index].toLowerCase();
    let i = 0;
    while (i < lista.length && !(betu == lista[i])){
   
      i++;
    }

    if(i == lista.length){
    if (/^[a-záéíóöőúüű]$/.test(betu)) {
            lista.push(betu);
          }
        }
    lista.sort();
  }
  console.log(lista);
  return lista;
}
