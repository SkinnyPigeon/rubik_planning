var _ = require( 'lodash' )

// red
var R1 = [ 'Y7', 'B3', 'R1' ];
var R2 = [ 'Y8', 'R2' ];
var R3 = [ 'Y9', 'R3', 'G1' ];
var R4 = [ 'B6', 'R4' ];
var R5 = [ 'R5' ];
var R6 = [ 'R6', 'G4' ];
var R7 = [ 'B9', 'R7', 'W1' ];
var R8 = [ 'R8', 'Y2' ];
var R9 = [ 'R9', 'G7', 'W3' ];

// orange
var O1 = [ 'W7', 'B7', 'O1' ];
var O2 = [ 'W8', 'O2' ];
var O3 = [ 'W9', 'O3', 'G9' ];
var O4 = [ 'B4', 'O4' ];
var O5 = [ 'O5' ];
var O6 = [ 'O6', 'G6' ];
var O7 = [ 'B1', 'O7', 'Y1' ];
var O8 = [ 'O8', 'Y2' ];
var O9 = [ 'O9', 'G3', 'Y3' ];

// blue
var B1 = O1
var B2 = O4
var B3 = O7
var B4 = [ 'W6', 'B4' ];
var B5 = [ 'B5' ];
var B6 = [ 'B6', 'Y4' ];
var B7 = R7
var B8 = R4
var B9 = R1

// green
var G1 = O3
var G2 = O6
var G3 = O9
var G4 = [ 'Y6', 'G4' ];
var G5 = [ 'G5' ];
var G6 = [ 'G6', 'W4' ];
var G7 = R3
var G8 = R6
var G9 = R9

// yellow
var Y1 = O7
var Y2 = O8
var Y3 = O9
var Y4 = B6
var Y5 = [ 'Y5' ];
var Y6 = G4
var Y7 = R1
var Y8 = R2
var Y9 = R3

// white
var W1 = R7
var W2 = R7
var W3 = R9
var W4 = G6
var W5 = [ 'W5' ];
var W6 = B4
var W7 = O1
var W8 = O2
var W9 = O3

var forward = [ R1, R2, R3, 
              R4, R5, R6,
              R7, R8, R9 ]

var backward = [ O1, O2, O3, 
             O4, O5, O6,
             O7, O8, O9 ]

var topward = [ O7, O8, O9,
            B6, Y5, G4,
            R1, R2, R3 ]

var bottomward = [ R7, R8, R9,
               G6, W5, B4,
               O1, O2, O3 ]

var leftward = [ O1, O4, O7,
             B4, B5, B6,
             R7, R4, R1 ]

var rightward = [ O3, O6, O9,
              G4, G5, G6,
              R3, R6, R9 ]

var front = [ R1, R2, R3,
              R4, R5, R6,
              R7, R8, R9 ]

var back = [ O1, O2, O3,
             O4, O5, O6, 
             O7, O8, O9 ]

var top = [ Y1, Y2, Y3,
            Y4, Y5, Y6,
            Y7, Y8, Y9 ]

var bottom = [ W1, W2, W3,
               W4, W5, W6,
               W7, W8, W9 ]

var left = [ B1, B2, B3,
             B4, B5, B6,
             B7, B8, B9 ]

var right = [ G1, G2, G3,
              G4, G5, G6,
              G7, G8, G9 ] 

var cube = [ front, back, top, bottom, left, right ]
var spare = []

var testRed = [ 01, 02, 03,
                04, 05, 06,
                07, 08, 09 ]

var testYellow = [ 11, 12, 13, 
                   14, 15, 16, 
                   17, 18, 19 ]

var testGreen = [ 21, 22, 23,
                  24, 25, 26,
                  27, 28, 29 ]

var testWhite = [ 31, 32, 33,
                  34, 35, 36,
                  37, 38, 39 ] 

var testBlue = [ 41, 42, 43,
                 44, 45, 46,
                 47, 48, 49 ]

var testOrange = [ 51, 52, 53,
                   54, 55, 56,
                   57, 58, 59 ]   



