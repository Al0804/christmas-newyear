function createFirework() {
  const firework = document.createElement("div");
  firework.className = "firework";

  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight;

  firework.style.left = startX + "px";
  firework.style.bottom = "0";

  const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  firework.style.backgroundColor = color;
  firework.style.boxShadow = "";

  firework.style.boxShadow = `0 0 10px 2px ${color}`;

  document.body.appendChild(firework);

  const angle = ((Math.random() - 0.5) * Math.PI) / 2;
  const velocity = 15 + Math.random() * 5;
  const gravity = 0.15;

  let velocityX = velocity * Math.sin(angle);
  let velocityY = velocity * Math.cos(angle);
  let positionX = 0;
  let positionY = 0;

  function animate() {
    velocityY -= gravity;
    positionX += velocityX;
    positionY += velocityY;

    firework.style.left = startX + positionX + "px";
    firework.style.bottom = positionY + "px";

    if (positionY < 0) {
      firework.remove();
    } else {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

// Membuat kembang api setiap 500ms
setInterval(createFirework, 500);

// Membuat beberapa kembang api secara bertahap
for (let i = 0; i < 5; i++) {
  setTimeout(createFirework, i * 200);
}


    // Mendapatkan elemen audio dan tombol
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');

    // Fungsi untuk memulai audio
    function playAudio() {
        audio.play().then(() => {
            playButton.style.display = 'none'; // Sembunyikan tombol setelah audio diputar
        }).catch(function(error) {
            console.log("Audio tidak dapat diputar: ", error);
        });
    }

    // Menambahkan event listener untuk tombol play
    playButton.addEventListener('click', playAudio);

    // Memutar audio saat halaman dimuat (coba, tetapi mungkin tidak berhasil di semua browser)
    window.addEventListener('load', function() {
        playAudio();
    });
