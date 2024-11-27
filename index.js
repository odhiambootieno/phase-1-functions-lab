// Assuming the headquarters is at 42nd street
const HQ_LOCATION = 42;

function distanceFromHqInBlocks(street) {
  return Math.abs(street - HQ_LOCATION);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264; // 1 block = 264 feet
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264; // 1 block = 264 feet
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0; // Free for the first 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate for distances over 2000 feet
  } else {
    return 'cannot travel that far'; // Distance exceeds 2500 feet
  }
}
