// Fungsi scroll ke section tertentu
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Hitung Luas Segitiga
const formLuas = document.getElementById('form-luas');
formLuas.addEventListener('submit', function (e) {
  e.preventDefault();

  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const hasil = document.getElementById('hasil-luas');

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    hasil.innerHTML = '<p style="color: red;">Masukkan angka positif untuk alas dan tinggi.</p>';
    return;
  }

  const luas = 0.5 * alas * tinggi;
  hasil.innerHTML = `
    <p>L = 1/2 x a x t</p>
    <p>L = 1/2 x ${alas} x ${tinggi}</p>
    <p>L = ${luas}</p>
  `;
});

// Hitung Keliling Segitiga
const formKeliling = document.getElementById('form-keliling');
formKeliling.addEventListener('submit', function (e) {
  e.preventDefault();

  const s1 = parseFloat(document.getElementById('sisi1').value);
  const s2 = parseFloat(document.getElementById('sisi2').value);
  const s3 = parseFloat(document.getElementById('sisi3').value);
  const hasil = document.getElementById('hasil-keliling');

  if (isNaN(s1) || isNaN(s2) || isNaN(s3) || s1 <= 0 || s2 <= 0 || s3 <= 0) {
    hasil.innerHTML = '<p style="color: red;">Masukkan angka positif untuk ketiga sisi.</p>';
    return;
  }

  const keliling = s1 + s2 + s3;
  hasil.innerHTML = `
    <p>K = S1 + S2 + S3</p>
    <p>K = ${s1} + ${s2} + ${s3}</p>
    <p>K = ${keliling}</p>
  `;
});

// Reset Form dan Hasil
function resetForm(formId, hasilId) {
  document.getElementById(formId).reset();
  document.getElementById(hasilId).innerHTML = '';
}
