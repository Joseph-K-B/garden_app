import { getUser, findById } from '../data/data-functions.js';
import { renderCompanionRow, renderPlantRow } from './render-map.js';
import plants from '../data/plant-data.js';
import companionPlants from '../data/companion-data.js';


// const mapSection = document.getElementById('map-section');
const plantSection = document.getElementById('plant-section');
const compaSection = document.getElementById('compa-section');

const user = getUser();
const veggies = user.plant;
const companions = user.companions;

// RENDER PICKED VEGGIES
for (let item of veggies){
    const dataPlanta = findById(plants, item.id);

    const showIcons = renderPlantRow(dataPlanta, item.qty);

    plantSection.appendChild(showIcons);
}

// RENDER PICKED COMPANIONS
for (let item of companions){
    const dataCompanions = findById(companionPlants, item.id);

    const showCompanions = renderCompanionRow(dataCompanions, item.qty);

    compaSection.appendChild(showCompanions);
}

