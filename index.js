// Code your solution in this file!
function distanceFromHqInBlocks(pickupStreet) {
    const headquartersStreet = 42; 
    const distance = Math.abs(pickupStreet - headquartersStreet);
    return distance;
  }

  function distanceFromHqInFeet(pickupStreet) {
    const blockLengthInFeet = 264; 
    const headquartersStreet = 42; 
    const distanceInBlocks = Math.abs(pickupStreet - headquartersStreet);
    const distanceInFeet = distanceInBlocks * blockLengthInFeet;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(startingBlock, endingBlock) {
    const blockLengthInFeet = 264;
    const distanceInBlocks = Math.abs(endingBlock - startingBlock);
    const distanceInFeet = distanceInBlocks * blockLengthInFeet;
    return distanceInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const feetTraveled = distanceTravelledInFeet(start, destination);
  
    if (feetTraveled <= 400) {
      return 0; 
    } else if (feetTraveled <= 2000) {
      
      const chargeableFeet = feetTraveled - 400;
      const fareInCents = chargeableFeet * 2;
      return fareInCents / 100; 
    } else if (feetTraveled <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }