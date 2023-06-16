 /*const marks = [80, 80, 50];
Average = 70
1-59:    F
60-69:   D
70-79:   C
80-89:   B
90-100:  A

console.log(calculateGrade(marks));
function calculateGrade(marks) {
   ...
}
👆 ushbu taskda baholar array ichida berilgan va shu baholarning o'rtacha arifmetik hisoblanib, o'rta bahosi chiqariladi va shu o'rta bahosi qaysinga to'g'ri kelsa shu harfni qaytaradi! */



function calculateGrade(marks) {
    const average = calculateAverage(marks);
    
    if (average >= 90 && average <= 100) {
      return 'A';
    } else if (average >= 80 && average < 90) {
      return 'B';
    } else if (average >= 70 && average < 80) {
      return 'C';
    } else if (average >= 60 && average < 70) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  function calculateAverage(marks) {
    const sum = marks.reduce((total, mark) => total + mark, 0);
    return sum / marks.length;
  }
  
  const marks = [80, 80, 50];
  console.log(calculateGrade(marks));


/*Quyidagi kitoblarning o'qish holatini (ya'ni kitob nomini, muallifning ismini va o'qish holatini ko'rsatish) ko'rsatish uchun JavaScript dasturini yozing.

let library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }]; */

  let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
 ];
 
 for (let i = 0; i < library.length; i++) {
    let book = library[i];
    let bookInfo = `${book.title} && ${book.author}`;
 
    if (book.readingStatus) {
        console.log(`${bookInfo} - Siz bu kitobni o'qigansiz.`);
    } else {
        console.log(`${bookInfo} - siz bu kitobni hali o'qimagansiz`);
    }
 }

/* 1: - firstLast6

Raqamlardan tashkil topgan array berilgan. Agar oxiri yoki boshi 6 bo'lsa, true qaytarsin, unda false.

Masalan funksiya chaqirilsa:
firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
 */

 function firstLast6(nums) {
    return nums[0] === 6 || nums[nums.length - 1] === 6;
 }
 
 console.log(firstLast6([1, 2, 6])); // true

/* includes array ichida bor yoki yo'qligini tekshiradi. Tasavvur qiling, includes metodi o'chib ketdi, include metodisiz, xuddi shu narsani qaytaruvchi funksiya tuzing!

Masalan:
function includes(array, searchElement) {
  ...
}*/

 function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
       if (array[i] === searchElement) {
          return true;
       }
    }
    return false;
 }
 
 console.log(includes(['apple', 'banana', 'orange'], 'grape')); // false
 

/* selsiy va frangeyt dasturi*/
 
 function selsiyFrangeyt(celsius) {
   let fahrenheit = (celsius * 9/5) + 32;
   return fahrenheit;
}

function frangeytSelsiy(fahrenheit) {
   let celsius = (fahrenheit - 32) * 5/9;
   return celsius;
}

let celsiusTemperature = 25;
let fahrenheitTemperature = 77;

console.log(selsiyFrangeyt(celsiusTemperature)); // 77
console.log(frangeytSelsiy(fahrenheitTemperature)); // 25

//birinchi element bilan oxirgi element tengligi

function sameFirstLast(nums) {
    if (nums.length >= 1 && nums[0] === nums[nums.length - 1]) {
       return true;
    } else {
       return false;
    }
 }
 
 console.log(sameFirstLast([1, 2, 3])); // false
 console.log(sameFirstLast([1, 2, 1])); // true
 
 

 