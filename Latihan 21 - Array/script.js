// Array(secara umum) yaitu susunan sistematis dari objek objek yg serupa
// Array(Programming) yaitu Tipe data yg digunakan untuk mendeskripsikan kumpulan elemen (bisa nilai/var), yg tiap elemennya memiliki index
// Array adalah Variabel yg lebih sakti karema bisa menampung lebih dari satu nilai
// guna array untuk mempermudah pengelolaan nilai/ value/ data dlm hal penelusuran dan pencarian, manajemen memori yaitu tidak perlu membuar var lebih banyak
// array ertipe object memiliki method length, cnth: console.log(boneka.length); 
// index array selalu dimulai dari nol
// .length untuk menghitung jumlah elemen, jd tidak sama dengan jumlah di index karena index array dimulai dari nol
// elemen pd array boleh beda tipe string, integer, boolean, ad function, dan array(punya array di dalam array)
// Manipulasi Array 

// 1. Menambah isi array
// var arr = ["a", 1, true];
// console.log(arr[1]);
// ------
// var arr = [];
   // Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
// arr[0] = 'puteri';
// arr[1] = 'husnul';
// arr[2] = 'khotimah';

// console.log(arr);
   // Console.log fungsinya untuk menampilkan teks Perintah ke Console Javascript/ WEB console
   // console.log juga berfungsi untuk Memberi Tahu kita/ dapat Mengetahui kalau ada kesalahan(error) pada Program Kode Js kita
   // Console.log jg bisa menuliskan perintah sintaks javascript langsung di dalam WEB console
   // fungsi Console.log juga digunakan untuk Debugging pd program kita
// ------

// 2. Menghapus isi array
// var arr = ['puteri', 'husnul', 'khotimah'];
// tanda ('' & "") adalah String untuk membungkus data, dan ( \') adalah escape character
// arr[1] = undefined;
// console.log(arr);
// ------

// 3. Menampilkan isi array
// var arr = ['puteri', 'husnul', 'khotimah', 'hc'];

// for( var i = 0; i < arr.length; i++ ) {
	// For adalah sebuah keyword lain selain while yg dpt digunakan utk melakukan pengulangan
// // .length untuk menghitung ada berapa isi var arr, sehingga jika arr ditambah maka secara otomatis akan terhitung sendiri
// 	console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// 	// (i+1) akan dimulai dari 1, krn index array selalu dimulai dr nol
// }
// -cara menambah dan menghapus isi array yg diatas ini masih secara manual, untuk mempermudah bisa menggunakan method pd array

// Method pada Array
// .length untuk mengetahui berapa jumlah elemen yg ada pd array
// join adalah method yg menggabungkan seuruh isi array dan mengubahnya jd sebuah string('')ke kanan
// 1. join
// var arr = ['puteri', 'husnul', 'khotimah', 'hc'];
// console.log(arr.join(' - '));
// .join artinya kita akan memanggil metodejoin pd array. karena dia method, diharuskan menggunakan()
// method adalah function yg ada di dlm sebuah object

// push, pop, shift, unshiftdigunakan untuk menambah/ menghapus elemen array (hapali dlm bhs.igg)

// 2. push & pop 
// push(mendorong masuk elemen baru di akhir array) atau menambah elemen array di Akhir array
// arr.push('quinn');
// push bisa ditambah > 1
// pop(kebalikan dr push) yaitu menghilangkan/memecahkan elemen Akhir dari sebuah array 
// sedangkan pop harus satu per satu
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// unshift & shift sama persis dgn push & pop TAPI unshift & shift bekerja untuk elemen Pertama pd array
// arr.unshift('namaku');
// unshift(menambahkan/menggeser kedalam di elemen Pertama)
// console.log(arr.join(' - '));
// -----
// arr.shift();
// shift(mengeluarkan di elemen Pertama)
// console.log(arr.join(' - '));
// pop & shiftbenar benar menghapus bukan menjadi undefined

// 4. slice & splice

// Splice(Menyambung/menambal) agarbisa menyisipkan sebuah elemen di tengah tengah

// Splice
// (RUMUS): splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// var arr = ['puteri', 'husnul', 'khotimah'];
// arr.splice(1, 2, 'quinn', 'mlbb');
// console.log(arr.join(' - '));

// Slice
// Slice(mengiris array) digunakan ketika kita ingin mengambil beberapa bagian pd array utk menjadi array yg baru
// (RUMUS): slice(awal,akhir);
// var arr = ['puteri', 'husnul', 'khotimah', 'quinn', 'mlbb'];
// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 5. foreach & map, kedua ini digunakan utk melakukan looping pd array
// foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama= ['puteri', 'husnul', 'khotimah'];
// for( var i = 0; i < angka.length; i++ ) {
// 	console.log(angka[i]);
// angka.forEach(function(e) {
// 	console.log(e);
// })
// nama.forEach(function(e, i) {
// 	console.log('Mahasiswa ke-' + (i+1) + ' adalah: ' 
// 		+ e);
// })

// 7. map(mengembalikan nilai array)
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e) {
// 	return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. Sort
// var angka = [1,5,3,7,4,2,6,8,15,10];
// angka.sort(function(a,b) {
// 	return a-b;
// });
// console.log(angka.join(' - '));

// 9. Filter & find, kedua ini untukmencari elemen pd array
// find(mengembalikan 1 nilai) sedangkan filter(mengembalikan banyak nilai)

var angka = [1,5,3,7,4,2,6,8,15,10];
var angka2 = angka.find(function(x) {
	return x > 5;
});
console.log(angka2);


