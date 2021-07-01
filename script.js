// Array adalah sebuah variabel yg bisa menampung banyak nilai/ kumpulan nilai yg memiliki index yg dimulai dr nol
// 
// Object secara umum yaitu kumpulan nilai yg memiliki nama
// Object adalah array, yg leih sakti
// Membuat object 
// var mhs = {
// 	nama : 'Puteri husnul',
// 	umur : 16,
// 	ips : [3.00, 2.50, 3.20] ,
// 	alamat : {
// 		jalan : 'Jl.sukabangun 2',
// 		kota : 'Palembang',
// 		provinsi : 'sumatra selatan'
// 	}
// };

// Object literal

var mhs1 = {
	nama : 'Puteri husnul',
	ttl : '220305',
	email : 'husnulputeri@gmail.com',
	jurusan : 'Teknik Informatika'
}

var mhs2 = {
	nama : 'hana',
	ttl : '230404',
	email : 'hana@gmail.com',
	jurusan : 'geografi'
}

// Menggunakan function declaration
function buatObjectMahasiswa(nama, ttl, email, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.ttl = ttl;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa('lala', '140504', 'lala@gmail.com', 'Teknik pangan');



// Constructor adalah function yg khusus untuk membuat object
function Mahasiswa(nama, ttl, email, jurusan) {
	// var this = {};
	this.nama = nama;
	this.ttl = ttl;
	this.email = email;
	this.jurusan = jurusan;
	// return this;
// kalau constructor, var dan return sudah dibuat otomatis, berbeda dgn function declaration
// constructor ini tanpa menggunakan var dan return
}

var mhs4 = new Mahasiswa('hc', '160304', 'hc@gmail.com', 'Teknik Mesin');
// kalau Constructor harus ada new, berbeda dgn function declaration
