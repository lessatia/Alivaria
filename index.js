
arr1 = {
    '1': 'пить пиво',
    '2': 'купаться',
    '3': 'ловить бабочек',
    '4': 'спать',
};
arr2 = {
    '1': 'с креветками',
    '2': 'с бобами',
    '3': 'с сухариками',
    '4': 'с друзьями ',
};

arr3 = {
    '😀': 'на лавке',
    '😄': 'в беседке',
    '😁': 'на море',
    '😆': 'на яхте ',
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


