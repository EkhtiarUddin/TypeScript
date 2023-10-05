//when we use the anchor variable typescript knows all the different properties and methods on that type, and it's gonna make them available to us in some kind of inteligence
// const anchor = document.querySelector('a')!;
// console.log(anchor.href)
// const form = document.querySelector('form)!;
var form = document.querySelector('.new-item-form');
//console.log(from.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#toform');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
