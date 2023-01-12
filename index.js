// Code your solution in this file!
function distanceFromHqInBlocks(b) {
    return Math.abs(b-42);
}

function distanceFromHqInFeet(b) {
    return distanceFromHqInBlocks(b) * 264;
}

function distanceTravelledInFeet(start, end) {
    return distanceFromHqInFeet(end) - distanceFromHqInFeet(start);
}

function calculatesFarePrice(start, end) {
    if(distanceTravelledInFeet(start, end) <= 400) {
        return 0;
    }
    else if(400 < distanceTravelledInFeet(start, end) && distanceTravelledInFeet(start, end) < 2000){
        return (distanceTravelledInFeet(start, end) - 400) * 0.02;
    }
    else if(2000 <= distanceTravelledInFeet(start, end) && distanceTravelledInFeet(start, end) < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}