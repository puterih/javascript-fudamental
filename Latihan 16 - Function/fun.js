// keyword function(fungsi) yaitu kode program yg dirancang untuk menyelesaikan sebuah tugas tertentu & merupakan bagian dari program utama.
// function adalah sub program/sub-routine yg dapat dipanggil di bagian lain pd program
// function/prosedur yaitu kumpulan statement untuk melakukan tugas/menghitung seuah nilai
// menggunakan function untuk mempersingkat coding kita dan dapat memanggilnya ber ulang / ber x x agar memudahkan menelusuri kesalahan dlm coding
// Built-in function yaitu fungsi yg sudah dibuat oleh js & tinggak memanggilnya. cnth: alert();
// return pd function adalah nilai kembaliannya, fungsinya untuk ngasih tau interpreter bhwa kita telah selesai mengerjakan sesuatu, dan inilah hasilnya dan untuk memberhentikan function

// Diawah ini adalah source code
// ini contoh pembuatan function declaration
function jumlahVolumeDuaKubus(a, b) {
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
	var volomeA;
	var columeB;
	var total;

	volumeA = a * a * a;
	volumeB = b * b * b;

	total = volumeA + volumeB;

	return total;
// return (Nilai Kembalian)
}

// bisa menggunakan console dan alert
// console.log(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(8, 3));
// bisa dijalankan/dipanggil berulang ulang, contoh: menggunakan 2 alert
alert(jumlahVolumeDuaKubus(10, 15));
// Alert menghasilkan kolom window kecil & hanya memberikan pesan sederhana ke user
// ini contoh membuat function expression
// var jumlahDuaBilangan = function(a, b) {
// 	var total;
// 	total = a + b;

// 	return total;
// }

// Console.log fungsinya untuk menampilkan teks Perintah ke Console Javascript/ WEB console
// console.log berfungsi untuk Memberi Tahu kita/ dapat Mengetahui kalau ada kesalahan(error) pada Program Kode Js kita
// Console.log jg bisa menuliskan perintah sintaks javascript langsung di dalam WEB console
// fungsi Console.log juga digunakan untuk Debugging pd program kita
// alert menampilkan pop up kecil dan memberikan pesan sederhana kepada user