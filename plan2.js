var redFace = [ 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9' ]
var yellowFace = [ 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7', 'Y8', 'Y9' ]
var greenFace = [ 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9' ]
var whiteFace = [ 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9' ]
var blueFace = [ 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9' ]
var orangeFace = [ 'O1', 'O2', 'O3', 'O4', 'O5', 'O6', 'O7', 'O8', 'O9' ]

function move(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

var frontClockwise = function( face ) {
  move( face, 2, 8 );
  move( face, 4, 7 );
  move( face, 1, 5 );
  move( face, 2, 4 );
  move( face, 0, 2 );
  move( face, 0, 1 );
}

var frontAntiClockwise = function( face ) {
  frontClockwise( face )
  frontClockwise( face )
  frontClockwise( face )
}

function moveArray( arr, arr2, fromIndex, toIndex ) {
  var element = arr[fromIndex];
  arr.splice( fromIndex, 1 );
  arr2.splice( toIndex, 0, element );
}

var rotateClockwise = function( cube ) {
  var sides = [ cube[1], cube[2], cube[3], cube[4] ]

  moveArray( sides[0], sides[1], 8, 0 )
  moveArray( sides[0], sides[1], 7, 1 )
  moveArray( sides[0], sides[1], 6, 2 )

  moveArray( sides[1], sides[2], 3, 0 )
  moveArray( sides[1], sides[2], 3, 1 )
  moveArray( sides[1], sides[2], 3, 2 )

  moveArray( sides[2], sides[3], 3, 9 )
  moveArray( sides[2], sides[3], 3, 9 )
  moveArray( sides[2], sides[3], 3, 9 )

  moveArray( sides[3], sides[0], 6, 6 )
  moveArray( sides[3], sides[0], 6, 7 )
  moveArray( sides[3], sides[0], 6, 8 )
}

var rotateAntiClockwise = function( cube ) {
  var sides = [ cube[1], cube[2], cube[3], cube[4] ]
  rotateClockwise( cube )
  rotateClockwise( cube )
  rotateClockwise( cube )
}

state = {
  cube: [ redFace, yellowFace, greenFace, whiteFace, blueFace, orangeFace ]
}

var selectSide = function( side, cube ) {
  if( side === "red" ){ 
    state.cube = [ cube[0], cube[1], cube[2], cube[3], cube[4], cube[5] ]
  } else if( side === "yellow") {
    state.cube = [ cube[1], cube[5], cube[2], cube[0], cube[4], cube[3] ]
  } else if( side === "orange" ) {
    state.cube = [ cube[5], cube[3], cube[2], cube[1], cube[4], cube[0] ]
  } else if( side === "white" ) {
    state.cube = [ cube[3], cube[0], cube[2], cube[5], cube[4], cube[1] ]
  } else if( side === "green" ) {
    state.cube = [ cube[2], cube[0], cube[1], cube[5], cube[3], cube[4] ]
  } else if( side === "blue" ) {
    state.cube = [ cube[4], cube[5], cube[1], cube[0], cube[3], cube[2] ]
  }
}


selectSide( "red", state.cube )
rotateClockwise( state.cube )
// selectSide( "yellow", state.cube )
// rotateClockwise( state.cube )
selectSide( "blue", state.cube )
rotateClockwise( state.cube )
// rotateAntiClockwise( state.cube )
// selectSide( "yellow", state.cube )
rotateAntiClockwise( state.cube )
selectSide( "red", state.cube )
rotateAntiClockwise( state.cube )


console.log( state.cube )





