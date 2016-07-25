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

function moveArray( arr, arr2, fromIndex, toIndex ) {
  var element = arr[fromIndex];
  arr.splice( fromIndex, 1 );
  arr2.splice( toIndex, 0, element );
}

var rotateClockwise = function( cube ) {
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

rotateClockwise( testCube )


// 789 147 123 369 
// 147 123 369 789 

// 678 036 012 258
// 036 012 258 678 








