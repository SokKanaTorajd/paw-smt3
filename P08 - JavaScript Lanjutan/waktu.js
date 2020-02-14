// file: waktu.js
// fungsi untuk menampilkan waktu setiap detik

window.setTimeout("tampiljam()",500)
function tampiljam() {
    var waktu = new Date();
    var jam = waktu.getHours();
    var mnt = waktu.getMinutes();
    var dtk = waktu.getSeconds();

    if (jam >= 24) jam = jam - 24;
    if (jam <= 9) jam = "0" + jam;
    if (mnt <= 9) mnt = "0" + mnt;
    if (dtk <= 9) dtk = "0" + dtk;


    tampil_digit = jam + ":" + mnt + ":" + dtk;
    tampil_antara = jam +"." + mnt + "." + dtk;
    if (tampil % 2 == 0) {
        document.getElementById("digit").innerHMTL = tampil_digit;
    } else {
        document.getElementById("digit").innerHMTL = tampil_antara;
    }
    tampil++;
    setTimeout("tampiljam()",500);
}
tampil = 1;
tampiljam();

