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

var testCube = [ testRed, testYellow, testGreen, testWhite, testBlue, testOrange ]

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

function moveArray( arr, arr2, fromIndex, toIndex ) {
  var element = arr[fromIndex];
  arr.splice( fromIndex, 1 );
  arr2.splice( toIndex, 0, element );
}

var sideSelect = function( cube ) {
  var sides = [ cube[1], cube[2], cube[3], cube[4] ]

  moveArray( sides[0], sides[1], 8, 6 )
  moveArray( sides[0], sides[1], 7, 3 )
  moveArray( sides[0], sides[1], 6, 0 )

  moveArray( sides[1], sides[2], 9, 0 )
  moveArray( sides[1], sides[2], 5, 1 )
  moveArray( sides[1], sides[2], 1, 2 )

  moveArray( sides[2], sides[3], 3, 2 )
  moveArray( sides[2], sides[3], 7, 5 )
  moveArray( sides[2], sides[3], 9, 8 )

  moveArray( sides[3], sides[0], 3, 6 )
  moveArray( sides[3], sides[0], 6, 7 )
  moveArray( sides[3], sides[0], 9, 8 )

  console.log( sides[0] )
  console.log( sides[1] )
  console.log( sides[2] )
  console.log( sides[3] )
}


// 789 147 123 369
// 147 123 369 789

// 678 036 012 258
// 036 012 258 678 
sideSelect(testCube)















