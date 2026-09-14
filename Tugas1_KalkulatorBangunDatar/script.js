var jenisBangunDatar = document.getElementById('jenisBangunDatar');
var inputAngka = document.getElementById('inputAngka');
var btnHitung = document.getElementById('btnHitung');
var btnReset = document.getElementById('btnReset');

var jawaban = document.getElementById('jawaban');
var namaBangunDatar = document.getElementById('namaBangunDatar');
var outputLuas = document.getElementById('outputLuas');
var outputKeliling = document.getElementById('outputKeliling');
var outputRumusLuas = document.getElementById('outputRumusLuas');
var outputRumusKeliling = document.getElementById('outputRumusKeliling');
var gambarBangun = document.getElementById('gambarBangun');

var daftarBangun = {
    persegi: {
        nama: 'Persegi/Bujur Sangkar',
        gambar: 'https://cdn0-production-images-kly.akamaized.net/jF2EgeMGHuU5myQpSw7c56ifwQg=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3409130/original/098589600_1616496130-persegi.jpg',
        inputs: [{id: 'sisi', label: 'Panjang Sisi (s)'}],
        hitung: function(val) {
            var s = val.sisi;
            return {
                luas: s*s,
                keliling: 4*s,
                stepL: s + 'x' + s,
                stepK: '4 x ' + s
            };
        }
    },

    persegiPanjang: {
        nama: 'Persegi Panjang',
        gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqtK-Lbv_vIw6eyFRu49Ri2qBzZUUHlfGK3YEOgd31ZFUTn_6kMMflyM&s=10',
        inputs: [
            {id: 'panjang', label: 'Panjang (p)'},
            {id: 'lebar', label: 'Lebar (l)'}
        ],
        hitung: function(val) {
            var p = val.panjang;
            var l = val.lebar;
            return {
                luas: p*l,
                keliling: 2*(p+l),
                stepL: p + 'x' + l,
                stepK: '2 x ('+ p +' + ' + l +')'
            };
        }
    },

    jajaranGenjang: {
        nama: 'Jajaran Genjang',
        gambar: 'https://cnc-magazine.oramiland.com/parenting/images/rumus_luas_jajar_genjang-x.width-800.format-webp.webp',
        inputs: [
            {id: 'alas', label: 'Alas (a)'},
            {id: 'miring', label: 'Sisi Miring (b)'},
            {id: 'tinggi', label: 'Tinggi (t)'}
        ],
        hitung: function(val) {
            return {
                luas: val.alas*val.tinggi,
                keliling: 2*(val.alas+val.miring),
                stepL: val.alas + 'x' + val.tinggi,
                stepK: '2 x ('+ val.alas + '+' + val.miring +')'
            };
        }
    },

    segitigaSiku: {
        nama: 'Segitiga Siku-Siku',
        gambar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstnnubZU-pGT5FlhbNXmXL4LOJAoky-bn6WLoWABAgqCehUP1TUBcT7QB&s=10',
        inputs: [
            {id: 'alas', label: 'Alas (a)'},
            {id: 'tinggi', label: 'Tinggi (t)'}
        ],
        hitung: function(val) {
            var a = val.alas;
            var t = val.tinggi;
            var c = Math.sqrt((a*a) + (t*t));
            return {
                luas: 0.5*a*t,
                keliling: a + t + c,
                stepL:'1/2 x ' + a + ' x ' + t,
                stepK: a + ' + ' + t + ' + ' + c.toFixed(2) + ' (sisi miring c)'
            };
        }
    },

    segitigaSamaKaki: {
        nama: 'Segitiga Sama Kaki',
        gambar: 'https://image.popmama.com/post/20230825/segitiga-sama-kakipng-32712ca0109fc8b3e5bd9c2af05fd38d.png',
        inputs: [
            {id: 'alas', label: 'Alas (a)'},
            {id: 'kaki', label: 'Sisi Kaki (b)'}
        ],
        hitung: function(val) {
            var a = val.alas;
            var b = val.kaki;
            if(b <= a/2) {
                alert('Panjang kaki harus lebih besar dari setengah alasnya (b > a/2)!');
                return null;
            }
            var t = Math.sqrt((b*b) - Math.pow(a/2, 2));
            return {
                luas: 0.5*a*t,
                keliling: a + (2*b),
                stepL: '1/2 x ' + a + ' x ' + t.toFixed(2) + ' (tinggi t)',
                stepK: a + ' + (2 x '+ b + ')'
            };
        }
    },
    segitigaSamaSisi: {
        nama: 'Segitiga Sama Sisi',
        gambar: 'https://uptdsmpn3bangkalan.sch.id/wp-content/uploads/2024/01/segitiga-bangun-datar.png',
        inputs: [{ id: 'sisi', label: 'Panjang Sisi (s)' }],
        hitung: function(val) {
            var s = val.sisi;
            return {
                luas: (Math.sqrt(3) / 4) * Math.pow(s, 2),
                keliling: 3 * s,
                stepL: '(√3 / 4) x ' + s + '²',
                stepK: '3 x ' + s
            };
        }
    },
    belahKetupat: {
        nama: 'Belah Ketupat',
        gambar: 'https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-rhombus-shape-icon-vector-illustrationflat-design-symbol-play-illustration-vector-png-image_41365036.jpg',
        inputs: [
            { id: 'd1', label: 'Diagonal 1 (d1)' },
            { id: 'd2', label: 'Diagonal 2 (d2)' }
        ],
        hitung: function(val) {
            var d1 = val.d1;
            var d2 = val.d2;
            var s = Math.sqrt(Math.pow(d1 / 2, 2) + Math.pow(d2 / 2, 2));
            return {
                luas: 0.5 * d1 * d2,
                keliling: 4 * s,
                stepL: '1/2 x ' + d1 + ' x ' + d2,
                stepK: '4 x ' + s.toFixed(2) + ' (sisi s)'
            };
        }
    },
    trapesium: {
        nama: 'Trapesium Sama Kaki',
        gambar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Isosceles_trapezoid.jpg/250px-Isosceles_trapezoid.jpg?utm_source=id.wikibooks.org&utm_campaign=parser&utm_content=thumbnail',
        inputs: [
            { id: 'a', label: 'Sisi Atas (a)' },
            { id: 'b', label: 'Sisi Bawah (b)' },
            { id: 'tinggi', label: 'Tinggi (t)' }
        ],
        hitung: function(val) {
            var a = val.a;
            var b = val.b;
            var t = val.tinggi;
            var delta = Math.abs(b - a) / 2;
            var kaki = Math.sqrt((delta * delta) + (t * t));
            return {
                luas: 0.5 * (a + b) * t,
                keliling: a + b + (2 * kaki),
                stepL: '1/2 x (' + a + ' + ' + b + ') x ' + t,
                stepK: a + ' + ' + b + ' + 2 x ' + kaki.toFixed(2) + ' (kaki miring)'
            };
        }
    },
    lingkaran: {
        nama: 'Lingkaran',
        gambar: 'https://i.pinimg.com/736x/cd/f6/c3/cdf6c30af44ef4d7cf3e1f15952f2990.jpg',
        inputs: [{ id: 'r', label: 'Jari-Jari (r)' }],
        hitung: function(val) {
            var r = val.r;
            return {
                luas: Math.PI * r * r,
                keliling: 2 * Math.PI * r,
                stepL: 'π x ' + r + '²',
                stepK: '2 x π x ' + r
            };
        }
    },
    layangLayang: {
        nama: 'Layang-Layang',
        gambar: 'https://assets.kejarcita.id/MbNKnFpouRGW1irDFSB1t1XP',
        inputs: [
            { id: 'd1', label: 'Diagonal 1 (d1)' },
            { id: 'd2', label: 'Diagonal 2 (d2)' },
            { id: 's1', label: 'Sisi Pendek (a)' },
            { id: 's2', label: 'Sisi Panjang (b)' }
        ],
        hitung: function(val) {
            return {
                luas: 0.5 * val.d1 * val.d2,
                keliling: 2 * (val.s1 + val.s2),
                stepL: '1/2 x ' + val.d1 + ' x ' + val.d2,
                stepK: '2 x (' + val.s1 + ' + ' + val.s2 + ')'
            };
        }
    }
};

