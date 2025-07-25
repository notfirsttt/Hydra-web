// Menampilkan loader saat halaman dimuat
window.addEventListener("load", () => {
  // Sembunyikan loader dan tampilkan konten setelah 2 detik
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Menunggu 2 detik sebelum menghilangkan loader dan menampilkan konten
  setTimeout(() => {
    // Tambahkan kelas loader-hidden untuk efek fade-out pada loader
    loader.classList.add("loader-hidden");
    // Menambahkan kelas hidden untuk benar-benar menyembunyikan loader
    loader.classList.add("hidden");
    content.classList.remove("hidden");
  }, 100); // Waktu delay 2 detik
});
