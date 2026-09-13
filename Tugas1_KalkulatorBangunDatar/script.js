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

var daftarBangun = {
    persegi: {
        nama: 'Persegi/Bujur Sangkar',
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
};