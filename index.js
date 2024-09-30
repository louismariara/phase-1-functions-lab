let BLOCKS_PER_FOOT = 264;

function distanceFromHqInBlocks(location) {
    const hqLocation = 42;
    return Math.abs(location - hqLocation);
}
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * BLOCKS_PER_FOOT;
  }
  function distanceTravelledInFeet(start, destination) {
      return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination));
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled > 2500) {
      return 'cannot travel that far';
    } else if (distanceTravelled <= 400) {
      return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      return (distanceTravelled - 400) * 0.02;
    } else {
      return 25;
    }
  };