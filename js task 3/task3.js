/*
//1. Array daxilində tək yerdə duran elementləri ekrana verin
function tek(arr) {
    var sayac = {};

    arr.forEach(function(element) {
        if (sayac[element] === undefined) {
            sayac[element] = 1;
        } else {
            sayac[element]++;
        }
    });

    var tek = [];
    for (var key in sayac) {
        if (sayac.hasOwnProperty(key) && sayac[key] === 1) {
            tek.push(parseInt(key));
        }
    }
    
    return tek;
}

var arr = [1, 2, 3, 2, 4, 5, 5, 6];
console.log(tek(arr));

//2. Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin
function tap(array) {
    let say = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            say++;
        }
    }
    return say;
}

const myArray = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const say = tap(myArray);
console.log(`Array-də ${say} ədəd 5-ə bölünür.`);
//3. Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.
const myArray = [10, 21, 35, 42, 49, 56, 63];
let son = null;

myArray.forEach((element) => {
    if (element % 7 === 0) {
        son = element;
    }
});

console.log("Sonuncu 7-ə bölünən ədəd:", son);

//4. Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini
//dəyişən proqram tərtib edin
function deyis(arr) {
    var boyuk = Math.max(...arr);
    var kicik = Math.min(...arr);

    
    var boyukindex = arr.indexOf(boyuk);
    var kicikindex = arr.indexOf(kicik);

    
    var temp = arr[boyukindex];
    arr[boyukindex] = arr[kicikindex];
    arr[kicikindex] = temp;

    return arr;
}

var arr = [3, 8, 2, 10, 5];

console.log("Yerleri değiştirilmiş massiv:", deyis(arr));
//5. Verilmiş array daxilində ixtiyari(random) ədədi ekrana çıxaran
//proqram tərtib edin
function random(arr) { 
    var uzunluq = arr.length;
    var random = Math.floor(Math.random() * uzunluq);  
    console.log("Random:", arr[random]);
}
var arr = [1, 5, 9, 12, 20, 30];
random(arr);

//6. 1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana
//verin
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}
//while
let i = 1;
while (i <= 100) {
    if (i % 2 === 1) {
        console.log(i);
    }
    i++;
}
//9. Daxil olunmuş mətndə saitləri silən proqram yaradın
function sil(metin) {
    return metin.replace(/[aeiouAEIOU]/g, "");
}

var metin = "saitləri sil.";
var netice = sil(metin);
console.log(netice);

//10. İstifadəçi daxil edən ədəd sayda ixtiyarı(random) simvoldan ibarət
//string ifadə yaradın (məsələn input:5 output: qeg8d)
function rastgeleStringUret(uzunluk) {
    var karakterler = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var rastgeleString = '';

    for (var i = 0; i < uzunluk; i++) {
        var rastgeleIndex = Math.floor(Math.random() * karakterler.length);
        rastgeleString += karakterler.charAt(rastgeleIndex);
    }

    return rastgeleString;
}


var uzunluk = parseInt(prompt("Dize uzunluğunu girin:"));

var rastgeleDize = rastgeleStringUret(uzunluk);


console.log("Oluşturulan rastgele dize:", rastgeleDize);

//11. Daxil olunmuş sözdə neçə sait və samit olduğunu tapın
// Səhifədəki bütün mətni seçirik
function tap(soz) {
    
    var sesliHarfler = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    var saitSayi = 0;
    var samitSayi = 0;

    
    for (var i = 0; i < soz.length; i++) {
        var harf = soz[i];
        if (sesliHarfler.indexOf(harf) !== -1) {
            saitSayi++;
        } else if (harf !== ' ') { 
            samitSayi++;
        }
    }

    return { saitler: saitSayi, samitler: samitSayi };
}

var soz = "saitsamit";

var netice = tap(soz);

console.log("Sait sayi:", netice.saitler);
console.log("Samit sayi:", netice.samitler);

//12.Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan
//metod yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün
//    tam bölənlərinin cəmi özünə bərabər olan ədədə deyilir - məs:
//    6=1+2+3; 28=1+2+4+7+14)
function mükemmel(eded) {
    var tam = 0;
 
    for (var i = 1; i <= eded / 2; i++) {
        if (eded % i === 0) {
            tam += i;
        }
    }
    
    if (tam === eded && tam !== 0) {
        return true;
    } else {
        return false;
    }
}

var eded = 28;

var netice = mükemmel(eded);

if (netice) {
    console.log(eded + " mükemmel eded.");
} else {
    console.log(eded + " mükemmel eded deyil.");
}
*/
