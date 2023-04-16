'use strict';

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter(el), 8000);
}

typeWriter(elementEl);

document.getElementById('moon').onclick = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
};

function showtime() {
    var date = new Date();
    var jam = date.getHours();
    var menit = date.getMinutes();
    var detik = date.getSeconds();
    var meridiem = "AM";
    
    
    
     if (jam > 12) {
        jam = jam -12;
        meridiem = "PM";
    }
    if (jam == 0) {
        jam = 12;
    }
    if (menit < 10) {
        menit = "0" + menit;
    }
    if (detik < 10) {
        detik = "10" + detik;
        
    }
  var  time = jam + ":" + menit + ":" + detik;
    document.getElementById('data').textContent = time;
}
setInterval(showtime, 1000);


//ganti bahasa
var dt = document.getElementById('in');
dt.onclick = () => {
   let tentang = document.getElementById('aubott')
    let description = document.getElementById("bahasa");
    description.innerHTML = "halo nama saya dimas, umur saya 17 tahun, saya masih duduk di bangku sekolah menengah atas, ini adalah website buatan pertama saya menggunakan html css javascript.maaf jika kurang responsif saya membuat ini menggunakan handphone"
    tentang.innerHTML = "Tentang saya"
    
  }
//pindah halaman website
function save() {
    window.location = "/from/index.html";
}