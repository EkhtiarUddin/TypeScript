//when we use the anchor variable typescript knows all the different properties and methods on that type, and it's gonna make them available to us in some kind of inteligence

// const anchor = document.querySelector('a')!;
// console.log(anchor.href)

// const form = document.querySelector('form)!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(from.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value 
    )
})
