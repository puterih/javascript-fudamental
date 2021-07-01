// diawah ini adalah source code
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai

while( noAngkot <= angkotBeroperasi) {
// While digunakan utk melakukan pengulangan suatu kelompok perintah berdasarkan kondisi tertentu, dgn pemeriksaan kondisi dilakukakn setelah pengulangan dilakukan satu kali 
	console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
// tanda ('' & "") adalah String untuk membungkus data, dan ( \') adalah escape character
// Console.log fungsinya untuk menampilkan teks Perintah ke Console Javascript/ WEB console
// console.log juga berfungsi untuk Memberi Tahu kita/ dapat Mengetahui kalau ada kesalahan(error) pada Program Kode Js kita
// Console.log jg bisa menuliskan perintah sintaks javascript langsung di dalam WEB console
// fungsi Console.log juga digunakan untuk Debugging pd program kita
noAngkot++;
// nilaiawal++(artinya ditambah 1 tiap pengulangan) untuk menambah secara berurutan yg jumlahnya sudah ditentukan dan mencegah looping forever
}

for( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
// For adalah sebuah keyword lain selain while yg dpt digunakan utk melakukan pengulangan(ditentukan jumlahnya)
	console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}

// peredaan While & for: for untuk mengulang suatu proses yg telah diketahui jumlahnya, While untuk mengulang suatu proses yg belum diketahui jumlahnya
