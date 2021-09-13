let num = 99;
let bottle = 'bottles';
while (num > 0) {
  console.log(num + ' ' + bottle + ' of juice on the wall! ' + num + ' ' + bottle + ' of juice! Take one down, pass it around... ' + (num = num - 1) + ' ' + (num === 1 ? bottle = 'bottle' : bottle = 'bottles') + ' of juice on the wall!');
}