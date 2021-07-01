// Dibawah ini adalah source code 
var tanya = true;
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
while ( tanya ) {
// While digunakan utk melakukan pengulangan suatu kelompok perintah berdasarkan kondisi tertentu, dgn pemeriksaan kondisi dilakukakn setelah pengulangan dilakukan satu kali 
	var p = prompt('Pilih: gajah, semut, orang');
// Prompt untuk tampil kolom window kecil dan user bisa isi kolomnya
// Prompt disimpan ke variabel biar nilai yg di input oleh user bisa ditampung/ diakses
    var comp = Math.random();
// tanda ('' & "") adalah String untuk membungkus data, dan ( \') adalah escape character 
// sintaks pengkondisian: if, else if, else if, else, switch
    if( comp < 0.34 ) {
   	    comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67 ) {
   	 comp = 'orang';
    } else {
   	comp = 'semut';
    }

    var hasi = '';
// fungsi var hasil ini untuk meletakkan alert di akhir nanti
    if( p == comp ) {
    // if p(player) sama dengan yang dipilih oleh comp
    	hasil = 'SERI!';
    } else if( p == 'gajah') {
    	// if( comp == 'orang') {
    	// 	hasil = 'MENANG!!'
    	// } else {
    	// 	hasil = 'KALAH!';
    	// }
    	hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    } else if( p == 'orang') {
    	hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    } else if( p == 'semut') {
    	hasil = ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
    } else {
    	hasil = 'Anda memasukkan pilihan yang salah!';
    }

    alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMAka hasilinya : Kamu ' + hasil);
// alert menampilkan pop up kecil dan memberikan pesan sederhana kepada user
    tanya = confirm('Lagi?');
// confirm menampilkan pop up kecil dan memberikan konfirmasi kepada user(cancel/ok)
}

alert('Terimakasih sudah bermain! :)');