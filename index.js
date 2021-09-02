// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) { 
    if (pickupLocation >= 42){
    return pickupLocation - 42;
    } else {
        return 42 - pickupLocation;
    }
}

function distanceFromHqInFeet(pickupLocation) {
    if (pickupLocation >= 42){
        return distanceFromHqInBlocks(pickupLocation) * 264
    } else {
        return distanceFromHqInBlocks(pickupLocation) * 264
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination){
        return (destination - start) * 264;
    }else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance < 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return  (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if(distance > 2500) {
        return 'cannot travel that far';
    } 
}