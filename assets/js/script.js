function showMessage() {
  const name = document.getElementById("name").value;
  const tujuan = document.getElementById("tujuan").value;
  const tanggal = document.getElementById("tanggal").value;
  const info = document.getElementById("info").value;

  const output = `
    <strong>Data Terkirim:</strong><br>
    Nama: ${name}<br>
    Tujuan: ${tujuan}<br>
    Tanggal: ${tanggal}<br>
    Informasi Tambahan: ${info}
  `;

  document.getElementById("output").innerHTML = output;

  return false; // Supaya tidak reload halaman
}
