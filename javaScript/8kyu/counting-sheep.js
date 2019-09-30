// Counting Sheep

/**
 * Consider an array of sheep where some sheep may be missing from their place. 
 * We need a function that counts the number of sheep present in the array 
 * (true means present).
 * 
 * var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
 */

var array1 =
  [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];


function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheeps(array1))