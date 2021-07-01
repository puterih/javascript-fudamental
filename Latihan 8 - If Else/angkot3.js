// dibawah ini adalah source code
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai

for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
// For adalah sebuah keyword lain selain while yg dpt digunakan utk melakukan pengulangan(ditentukan jumlahnya++)	
// sintaks pengkondisian: if, else if, else if, else, switch
	if( noAngkot <= angkotBeroperasi) {
	console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik.');
// tanda ('' & "") adalah String untuk membungkus data, dan ( \') adalah escape character
// Console.log fungsinya untuk menampilkan teks Perintah ke Console Javascript/ WEB console
// console.log juga berfungsi untuk Memberi Tahu kita/ dapat Mengetahui kalau ada kesalahan(error) pada Program Kode Js kita
// Console.log jg bisa menuliskan perintah sintaks javascript langsung di dalam WEB console
// fungsi Console.log juga digunakan untuk Debugging pd program kita
	} else if(noAngkot === 8 ) noAngkot{
		console.log(Angkot No. ' + noAngkot + ' sedang lembur.);
} else {
	console.log('Angkot No. ' + noAngkot + ' sedang tidak Beroperasi.');
	}
}
