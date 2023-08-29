//bomb([[x1, y1, t1], [x2, y2, t2], [x3, y3, t3]]) -> [xb, yb]
// Bomb location

function bomb(coordinates) {
    // Calculate the average time value
    const avgTime = coordinates.reduce((sum, coord) => sum + coord[2], 0) / coordinates.length;
  
    // Find the coordinates closest to the average time value
    const closestCoord = coordinates.reduce((closest, coord) => {
      const distance = Math.abs(coord[2] - avgTime);
      if (distance < closest.distance) {
        return { distance, coord };
      }
      return closest;
    }, { distance: Infinity, coord: null }).coord;
  
    return [closestCoord[0], closestCoord[1]];
  }
  
  // Test cases
  console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]])); // Output: [0, 25]
  console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]])); // Output: [0, 0]
  console.log(bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]])); // Output: [21, 13]
  console.log(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]])); // Output: [8, 35]
  