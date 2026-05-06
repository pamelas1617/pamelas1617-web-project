document.addEventListener('DOMContentLoaded', function () {
    const form = document.createElement('form');
    form.id = 'dynamicForm';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter your favorite character';
    input.name = 'userFav';

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'submit';

    const message = document.createElement('p');
    message.id = 'message';

    form.appendChild(input);
    form.appendChild(submit);

    document.getElementById('formContainer').appendChild(form);
    document.getElementById('formContainer').appendChild(message);

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // stops page refresh

        const value = input.value;

        if (value === "") {
            message.textContent = "Please enter a character name.";
        } else {
            message.textContent = `${value}! I love that character too!`;
        }

        input.value = "";
    });
});