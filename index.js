const axios = require('axios');
const proj4 = require('proj4');

let utm = "+proj=utm +zone=30";
let wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
console.log(proj4(utm,wgs84,[373460.71256896, 4067992.0781118]));

// Make a request for a user with a given ID
axios.get('https://datosabiertos.malaga.eu/recursos/urbanismoEInfraestructura/equipamientos/da_desfibriladores-25830.geojson')
  .then(function (response) {
    // handle success
    let DEAs = response.data.features;
    let alldayDEA = [];
    let notFreeDEA = [];
    let privateDEA = []


    DEAs.map((dea)=>{
        // console.log(dea.properties.horarios)
        // if(dea.properties.horarios && dea.properties.horarios.includes('24')) {
        //     alldayDEA.push(dea);
        // }

        // if(dea.properties.titularidad === 'UMA') {
        //     privateDEA.push(dea);
        //     console.log(dea.properties.titularidad)
        // }
        
    });

    // let umaDEA = DEAs.filter(dea => dea.properties.titularidad === 'UMA');

    // console.log(umaDEA);

    // console.log(privateDEA.length)

    // console.log(DEAs.length)
    // console.log(alldayDEA.length)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });