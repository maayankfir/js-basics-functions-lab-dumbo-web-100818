// Code your solution in this file!
function distanceFromHqInBlocks(blocks)  {
  x = blocks - 42
  result = Math.abs(x)
  return result
}

function distanceFromHqInFeet(blocks) {
  x = distanceFromHqInBlocks(blocks);
  result = x * 264
  return result
}

function distanceTravelledInFeet(start, destination) {
  x = (start - destination) * 264
  result = Math.abs(x)
  return result
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
    }
}
