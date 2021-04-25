const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    // Mengecek apakah yang di klik adalah thumb
    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        // Set waktu untuk menjalankan selama 0.5 detik
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        // Melakukan perulangan forEach pada semua thumbnail
        thumbs.forEach(function(thumb) {
            // if(thumbs.classList.contains('active')) {
            //     thumbs.classList.remove('active');
            // }

            // Apapun class nya akan berubah menjadi thumb
            thumb.className = 'thumb';
        });

        // Pada saat thumbnail di klik maka akan aktif selamanya
        e.target.classList.add('active');
    }
});