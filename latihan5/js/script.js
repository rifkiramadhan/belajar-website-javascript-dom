// 1. Menggunakan EventHandler (Element Method)
/* Meminta javascript untuk mencarikan selector p2 pada paragraf ke dua, ketika ada
   event onclick maka rubahlah warna background paragraf kedua menjadi lightblue*/
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnap2;
// function ubahWarnap2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// 2. Menggunakan EventHandler (Inline HTML Attribute)
/* Meminta javascript untuk mencarikan selector p3 pada paragraf ketiga, ketika ada event 
   onclick pada tag paragraf ketiga maka rubahlah warna background paragraf ketiga menjadi lightblue*/
// const p3 = document.querySelector('.p3');
// function ubahWarnap3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// 3. Menggunakan addEventListener
// const p4 = document.querySelector('section#b p');
/* Meminta javascript untuk mencarikan paragraf 4 lalu ketika ada event click lakukan sesuatu 
   dengan menambahkan parameter kedua dengan nama function */
// p4.addEventListener('click', function() {
//     alert('Oke');

//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('Item Baru');

//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// })

// 4. Menggunakan EventHandler (Element Method)
/* Meminta javascript untuk mencarikan selector p3 pada paragraf ketiga, ketika ada event 
   onclick pada tag paragraf ketiga maka rubahlah warna background paragraf ketiga menjadi lightblue
   dan teks nya menjadi red*/
const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }

// 3. Menggunakan addEventListener
/* Meminta javascript untuk mencarikan paragraf 3 lalu ketika ada event click lakukan sesuatu 
   dengan menambahkan parameter kedua dengan function untuk merubah warna menjadi lightblue */
p3.addEventListener('click', function() {
    p3.style.backgroundColor = 'lightblue';
});
/* Meminta javascript untuk mencarikan paragraf 3 lalu ketika ada event click lakukan sesuatu 
   dengan menambahkan parameter kedua dengan function untuk merubah warna menjadi red */
p3.addEventListener('click', function() {
    p3.style.color = 'red';
});