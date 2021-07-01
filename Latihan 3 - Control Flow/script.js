// dibawah ini adalah source code
var angka = prompt('Masukkan angka:');
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
// Prompt untuk tampil kolom window kecil dan user bisa isi kolomnya
// Prompt disimpan ke variabel biar nilai yg di input oleh user bisa ditampung/ diakses
// tanda ('' & "") adalah String untuk membungkus data, dan ( \') adalah escape character 
// sintaks pengkondisian: if, else if, else if, else, switch
if( angka % 2 === 0 ) {
	alert(angka + ' Adalah bilangan GENAP!');
} else {
	alert(angka + ' Adalah bilangan GANJIL!');
}
// Alert untuk menghasilkan kolom window kecil dan hanya memberikan pesan sederhana ke user
// Alert(angka); untuk menyatukan huruf yg user isi ke kolom alert