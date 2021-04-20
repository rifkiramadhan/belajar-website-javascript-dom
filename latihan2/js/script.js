// DOM Selection

// 1. document.getElementById() -> element
// Meminta javascript untuk mencarikan element id yang bernama judul
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Rifki Ramadhan';


// 2. document.getElementsTagName() - HTMLCollection
// Meminta javascript untuk mencarikan elemen tag yang bernama p
// const p = document.getElementsByTagName('p');
// Selama nilai i sama dengan nol, dan nol lebih kecil dari nilai panjang array p dan setiap nilai akan ditambah satu
// for(let i = 0; i < p.length; i++) {
    // Maka cetak warna backround p dari i (nol) menjadi berwarna lightblue
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// p adalah array
// p[0].style.backgroundColor = 'lightblue';


// 3. document.getElementsByClassName()
// -> HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah dari javascript';


// 4. document.querySelector() -> element
// Meminta javascript untuk mencarikan sebuah selector dari id #b dan selectornya p atau paragraf ke 4
// const p4 = document.querySelector('#b p');
// Mencetak warna pada paragraf ke 4
// p4.style.color = 'green';
// Mencetak ukuran font pada paragraf ke 4
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah melalui javascript';


// 5. document.querySelectorAll()
// Meminta javascript untuk mencarikan selector query tertentu yang selectornya bernama p
// const p = document.querySelectorAll('p');

// Selama i sama dengan nol, dan i lebih kecil dari panjang nilai p kemudian ditambah satu
// for(let i = 0; i < p.length; i++) {
       // Maka cetak warna background lightblue dari index ke nol yang terdapat pada tag p    
//     p[i].style.backgroundColor = 'lightblue';
// }


// const p4 = document.getElementsByTagName('p')[3];
// p4.style.backgroundColor = 'lightblue';

// const p4 = document.querySelectorAll('p')[3];
// p4.style.backgroundColor = 'lightblue';

// Dengan cara mempersemepit penggunaan DOM Collection
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// Dengan cara mempersemepit penggunaan DOM Collection tetapi dibalik dan menjadikan p4 sebagai array
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';