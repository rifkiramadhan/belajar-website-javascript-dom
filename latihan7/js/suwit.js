var tanya = true;
while( tanya ) {
    // Menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');

    // Menangkap pilihan computer
    // Membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // Menentukan rules
    var hasil = '';
    if( p == comp ) {
        hasil = 'SERI!';
    } else if( p == 'gajah' ) {
        hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    } else if( p == 'orang' ) {
        hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    } else if( p == 'semut' ) {
        hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
    } else {
        hasil = 'memasukkan pilihan yang salah!';
    }

    // Tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('lagi?');
}

alert('terimakasih sudah bermain.');
