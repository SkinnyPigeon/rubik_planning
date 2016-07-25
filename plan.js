var _ = require( 'lodash' )

var R1 = [ 'W7', 'B3', 'R1' ];
var R2 = [ 'W8', 'R2' ];
var R3 = [ 'W9', 'R3', 'G1' ];
var R4 = [ 'B6', 'R4' ];
var R5 = [ 'R5' ];
var R6 = [ 'R6', 'G4' ];
var R7 = [ 'B9', 'R7', 'Y1' ];
var R8 = [ 'R8', 'Y2' ];
var R9 = [ 'R9', 'G7', 'Y3' ];

var O1 = [ 'Y7', 'B9', 'O1' ];
var O2 = [ 'Y8', 'O2' ];
var O3 = [ 'Y9', 'O3', 'G7' ];
var O4 = [ 'B8', 'O4' ];
var O5 = [ 'O5' ];
var O6 = [ 'O6', 'G8' ];
var O7 = [ 'B7', 'O7', 'W1' ];
var O8 = [ 'O8', 'W2' ];
var O9 = [ 'O9', 'G9', 'W3' ];

var B4 = [ 'W4', 'B4' ];
var B5 = [ 'B5' ];
var B6 = [ 'B6', 'Y4' ];

var G4 = [ 'Y6', 'G4' ];
var G5 = [ 'G5' ];
var G6 = [ 'G6', 'W6' ];

var Y5 = [ 'Y5' ];

var W5 = [ 'W5' ];

var front = [ R1, R2, R3, 
              R4, R5, R6,
              R7, R8, R9 ]

var back = [ O1, O2, O3, 
             O4, O5, O6,
             O7, O8, O9 ]

var top = [ R7, R8, R9,
            B6, Y5, G4,
            O1, O2, O3 ]

var bottom = [ O7, O8, O9,
               B4, W5, G6,
               R1, R2, R3 ]

var left = [ R1, R4, R7,
             B4, B5, B6,
             O1, O4, O7 ]

var right = [ R3, R6, R9,
              G4, G5, G6,
              O3, O6, O9 ]

var toMove = 0;

var move = function( from, to ) {
  Array.prototype.move = function(from, to) {
      this.splice(to, 0, this.splice(from, 1)[0]);
  };
}

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

    console.log( front )

var frontClockwise = function( face ) {
  for( var i = 1; i < 10; i ++) {
    // if( i < 4) {
    //   j = i * 3

    //   arraymove( face, i, j )
    //   console.log( face )
  //   } else {
      if( i % 4 === 0 ) {
        k = i - 1
        j = (i / 2) - 1
        arraymove( face, k, j )
        console.log( face )
      }
  //       // move( face[i], face[(i / 2)] )
  //     } else {
  //       if( i === 6 ) {
  //         // move( face[i], face[(i + 2)] )
  //       } else {
  //         if( i === 7 ) {
  //           // move( face[i], face[(i - 6)] )
  //         } else {
  //           if( i === 9 ) {
  //             // move( face[i], face[(i - 2)] )
  //           }
  //         }
  //       }
  //     }
    // }
  }
}

front = frontClockwise( front )

var a = [ 1, 2, 3]

arraymove( a, 0, 2 )
console.log( a )




