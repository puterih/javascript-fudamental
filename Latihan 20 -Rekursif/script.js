// // Rekursif adalah sebuah fungsi yg memanggil dirinya sendiri
// function tampilAngka(n) {
// 	if( n === 0 ) return;
// 	// fungsi yang diatas adalah base case agar rekursif nya bisa berhenti
// 	console.log(n);
// 	return tampilAngka(n-1);
// // jika melakukan pemanggilan secara rekursif, harus ada kondisi berhenti yaitu 'Base case'
// // Base case yaitu kondisi akhir dari rekursif yg menghasilkan sebuah nilai
// }

// tampilAngka(10);


function faktorial(n) {
	if ( n === 0 ) return;
	return n * faktorial(n-1);
}

faktorial(5);
console.log(faktorial);

