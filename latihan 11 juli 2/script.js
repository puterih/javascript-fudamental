var a = '';
for( var i = 0; i < 5 ; i++ ) {
    for( var h = 4; h > i; h-- ) {
    a += '-';
}
  a += '\n^';
}
console.log(a);

