import { getUser, findById } from '../data/data-functions.js';
import { renderCompanionRow, renderPlantRow } from './render-map.js';
import plants from '../data/plant-data.js';
import companionPlants from '../data/companion-data.js';
// eslint-disable-next-line no-undef
Chart.defaults.color = 'black';
// eslint-disable-next-line no-undef
Chart.defaults.font.size = 20;




// const mapSection = document.getElementById('map-section');
const plantSection = document.getElementById('plant-section');
const compaSection = document.getElementById('compa-section');



const user = getUser();
let name = [];
let companionName = [];
let plantChart = [];
let companionChart = [];
const veggies = user.plant;
const companions = user.companions;

// RENDER PICKED VEGGIES
for (let item of veggies){
    const dataPlanta = findById(plants, item.id);
    name.push(item.name);
    plantChart.push(item.qty);
    const showIcons = renderPlantRow(dataPlanta, item.qty);

    plantSection.appendChild(showIcons);
}

// RENDER PICKED COMPANIONS
for (let item of companions){
    const dataCompanions = findById(companionPlants, item.id);
    companionName.push(item.name);

    companionChart.push(item.qty);
    const showCompanions = renderCompanionRow(dataCompanions, item.qty);

    compaSection.appendChild(showCompanions);
}

var ctx = document.getElementById('myChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: name,
        datasets: [{
            label: name,
            data: plantChart,
            backgroundColor: [
                '#73E2A7',
            ],
            borderColor: [
                'black',
               
            ],
            borderWidth: 3 },
        { label: 'companions',
            hidden: true,
            data: companionChart,
            backgroundColor: [
                'brown',
            ],
            borderColor: [
                'white',
                
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx1 = document.getElementById('myChart1').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: companionName,
        datasets: [{
            label: 'companions',
            data: companionChart,
            backgroundColor: [
                '#DEF4C6',
            ],
            borderColor: [
                'black',
               
            ],
            borderWidth: 3 },
        { label: 'companions',
            hidden: true,
            data: companionChart,
            backgroundColor: [
                'blue',
            ],
            borderColor: [
                'white',
                
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});