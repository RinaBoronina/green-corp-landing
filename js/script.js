const budget = document.querySelector('#budget');
const formId = document.getElementById('form');
const btnFormSubmit = document.querySelector('.form__submit');


budget.addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
        // Добавить еще одно текстовое поле
        const formContainer = document.createElement('div');
        formContainer.classList.add('form__group');
        formContainer.classList.add('form__other-input');

        const input = document.createElement('input');
        input.placeholder = 'Введите ваш вариант';
        input.type = 'text';

        formContainer.appendChild(input);

        formId.insertBefore(formContainer, btnFormSubmit); 
    }

    const otherInput = document.querySelector('.form__other-input');

    if (event.target.value !== 'other' && otherInput) {
        // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
        formId.removeChild(otherInput);
    }
});