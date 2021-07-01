// var ulang = true;
// while(ulang) {
// 	console.log('Hello World!');
// 	ulang = confirm('Lagi?');
// }

// increment = penambahan 
// decrement = pengurangan

var nilaiAwal = 1;
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
while(nilaiAwal <= 5) {
	console.log('Hello World ' + nilaiAwal + 'x');
// tanda ('' & "") adalah String untuk membungkus data, dan ( \') adalah escape character
// While adalah pengulangan yg dilakukan terus menerus selama kondisi(bernilai true)
// Console.log fungsinya untuk menampilkan teks Perintah ke Console Javascript/ WEB console
// console.log fungsinya untuk Memberi Tahu kita/ kita dapat Mengetahui kalau ada kesalahan(error) pada Program Kode Js kita
// Console.log jg bisa menuliskan perintah sintaks javascript langsung di dalam WEB console
// fungsi Console.log juga digunakan untuk Debugging pd program kita
nilaiAwal++;
// nilaiawal++(artinya ditambah 1 tiap pengulangan) untuk menambah secara berurutan yg jumlahnya sudah ditentukan dan mencegah looping forever
}