// Dibawah ini adalah source code

// var angka = prompt('Masukkan Angka:');

// switch( angka ) {
// 	case '1' :
// 	    alert('Anda memasukkan angka 1');
// 	    break;
// 	case '2' :
// 	    alert('Anda memasukkan angka 2');
// 	    break;
// 	case '3' :
// 	    alert('Anda memasukkan angka 3');
// 	default :
// 	    alert('Anda memasukkan angka yang salah');
// 	    break;
// }
// string(karakter kutip '' dan " " dan \')

var item = prompt('Masukkan nama makanan / minuman: \n (cnth: nasi, daging, susu, hamburger, softdrink)');
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
// Prompt untuk tampil kolom window kecil dan user bisa isi kolomnya
// Prompt disimpan ke variabel biar nilai yg di input oleh user bisa ditampung/ diakses
switch ( item ) {
// Switch sama seperti if, jd klo casenyo terpenuhi maka casenya di eksekusi(dijalankan)
	case 'nasi' :
	case 'daging' :
	case 'susu' :
	    alert('makanan SEHAT!');
// Alert untuk menghasilkan kolom window kecil dan hanya memberikan pesan sederhana ke user
	    break;
	   // Break untuk penutup
	case 'hamburger' :
	case 'softdrink' :
	    alert('makanan TIDAK SEHAT!');
	    break;
    default:
        break;
        alert('makanan TIDAK TERSEDIA!');
}

// var item = parseInt(prompt('Masukkan nama:'));
// parseInt yaitu apapun isi prompt yg diimput oleh user akan di proses, sehingga imputan user tadi akan berubah menjadi intejer lalu disimpan ke variabel angka