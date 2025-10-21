function kirim(){
    let namaDepan = document.getElementById("namaDepan").value
    let namaBelakang = document.getElementById("namaBelakang").value
    console.log("Nama Lengkap: " + namaDepan + " " + namaBelakang)

    let nilaiAngka = parseInt(document.getElementById("nilaiAngka").value)
    var nilaiHuruf = ""

    switch (true) {
        case (nilaiAngka >= 85):
            nilaiHuruf = "A"
            break
        case (nilaiAngka >= 80):
            nilaiHuruf = "A-"
            break
        case (nilaiAngka >= 75):
            nilaiHuruf = "B+"
            break
        case (nilaiAngka >= 70):
            nilaiHuruf = "B"
            break
        case (nilaiAngka >= 65):
            nilaiHuruf = "B-"
            break
        case (nilaiAngka >= 60):
            nilaiHuruf = "C+"
            break
        case (nilaiAngka >= 55):
            nilaiHuruf = "C"
            break
        case (nilaiAngka >= 40):
            nilaiHuruf = "D"
            break
        default:
            nilaiHuruf = "E"
    }
    console.log("Nilai Angka: " + nilaiAngka)
    console.log("Nilai Huruf: " + nilaiHuruf)
}