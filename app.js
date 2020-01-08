const data = [{
      name: "Monte Malco",
      height: 1658,
      place: "Parco Foreste Casentinesi"
   },
   {
      name: "Monte Falterona",
      height: 1654,
      place: "Parco Foreste Casentinesi"
   },
   {
      name: "Poggio Scali",
      height: 1520,
      place: "Parco Foreste Casentinesi"
   },
   {
      name: "Pratomagno",
      height: 1592,
      place: "Parco Foreste Casentinesi"
   },
   {
      name: "Monte Amiata",
      height: 1738,
      place: "Siena"
   }
]


let table = document.querySelector('table');
let thead = table.createTHead().insertRow();
let tbody = document.createElement('tbody');
let newObj = Object.assign(data[0]);
let props = Object.keys(newObj);


function generateTable(table, data) {

   table.append(tbody);

   // loop to create table headers
   for (let x = 0; x < props.length; x++) {

      th = document.createElement('th');
      th.append( document.createTextNode(props[x]));
      thead.append(th);
    
   }

   // create columns 
   for (let i = 0; i < data.length; i++) {

      
      tbody.insertRow();
  
      let td = document.createElement('td')
      tbody.append(td);
      td.append(document.createTextNode(data[i].props))

      let tdeight = document.createElement('td')
      tbody.append(tdeight);
      tdeight.append(document.createTextNode(data[i].height))

      let tdPlace = document.createElement('td')
      tbody.append(tdPlace);
      tdPlace.append(document.createTextNode(data[i].place))
   }
}

generateTable(table, data);