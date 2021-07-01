var penumpang = [];
// Variabel itu sebuah tempat/ wadah yg memiliki nama yg digunakan untuk menyimpan nilai
var tambahPenumpang = function(namaPenumpang, penumpang) {
	if( penumpang.length == 0 ) {
// penumpang.length adalah jumlah elemen pd array
		penumpang.push(namaPenumpang);
		return penumpang;
	} else {
		for( var i = 0; i < penumpang.length; i++ ) {
// For adalah sebuah keyword lain selain while yg dpt digunakan utk melakukan pengulangan
// nilaiawal++(artinya ditambah 1 tiap pengulangan) untuk menambah secara berurutan yg jumlahnya sudah ditentukan dan mencegah looping forev
			if( penumpang[i] == undefined ) {
				penumpang[i] = namaPenumpang;
				return penumpang;
			// return(kembalian nilai)
			}

			else if( penumpang[i] == namaPenumpang ) {
				console.log(namaPenumpang + ' sudah ada di dalam angkot');
// tanda ('' & "") adalah String untuk membungkus data, dan ( \') adalah escape character
// Console.log fungsinya untuk menampilkan teks Perintah ke Console Javascript/ WEB console
// console.log juga berfungsi untuk Memberi Tahu kita/ dapat Mengetahui kalau ada kesalahan(error) pada Program Kode Js kita
// Console.log jg bisa menuliskan perintah sintaks javascript langsung di dalam WEB console
// fungsi Console.log juga digunakan untuk Debugging pd program kita
				return penumpang;
			}

			else if( i == penumpang.length - 1 ) {
				penumpang.push(namaPenumpang);
				return penumpang;
			}
		}
	}
}



var hapusPenumpang = function(namaPenumpang, penumpang) {
	if(penumpang.length == 0 ) {
		console.log('angkot masih kosong.');
	} else {
		for( var i = 0; i < penumpang.length; i++ ) {
			if(penumpang[i] == namaPenumpang ) {
				penumpang[i] = undefined;
				return penumpang;
			} else if( i === penumpang.length - 1 ) {
// penumpang.length - 1 adalah tempat duduk isi terakhir
				console.log(namaPenumpang + ' tidak ada di dalam angkot.');
				return penumpang;
			}
		}
	}
}