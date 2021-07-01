// Parameter adalah variael yg di tulis di dlm kurung pd saat function dibuat, digunakan utk menampung nilai yg dikirimkan saat function di panggil
// Argument adalah nilai yg dikirimkanke parameter saat fungsi di Panggil

// contoh 1

// function tambah(a, b) {
// keyword function(fungsi) yaitu kode program yg dirancang untuk menyelesaikan sebuah tugas tertentu & merupakan bagian dari program utama.
// function adalah sub program/sub-routine yg dapat dipanggil di bagian lain pd program
// function/prosedur yaitu kumpulan statement untuk melakukan tugas/menghitung seuah nilai
// menggunakan function untuk mempersingkat coding kita dan dapat memanggilnya ber ulang / ber x x agar memudahkan menelusuri kesalahan dlm coding
// Built-in function yaitu fungsi yg sudah dibuat oleh js & tinggak memanggilnya. cnth: alert();
// return pd function adalah nilai kembaliannya, fungsinya untuk ngasih tau interpreter bhwa kita telah selesai mengerjakan sesuatu, dan inilah hasilnya dan untuk memberhentikan function
// 	return a + b;
// }

// dibawah ini adalah source code

// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
// var hasil = tambah(2, 3);
// console.log(hasil);
// // bisa yg diatas/ dibawah
// var a = 2;
// var b = 3;
// var hasil = tambah(a, b);
// console.log(hasil);
// // bisa console/ alert
// alert(hasil);

// selesai

// contoh 2

// function tambah(a, b) {
// 	return a + b;
// }

// var a = parseInt(prompt('Masukkan Nilai 1 :'));
// var b = parseInt(prompt('Masukkan Nilai 2 :'));
// var hasil = tambah(a*2, b*2);
// console.log(hasil);

// selesai

// contoh 3

// function tambah(a,b) {
// 	return a + b;
// }

// function kali(a,b) {
// 	return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
// console.log(hasil);
// Console.log fungsinya untuk menampilkan teks Perintah ke Console Javascript/ WEB console
// console.log juga berfungsi untuk Memberi Tahu kita/ dapat Mengetahui kalau ada kesalahan(error) pada Program Kode Js kita
// Console.log jg bisa menuliskan perintah sintaks javascript langsung di dalam WEB console
// fungsi Console.log juga digunakan untuk Debugging pd program kita

// selesai

// arguments yaitu Array yg berisi nilai yg dikirimkan saat fungsi dipanggil

// sudo pd ar
function tambah() {
	var hasil = 0;
// var hasil yg nilainya nol
	for( var i = 0; i < arguments.length; i++ ) {
		hasil += arguments[i];
	}
// arguments.length untuk mengetahui berapa isinya, berapa panjangnya
// i++ untuk agar tidak Looping Forever
	return hasil;

}

var coba = tambah(1,2,3,4,5);
// memanggil function tambah dan diisi dengan argumen 1,2,3,4,5
// menggunakan argument tanpa parameter tidak apa apa krn ditangani oleh vriabel argument
console.log(coba);