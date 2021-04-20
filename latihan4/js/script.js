// DOM Manipulation / Manipulasi Node

// 1. Membuat Elemen
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// Simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);
const ul = document.querySelector('section#b ul');
// Meminta javascript untuk mencari li dari ul bukan dari document
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// 2. Menghapus elemen
const link = document.getElementsByTagName('a')[0];
// Meminta javascript untuk menghapus link
sectionA.removeChild(link);

// 3. Mengganti elemen
const sectionB = document.getElementById('b');
// Meminta javascript untuk mencari tag p yang berada di dalam section b bukan di document
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
// Meminta javascript untuk menuliskan judul baru! didalam elemen h2 yang telah ditemukan
const teksH2Baru = document.createTextNode('Judul Baru!');
// Meminta javascript untuk menyimpan teks h2 yang baru
h2Baru.appendChild(teksH2Baru);
// Meminta javascript untuk mengganti teks h2 yang lama menjadi teks h2 yang baru
sectionB.replaceChild(h2Baru, p4);

// Menandakan item yang sudah dirubah
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';