var redFace = {
                     a: [ R1, R2, R3, R4, R5, R6, R7, R8, R9 ],
                     b: [ R7, R4, R1, R8, R5, R2, R9, R6, R3 ],
                     c: [ R9, R8, R7, R6, R5, R4, R3, R2, R1 ],
                     d: [ R3, R6, R9, R2, R5, R8, R1, R4, R7 ]
                   }

                   var yellowFace = {
                     a: [ Y1, Y2, Y3, Y4, Y5, Y6, Y7, Y8, Y9 ],
                     b: [ Y7, Y4, Y1, Y8, Y5, Y2, Y9, Y6, Y3 ],
                     c: [ Y9, Y8, Y7, Y6, Y5, Y4, Y3, Y2, Y1 ],
                     d: [ Y3, Y6, Y9, Y2, Y5, Y8, Y1, Y4, Y7 ]
                   }
                   var greenFace = {
                     a: [ G1, G2, G3, G4, G5, G6, G7, G8, G9 ],
                     b: [ G7, G4, G1, G8, G5, G2, G9, G6, G3 ],
                     c: [ G9, G8, G7, G6, G5, G4, G3, G2, G1 ],
                     d: [ G3, G6, G9, G2, G5, G8, G1, G4, G7 ]
                   }

                   var whiteFace = {
                     a: [ W1, W2, W3, W4, W5, W6, W7, W8, W9 ],
                     b: [ W7, W4, W1, W8, W5, W2, W9, W6, W3 ],
                     c: [ W9, W8, W7, W6, W5, W4, W3, W2, W1 ],
                     d: [ W3, W6, W9, W2, W5, W8, W1, W4, W7 ]
                   }

                   var blueFace = {
                     a: [ B1, B2, B3, B4, B5, B6, B7, B8, B9 ],
                     b: [ B7, B4, B1, B8, B5, B2, B9, B6, B3 ],
                     c: [ B9, B8, B7, B6, B5, B4, B3, B2, B1 ],
                     d: [ B3, B6, B9, B2, B5, B8, B1, B4, B7 ]
                   }

                   var orangeFace = {
                     a: [ O1, O2, O3, O4, O5, O6, O7, O8, O9 ],
                     b: [ O7, O4, O1, O8, O5, O2, O9, O6, O3 ],
                     c: [ O9, O8, O7, O6, O5, O4, O3, O2, O1 ],
                     d: [ O3, O6, O9, O2, O5, O8, O1, O4, O7 ]
                   }



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
  // console.log( face )
}

var frontAntiClockwise = function( face ) {
  frontClockwise( face )
  frontClockwise( face )
  frontClockwise( face )
  // console.log( face )
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

 // console.log( sides[0] )
}

var rotateAntiClockwise = function( cube ) {
  var sides = [ cube[1], cube[2], cube[3], cube[4] ]
  rotateClockwise( cube )
  rotateClockwise( cube )
  rotateClockwise( cube )
}

// frontAntiClockwise( testRed )

// rotateAntiClockwise( testCube )

var testCube = [ testRed, testYellow, testGreen, testWhite, testBlue, testOrange ]

var state = {
  cube: [ testRed, testYellow, testGreen, testWhite, testBlue, testOrange ] 
}

var testRedFace = {
  a: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  b: [ 7, 4, 1, 8, 5, 2, 9, 6, 3 ],
  c: [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ],
  d: [ 3, 6, 9, 2, 5, 8, 1, 4, 7 ]
}

var testYellowFace = {
  a: [ 11, 12, 13, 14, 15, 16, 17, 18, 19 ],
  b: [ 17, 14, 11, 18, 15, 12, 19, 16, 13 ],
  c: [ 19, 18, 17, 16, 15, 14, 13, 12, 11 ],
  d: [ 13, 16, 19, 12, 15, 18, 11, 14, 17 ]
}

var testGreenFace = {
  b: [ 21, 22, 23, 24, 25, 26, 27, 28, 29 ],
  c: [ 27, 24, 21, 28, 25, 22, 29, 26, 23 ],
  d: [ 29, 28, 27, 26, 25, 24, 23, 22, 21 ],
  a: [ 23, 26, 29, 22, 25, 28, 21, 24, 27 ]
}

var testWhiteFace = {
  a: [ 31, 32, 33, 34, 35, 36, 37, 38, 39 ],
  b: [ 37, 34, 31, 38, 35, 32, 39, 36, 33 ],
  c: [ 39, 38, 37, 36, 35, 34, 33, 32, 31 ],
  d: [ 33, 36, 39, 32, 35, 38, 31, 34, 37 ]
}

var testBlueFace = {
  b: [ 51, 52, 53, 54, 55, 56, 57, 58, 59 ],
  c: [ 57, 54, 51, 58, 55, 52, 59, 56, 53 ],
  d: [ 59, 58, 57, 56, 55, 54, 53, 52, 51 ],
  a: [ 53, 56, 59, 52, 55, 58, 51, 54, 57 ]
}

var testOrangeFace = {
  a: [ 61, 62, 63, 64, 65, 66, 67, 68, 69 ],
  b: [ 67, 64, 61, 68, 65, 62, 69, 66, 63 ],
  c: [ 69, 68, 67, 66, 65, 64, 63, 62, 61 ],
  d: [ 63, 66, 69, 62, 65, 68, 61, 64, 67 ]
}

var selectSide = function( side, cube ) {
  if( side === "red" ){ 
    cube[0] = testRedFace.a
    cube[2] = testGreenFace.a
    cube[4] = testBlueFace.a
    state.cube = [ cube[0], cube[1], cube[2], cube[3], cube[4], cube[5] ]
  } else if( side === "yellow") {
    cube[2] = testGreenFace.d
    cube[4] = testBlueFace.b
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
selectSide( "yellow", state.cube )
rotateClockwise( state.cube )
rotateAntiClockwise( state.cube )
selectSide( "red", state.cube )
rotateAntiClockwise( state.cube )
console.log( state.cube )













