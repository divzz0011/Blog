// === Play / Pause Audio ===
const playBtn = document.getElementById('playBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    playBtn.textContent = "🎵 Putar Musik";
  } else {
    bgMusic.play();
    playBtn.textContent = "⏸️ Jeda Musik";
  }
  isPlaying = !isPlaying;
});

// Saat musik selesai, reset tombol
bgMusic.addEventListener("ended", () => {
  isPlaying = false;
  playBtn.textContent = "🎵 Putar Musik";
});

// === Efek Ketikan ===
const typingText = document.getElementById("typing-text");
const sentence = "Bangkit, Tersenyum, Dan Jadi Kuat Untuk Hidup Yang Lebih Bermakna.";
let idx = 0;

function typeWriter() {
  if (idx < sentence.length) {
    typingText.textContent += sentence.charAt(idx);
    idx++;
    setTimeout(typeWriter, 70);
  }
}
typeWriter();

// === Animasi Scroll ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".animate").forEach((el) => observer.observe(el));
