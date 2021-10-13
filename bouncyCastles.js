const PI = 3.14159;

const sphereVolume = function(radius) {
  return (4/3) * PI * (radius ** 3); 
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  return (1/3) * PI * (radius ** 2) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {

};

const totalVolume = function (solids) {

};