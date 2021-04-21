// Mengacak warna button dan kursor dengan javascript

// 1. Slider Warna
// Meminta javascript untuk mencari teks id t ubah warna
const tUbahWarna = document.getElementById('tUbahWarna');

// Membuat fungsi tombol untuk merubah warna
tUbahWarna.onclick = function() {
    // alert('Oke');
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');

    // Memberikan method tggle untuk mengubah-ubah warna ketika di klik
    document.body.classList.toggle('biru-muda');
}

// Meminta javascript untuk mencari button acak wara
const tAcakWarna = document.createElement('button');

// Meminta javascript untuk mencari teks button bernama acak wara
const teksTombol = document.createTextNode('Acak Warna');

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

// Membuat fungsi tombol untuk mengacak warna
tAcakWarna.addEventListener('click', function() {
    // console.log(r);

/*  Membuat private scope untuk mengecek warna random menggunakan Math 
    dari nol sampai satu dan satu sampai dua lima-lima */
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    // Membuat concat untuk memasukkan nilai warna background rgb satu per satu
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

// Membuat scope global untuk mendengarkan atau mengetahui event selector inputan warna
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// Membuat fungsi untuk merubah warna merah pada slider
sMerah.addEventListener('input', function() {
    // alert('Oke');
    // console.log(sMerah.value);

    // Membuat nilai yang ada di dalam elemen input
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    // Membuat concat untuk memasukkan nilai warna background rgb satu per satu
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

// Membuat fungsi untuk merubah warna hijau pada slider
sHijau.addEventListener('input', function() {

    // Membuat nilai yang ada di dalam elemen input
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    // Membuat concat untuk memasukkan nilai warna background rgb satu per satu
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

// Membuat fungsi untuk merubah warna biru pada slider
sBiru.addEventListener('input', function() {

    // Membuat nilai yang ada di dalam elemen input
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    // Membuat concat untuk memasukkan nilai warna background rgb satu per satu
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


// 2. Kursor Warna
// Membuat fungsi untuk merubah warna random pada kursor ketika di gerakkan
document.body.addEventListener('mousemove', function(event) {
    // Posii Mouse
    // console.log(event.clientX);

    // Ukuran Browser
    // console.log(event.innerWidth);

    // Meminta javascript untuk mengatur warna secara acak terhitung mulai dari window / background putih
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    // console.log(xPos);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    // Membuat concat untuk memasukkan nilai warna background rgb satu per satu
    document.body.style.backgroundColor = 'rgb('+ xPos+', '+ yPos +', 100)';
});