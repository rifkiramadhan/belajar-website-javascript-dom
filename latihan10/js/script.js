// 1. Dom Selection
// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// 2. Dom Traversal
// const close = document.querySelectorAll('.close');

// Menggunakan perulangan for
// for(let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

// Menggunakan forEach untuk tombol close di klik
// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
        
        // Cegah aksi defaultnya
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// Menggunakan forEach untuk tombol card di klik
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('Oke');
//     });
// });

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);

// Cara efektif dengan cara menempelkan sebuah event ke dalam container
const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        
        // Untuk menghilangkan link ketika span dirubah menjadi tag a
        e.preventDefault();
    }
});