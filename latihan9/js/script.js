// 1. Dom Selection
// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// 2. Dom Traversal
const close = document.querySelectorAll('.close');

// Menggunakan perulangan for
// for(let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

// Menggunakan forEach
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        
        // Cegah aksi defaultnya
        e.preventDefault();
    });
});

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);