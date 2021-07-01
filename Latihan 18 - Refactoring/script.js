// Refactoring adalah sebuah proses mengubah kode agar menjadi lebih 'baik' tanpa megubah fungsionalitas dr program itu sendiri
// menggunakan refactoring karena DRY (do not Repeat Yourself) atau bisa membuat kode lebih singkat dan mudah dipahami oleh orang lain

// keyword function(fungsi) yaitu kode program yg dirancang untuk menyelesaikan sebuah tugas tertentu & merupakan bagian dari program utama.
// function adalah sub program/sub-routine yg dapat dipanggil di bagian lain pd program
// function/prosedur yaitu kumpulan statement untuk melakukan tugas/menghitung seuah nilai
// menggunakan function untuk mempersingkat coding kita dan dapat memanggilnya ber ulang / ber x x agar memudahkan menelusuri kesalahan dlm coding
// Built-in function yaitu fungsi yg sudah dibuat oleh js & tinggak memanggilnya. cnth: alert();
// return pd function adalah nilai kembaliannya, fungsinya untuk ngasih tau interpreter bhwa kita telah selesai mengerjakan sesuatu, dan inilah hasilnya dan untuk memberhentikan function

// Dibawah ini adalah source code 
// contoh kode menghitung sebuah 2 kubus s*s*s
function jumlahVolumeDuaKubus(a, b) {
	return a * a * a + b * b * b;
// return(Nilai Kembalian)
}

alert(jumlahVolumeDuaKubus(8, 3));
// Alert untuk menghasilkan kolom window/pop up kecil dan hanya memberikan pesan sederhana ke user