// Ini fungsi buat minimal 0, tidak minus
function formKalku() {
    inputAngka.innerHTML = '';
    jawaban.style.display = 'none';

    var key = jenisBangunDatar.value;
    var data = daftarBangun[key];
    var teksHtml = '';

    if (data.gambar) {
        gambarBangun.src = data.gambar;
        gambarBangun.style.display = 'block';
    } else {
        gambarBangun.removeAttribute('src');
        gambarBangun.style.display = 'none';
    }

    for (var i = 0; i < data.inputs.length; i++) {
        var item = data.inputs[i];
        teksHtml += '<p>';
        teksHtml += '<label for="' + item.id + '">' + item.label + ' (cm):</label><br />';
        teksHtml += '<input type="number" id="' + item.id + '" step="any" min="0" placeholder="Masukkan Angka">';
        teksHtml += '</p>';
    }

    inputAngka.innerHTML = teksHtml;
}

jenisBangunDatar.addEventListener('change', formKalku);

// tombol reset
btnReset.addEventListener('click', function() {
    jawaban.style.display = 'none';
    formKalku();
});

// tombol hitung
btnHitung.addEventListener('click', function() {
    var key = jenisBangunDatar.value;
    var data = daftarBangun[key];
    var nilaiInput = {};

    for (var i = 0; i < data.inputs.length; i++) {
        var id = data.inputs[i].id;
        var el = document.getElementById(id);
        var val = parseFloat(el.value);

        // tidak boleh kosong, minus, 0
        if (isNaN(val) || val <= 0) {
            alert('Nilai untuk ' + data.inputs[i].label + ' tidak boleh minus atau 0!');
            return;
        }
        nilaiInput[id] = val;
    }

    var hasil = data.hitung(nilaiInput);
    if (!hasil) return;

    // Menampilkan hasil
    namaBangunDatar.innerHTML = data.nama;
    outputLuas.innerHTML = hasil.luas.toFixed(2);
    outputKeliling.innerHTML = hasil.keliling.toFixed(2);
    outputRumusLuas.innerHTML = hasil.stepL;
    outputRumusKeliling.innerHTML = hasil.stepK;

    jawaban.style.display = 'block';
});

// Inisialisasi awal
formKalku();