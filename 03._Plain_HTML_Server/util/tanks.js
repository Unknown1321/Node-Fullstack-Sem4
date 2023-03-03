const { tanks } = require("./tanks.json");



function getTanks(){
    return tanks;
}

function addTanks(tank){
    tanks.push(tank);
    return tanks;
}

//console.log(module);

module.exports = {
    getTanks,
    addTanks
}