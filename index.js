arr1 = {
    '1': 'пить пиво ',
    '2': 'купаться ',
    '3': 'ловить бабочек ',
    '4': 'спать ',
    '5': 'пить пиво ',
    '6': 'купаться ',
    '7': 'ловить бабочек ',
    '8': 'спать ',
    '9': 'пить пиво ',
    '0': 'купаться ',
};
arr2 = {
    '1': 'с креветками ',
    '2-10': 'с бобами ',
    '11-20': 'с сухариками ',
    '21-30': 'с друзьями ',
    '31-40': 'с братьями ',
    '41-50': 'с сестрами ',
    '51-60': 'с родителями ',
    '61-70': 'с чипсами ',
    '71-80': 'со льдом ',
    '81-99': 'с сыром ',
    '>100': 'с шашлыками ',
};

arr3 = {
    '😴': 'на лавке ',
    '😄': 'в беседке ',
    '😁': 'на море ',
    '😆': 'на яхте ',
    '😅': 'на яхте ',
    '😍': 'на яхте ',
    '🤪': 'на яхте ',
    '😝': 'на яхте ',
    '🤑': 'на яхте ',
    '😎': 'на яхте ',
};


// let res1 = document.querySelector('.result1');
// let res2 = document.querySelector('.result2');
// let res3 = document.querySelector('.result3');
const select1 = document.querySelector('.birthday');
const select2 = document.querySelector('.friends');
const select3 = document.querySelector('.emoji');


    select1.addEventListener('change', function () {
       arr1[select1.value] ;
    });
   select2.addEventListener('change', function () {
        arr2[select2.value] ;
});
   select3.addEventListener('change', function () {
       const res3 = arr3[select3.value] ;
});

    const totalPrize = document.querySelector('.result4');
    const calcForm = document.querySelector('.js-calc-form');
    const calcResultWrapper = document.querySelector('.calc__result-wrapper');


    calcForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const prize = arr1[select1.value] + arr2[select2.value]+ arr3[select3.value];
console.log(prize);

        calcResultWrapper.style.display = 'block';
        totalPrize.textContent = `${prize}  твоя традиция`;
    })


