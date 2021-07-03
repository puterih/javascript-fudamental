// Object adalah kumpulan nilai yg memiliki nama 
// membuat object
// var mhs = {
// 	nama : "Puteri Husnul",
// 	umur : 16,
// 	ipa : [3.00, 2.50, 3.20],
// 	alamat : {
// 		jalan : "jl. abc No 123",
// 		kota : "Palembang",
// 		provinsi : "Sumatra Selatan"
// 	}
// };


// Object literal
var mhs1 = {
	nama : 'Puteri Husnul',
	ttl : '220305',
	email : 'Husnulputeri@gmail.com',
	Jurursan : 'Teknik Informatika'
}

var mhs2 = {
	nama : 'hana',
	ttl : '140604',
	email : 'Hana@gmail.com',
	Jurursan : 'Teknik Industri'
}

// Function Declaration
function buatObjectMahasiswa(nama, ttl, email, Jurursan) {
// dibuat sebagai object
	var mhs = {};
// property
	mhs.nama = nama;
	mhs.ttl = ttl;
	mhs.email = email;
	mhs.Jurursan = Jurursan;
	return mhs;
// Perbedaan Constructor & Function Dec. adalah functionnya kita buat sendiri var & return, sedangkan Constructor dibuat secara otomatis 
}
// Function memanggilnya dgn nama function-nya, berbeda dgn Constructor
var mhs3 = buatObjectMahasiswa('erza', '230704', 'erza@gmail.com', 'Teknik Pangan') 


// Constructor adalah function yg khusus untuk membuat object
function Mahasiswa(nama, ttl, email, Jurursan) {
	// var this = {};
	this.nama = nama;
	this.ttl = ttl;
	this.email = email;
	this.Jurursan = Jurursan;
	// return this;
// Perbedaan Constructor & Function Dec. adalah functionnya kita buat sendiri var & return, sedangkan Constructor dibuat secara otomatis 
}
// Constructor function(keyword new) memanggilnya WAJIB menggunakan new, berbeda dgn Function Declaration
var mhs4 = new Mahasiswa('lalak', '110204', 'lalak@gmail.com', 'Teknik Mesin');
// jika tidak menggunakan new, maka js berasumsi bahwa memanggil objectnya menggunakan Function Dec yg harus membuat var & return


































