class Simpul {
  constructor(nim, nama, nilai) {
    this.nim = nim;
    this.nama = nama;
    this.nilai = nilai;
    this.berikutnya = null;
  }

  infoData() {
    console.log(`NIM: ${this.nim}`);
    console.log(`NAMA: ${this.nama}`);
    console.log(`NILAI: ${this.nilai}`);
    console.log(`Pointer Next: ${this.berikutnya}`);
    console.log("---------------------------------");
  }
}

// Create and test instances of the Simpul class
const data1 = new Simpul("20220040008", "Haikal", 90);
data1.infoData();

const data2 = new Simpul("20220040007", "Tanasha", 85);
data2.infoData();
