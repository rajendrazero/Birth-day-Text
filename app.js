// Pesan yang akan ditampilkan dengan efek ketik
const text = `Gak terasa udah dua tahun sejak tamat dari MTS, ya? Sekarang masing-masing dari kita udah resmi masuk tahap awal dewasa. Padahal rasanya baru kemarin sore main-main ke perpustakaan.

Selamat ulang tahun! Gak banyak yang bisa aku kasih, tapi aku doain yang terbaik buat masa kini dan masa depan nanti. Semoga semua yang kamu inginkan di tahun ini terkabul, ya. Jangan lupa jaga kesehatan, apalagi soal makan. Memang kalau sakit bisa diobatin sih, tapi mencegah itu lebih baik daripada mengobati. Mungkin sekarang badanmu masih kuat, tapi kalau sering-sering capek juga pasti kerasa nantinya.

Oh iya, jangan terlalu sering galau, ya! Kadang kita memang butuh waktu buat mikir, tapi jangan sampai kebanyakan mikir malah bikin stres. Kalau sering nangis juga, nanti matamu bengkak, lho! Hahaha. Jangan sampai jadi mata panda, ntar malah mirip vampir, bukan panda lagi!

Semoga di tahun ini semua urusanmu dimudahkan dan dijauhkan dari banyak masalah. Semoga kamu bisa jadi orang yang lebih dewasa dan bahagia lagi. Aku juga berharap kamu bisa masuk kampus impian dan keterima kerja di tempat terbaik yang kamu inginkan. Jangan malas-malas belajar, karena belajar itu gak ada habisnya. Capek sih, tapi nanti pasti bisa memudahkan banyak hal.

Pokoknya, semoga yang terbaik buat kamu. Terus semangat, jangan pernah nyerah! Semua pasti bisa jadi lebih baik lagi.

Hmm... Kalau misalnya aku gak datang, mohon maaf ya. Bukan karena gak mau atau gak niat, malah aku udah niat banget. Tapi aku juga gak enakan kalau datang sendirian, dan lokasinya agak jauh. Aku juga gak dikasih bawa kereta sendiri malam-malam. Maaf ya!`;

// Menambahkan <br> di setiap baris baru
const formattedText = text.split('\n'); // Memecah teks per baris

let index = 0;
let lineIndex = 0;
const speed = 50; // Kecepatan ketik (ms)
const typingText = document.querySelector(".typing-text");

function typeText() {
    // Jika kita masih ada teks untuk diketik
    if (lineIndex < formattedText.length) {
        const currentLine = formattedText[lineIndex];

        if (index < currentLine.length) {
            typingText.innerHTML += currentLine.charAt(index);
            index++;
            setTimeout(typeText, speed);
        } else {
            // Menambahkan <br> setelah satu baris selesai diketik
            typingText.innerHTML += "<br>";
            lineIndex++;
            index = 0;
            setTimeout(typeText, speed);
        }
    }
}

window.onload = typeText;
