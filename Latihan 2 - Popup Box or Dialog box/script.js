// dibawah ini adalah source code
alert('Selamat Datang!');
// Alert untuk menapilkan kolom window kecil dan hanya memberikan pesan sederhana ke user
// tanda ('' & "") adalah String untuk membungkus data, dan ( \') adalah escape character 
var lagi = true;
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
while( lagi === true ) {
// While adalah pengulangan yg dilakukan terus menerus selama kondisi(bernilai true)
	var nama = prompt('Masukkan nama:');
// Prompt untuk tampil kolom window kecil dan user bisa isi kolomnya
// Prompt disimpan ke variabel biar nilai yg di input oleh user bisa ditampung/ diakses
	alert('Halo ' + nama);
// Alert(nama); untuk menyatukan huruf yg user isi ke kolom alert
	lagi = confirm('Apakah anda ingin mencoba lagi?');
// Confirm itu kolom window kecil untuk meminta konfirmasi dari user, pilih oke atau cancel
}

alert('Terima kasih! :)');
// Alert untuk menghasilkan kolom window kecil dan hanya memberikan pesan sederhana ke user
// Pengulangan dan pengkondisian ini dapat mengatur alur dari program kita
// Pengulangan(Loop/ iteration) yaitu sebuah konsep untuk mengerjakan(mengeksekusi) sebuah statement(perintah bahasa pemograman) yg sama, lebih dr 1x atau berulang
// sintaks Pengulangan:  for, while, do while
// Pengkondisian(percabngan) yaitu sebuah keadaan dimana program kita bisa memilih untuk mengeksekusi(mengerjakan) statement(perintah bahasa pemograman) yg berbeda berdasarkan kondisi yg diberikan
// sintaks pengkondisian: if, else if, else if, else, switch
