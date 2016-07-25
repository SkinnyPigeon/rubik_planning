var _ = require( 'lodash' )

var R1 = [ 'Y7', 'B3', 'R1' ];
var R2 = [ 'Y8', 'R2' ];
var R3 = [ 'Y9', 'R3', 'G1' ];
var R4 = [ 'B6', 'R4' ];
var R5 = [ 'R5' ];
var R6 = [ 'R6', 'G4' ];
var R7 = [ 'B9', 'R7', 'W1' ];
var R8 = [ 'R8', 'Y2' ];
var R9 = [ 'R9', 'G7', 'W3' ];

var O1 = [ 'W7', 'B7', 'O1' ];
var O2 = [ 'W8', 'O2' ];
var O3 = [ 'W9', 'O3', 'G9' ];
var O4 = [ 'B4', 'O4' ];
var O5 = [ 'O5' ];
var O6 = [ 'O6', 'G6' ];
var O7 = [ 'B1', 'O7', 'Y1' ];
var O8 = [ 'O8', 'Y2' ];
var O9 = [ 'O9', 'G3', 'Y3' ];

var B4 = [ 'W6', 'B4' ];
var B5 = [ 'B5' ];
var B6 = [ 'B6', 'Y4' ];

var G4 = [ 'Y6', 'G4' ];
var G5 = [ 'G5' ];
var G6 = [ 'G6', 'W4' ];

var Y5 = [ 'Y5' ];

var W5 = [ 'W5' ];

var front = [ R1, R2, R3, 
              R4, R5, R6,
              R7, R8, R9 ]

var back = [ O1, O2, O3, 
             O4, O5, O6,
             O7, O8, O9 ]

var top = [ R1, R2, R3,
            B6, Y5, G4,
            O7, O8, O9 ]

var bottom = [ R7, R8, R9,
               G6, W5, B4,
               O1, O2, O3 ]

var left = [ O1, O4, O7,
             B4, B5, B6,
             R7, R4, R1 ]

var right = [ O1, O4, O7,
              G4, G5, G6,
              R3, R6, R9 ]

var test = [ 1, 2, 3, 
4, 5, 6, 
7, 8, 9 ]

function move(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

console.log( test )

var frontClockwise = function( face ) {
  move( face, 2, 8 );
  move( face, 4, 7 );
  move( face, 1, 5 );
  move( face, 2, 4 );
  move( face, 0, 2 );
  move( face, 0, 1 );
}







