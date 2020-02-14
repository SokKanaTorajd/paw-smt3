// file: hikmah.js
// kumpulan hikmah & motivasi

var hikmah = new Array();
hikmah[0] = "Apa yang sedikit mencukupi lebih baik daripada yang banyak tetapi melalaikan.";
hikmah[1] = "Semua anak Adam adalah pembuat kesalahan dan sebaik-baik pembuat kesalahan adalah mereka yang bertaubat.";
hikmah[2] = "Kebajikan itu adalah akhlak yang baik, dan dosa itu adalah sesuatu yang merisaukan hatimu, dan kamu tidak senang bila diketahui orang lain.";
hikmah[3] = "Ilmu seorang munafik terletak pada lidahnya, sedangkan ilmu seorang mukmin terletak pada amalannya. (Pepatah)";
hikmah[4] = "Awal mula menuntut ilmu adalah diam, yang kedua mendengarkan dengan tekun, yang ketiga paham dan hafal, dan yang keempat mengamalkannya. (Pepatah)";
hikmah[5] = "Ilmu pengetahuan modern membuka mata generasi muda dan mengajari mereka hakikat dan pengetahuan, tetapi tidak mengajari mereka khusyu' dan menangis.";
hikmah[6] = "Dan janganlah kamu mengikuti apa yang kamu tidak mempunyai pengetahuan tentangnya. Sesungguhnya pendengaran, penglihatan, dan hati semua itu akan dimintai pertanggungjawabannya.";
hikmah[7] = "Jangan pernah berputus asa jika menghadapi kesulitan, karena setiap tetes air hujan yang jernih berasal dari awan yang gelap.";
hikmah[8] = "Tegas akan diri sendiri, buang pikiran negatif, dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.";
hikmah[9] = "Ikhlas bukan berarti kita pasrah menerima, tapi ikhlas adalah kekuatan besar kita untuk terus berusaha agar mendapatkan yang lebih baik.";

function tulisHikmah() {
    var nomor = Math.round(Math.random()* 9) ; // mengambil nilai acak
    var tampil = hikmah[nomor];
    document.getElementById("hikmah").innerHTML = tampil;
}
tulisHikmah();

