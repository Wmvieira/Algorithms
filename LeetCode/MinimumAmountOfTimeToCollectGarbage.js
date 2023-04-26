/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
 var garbageCollection = function(garbage, travel) {
  
    let pickUpGarbage = garbage.join('').length;
    
    let travels = travelTruckM = travelTruckP = travelTruckG = 0
    
    garbage.shift();

    for (let i = 0; i < travel.length; i++ ) {


        travelTruckM += travel[i]
        travelTruckP += travel[i]
        travelTruckG += travel[i]

        if(garbage[i].includes('M')) {travels += travelTruckM; travelTruckM = 0}
        if(garbage[i].includes('P')) {travels += travelTruckP; travelTruckP = 0}
        if(garbage[i].includes('G')) {travels += travelTruckG; travelTruckG = 0}

    }
    
    return (travels + pickUpGarbage)
};

garbageCollection(["G","P","GP","GG"], [2,4,3])