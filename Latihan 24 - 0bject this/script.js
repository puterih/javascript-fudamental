// This adalah sebuah keyword special yg secara otomatis didefinisikan pd setiap function
// console.log(this);
// isi dari keyword this adalah window / object global. window === this (true)
// var a = 10;
// console.log(this.a);
// console.log(window.a);


// membuat object 

//  cara 1 - menggunakan function declaration
// function halo() {
// 	console.log(this);
// 	console.log('halo');
// }
// // window.halo();
// this.halo();
// this mengembalikan object global





// cara 2 - Object literal
// var obj = {a : 10, nama : 'Puteri'};
// obj.halo = function() {
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo();
// This mengembalikkan object yg bersangkutan





// cara 3 - constructor 
function Halo() {
	console.log(this);
	console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// This mengembalikkan object yg baru dibuat





