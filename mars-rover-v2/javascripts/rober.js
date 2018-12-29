var rover = { direction: "N", coordinates: { x: 0, y: 0 }, travelLog: [] };

function turnLeft(direction) {
  var left;
  switch (direction) {
    case "N":
      left = "W";
      break;
    case "W":
      left = "S";
      break;
    case "S":
      left = "E";
      break;
    case "E":
      left = "N";
      break;
  }
  console.log("turnLeft was called!");
  return left;
}

function turnRight(direction) {
  var right;
  switch (direction) {
    case "N":
      right = "W";
      break;
    case "W":
      right = "S";
      break;
    case "S":
      right = "E";
      break;
    case "E":
      right = "N";
      break;
  }
  console.log("turnRight was called!");
  return right;
}

function moveForward(direction, coordinates) {
  const newCoordinates = { x: coordinates.x, y: coordinates.y };
  switch (direction) {
    case "N":
      newCoordinates.y -= 1;
      break;
    case "W":
      newCoordinates.x -= 1;
      break;
    case "S":
      newCoordinates.y += 1;
      break;
    case "E":
      newCoordinates.x += 1;
      break;
  }
  const newCoordinatesInRange = outOfRange(newCoordinates);
  rover.travelLog.push(newCoordinates);
  console.log("moveForward was called");
  return newCoordinates;
}

function moves(list) {
  list = list.toUpperCase();
  for (var i = 0; i < list.length; i++) {
    if (list[i] == "F") {
      rover.coordinates = moveForward(rover.direction, rover.coordinates);
    } else if (list[i] == "L") {
      rover.direction = turnLeft(rover.direction);
    } else if (list[i] == "R") {
      rover.direction = turnRight(rover.direction);
    }
  }
}

function outOfRange(coordinates) {
  const newCoordinates = { x: coordinates.x, y: coordinates.y };
  if (newCoordinates.y < 0) {
    newCoordinates.y = 0;
  } else if (newCoordinates.x < 0) {
    newCoordinates.x = 0;
  }
  return newCoordinates;
}

moves("rffrfflfrff");

console.log(rover);
