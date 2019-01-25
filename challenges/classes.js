// 1. Copy and paste your prototype in here and refactor into class syntax.
/* function CuboidMaker(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  */

class CuboidMakerTwo {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class CubeMaker extends CuboidMakerTwo {
  constructor(length, width, height) {
    super(length, width, height);
  }
  cubeVolume() {
    return this.length * this.width * this.height;
  }
  cubeSurfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
}

const cuboidTwo = new CuboidMakerTwo(4, 5, 5);
const cube = new CubeMaker(4, 4, 4);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube.cubeVolume()); // 64
console.log(cube.cubeSurfaceArea()); // 96
