// Scope(Lingkup var)
// ada 2 scope, yaitu Block Scope dan Function scope
// block scope menggunakan {} sehingga diluar dari kurung kur awal buka&tutup berbeda dengan kode yg ada dilalam {}
// Javascript TIDAK menganut lock scope, namun Js menggunakan function scope
// global scope / window scope
// var b = 1;

// function tes() {
// 	var a = 2;
// 	// console.log(b);
// // jika console digunakan untuk didalam function maupun diluar function(global scope) maka akan bekerja
// jika console di block scope ini diberi nama (window.a); maka akan dibuka var global scope
// di dalam block scope ini harus menggunakan var
// }

// tes();
// console.log(b);
// jika console digunakan untuk didalam function, maka hasilnya not defined, dan jika digunakan untuk diluar function maka akan bekerja
// Name Conflic, yg dimana kita punya 2 var dgn nama yg sama tetapi scope nya berbeda, jd tidak akn menimpa var di block scope dan hasilnya keluar var di global scope

// --catatan--
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
// Console.log fungsinya untuk menampilkan teks Perintah ke Console Javascript/ WEB console
// console.log juga berfungsi untuk Memberi Tahu kita/ dapat Mengetahui kalau ada kesalahan(error) pada Program Kode Js kita
// Console.log jg bisa menuliskan perintah sintaks javascript langsung di dalam WEB console
// fungsi Console.log juga digunakan untuk Debugging pd program kita