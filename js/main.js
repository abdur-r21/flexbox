// Toggle class active 

const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// Klik diluar sidebar untuk menutup sidebar 

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})



// FORM

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara langsung

    // Menghapus pesan error sebelumnya
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    // Mengambil nilai-nilai input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validasi input kosong
    if (!name) {
        document.getElementById('name-error').textContent = 'Nama harus diisi';
    }

    if (!email) {
        document.getElementById('email-error').textContent = 'Email harus diisi';
    }

    if (!message) {
        document.getElementById('message-error').textContent = 'Pesan harus diisi';
    }

    // Kirim pesan jika tidak ada error
    if (name && email && message) {
        // Kirim pesan ke alamat email tujuan

        // Reset formulir
        document.getElementById('contact-form').reset();
    }
});