const rumah = document.querySelector('.rumah');
const gambar = document.querySelector('.gambar');

let ada = true;

function hilangkanGambar(rumah) {
  rumah.classList.add('hilang');
}

function munculkanGambar(rumah) {
  rumah.classList.remove('hilang');
}

function tekan(rumah) {
  if (ada) {
    hilangkanGambar(rumah);
  } else {
    munculkanGambar(rumah);
  }
}
