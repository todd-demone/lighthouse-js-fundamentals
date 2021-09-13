let i = 1;
while (i <= 20) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('JuliaJames');
  } else if (i % 3 === 0) {
    console.log('Julia');
  } else if (i % 5 === 0) {
    console.log('James');
  } else {
    console.log(i);
  }
  i = i +  1;
}