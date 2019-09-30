// You are given two angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// the sum of angels of a triangle = 180
// then other angel is => 180 - sum of other two angels.

function otherAngle(a, b) {
  return 180 - (a + b);
}
console.log(otherAngle(30, 50));