let golfNames = ["Hole-in-One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// Using if else chain
function golfScore(par, strokes) {
  if (strokes == 1) {
    return golfNames[0];
  } else if (strokes <= par - 2) {
    return golfNames[1];
  } else if (strokes == par - 1) {
    return golfNames[2];
  } else if (strokes == par) {
    return golfNames[3];
  } else if (strokes == par + 1) {
    return golfNames[4];
  } else if (strokes == par + 2) {
    return golfNames[5];
  } else if (strokes >= par + 3) {
    return golfNames[6];
  } else {
    return "Change Values!";
  }
}

//Using swtich instead of if else chain
/*function golfScore(par,strokes) {
  let name = "";
  switch(strokes) {
    case strokes == 1:
    name = golfNames[0];
    break;
    case strokes <= par - 2:
    name = golfNames[1];
    break;
    case strokes == par - 1:
    name = golfNames[2];
    break;
    case strokes == par:
    name = golfNames[3];
    break;
    case strokes == par + 1:
    name = golfNames[4];
    break;
    case strokes == par + 2:
    name = golfNames[5];
    break;
    case strokes == par + 3:
    name = golfNames[6];
  }
  return name;
}*/




function grabValues() {
  var par = document.getElementById("par").value;
  var strokes = document.getElementById("stroke").value;
  var name = golfScore(par, strokes);
  //console.log(par);
  //console.log(strokes);
  //console.log(name);
  document.getElementById("name").innerHTML = name;
}

var name = golfScore(1, 3);
console.log(name);