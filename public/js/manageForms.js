document.addEventListener('DOMContentLoaded', () => {
    const formSignUp = document.getElementById("signup");
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById("email");
    const formErrors = document.getElementById("form-errors");

    formSignUp.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!firstName.value) {
            firstName.classList.add('error-input-field')
        } else {
            firstName.classList.remove('error-input-field')
        }

        if (!lastName.value) {
            lastName.classList.add('error-input-field')
        } else {
            lastName.classList.remove('error-input-field')
        }

        if (!email.value) {
            email.classList.add('error-input-field')
        } else {
            email.classList.remove('error-input-field')
        }

        if (firstName.value && lastName.value && email.value) {
            createNewUser(firstName.value, lastName.value, email.value);
            firstName.value = '';
            lastName.value = '';
            email.value = '';
        }

        async function createNewUser(firstName, lastName, email) {
            let state = "";
            const user = { firstName, lastName, email }
            const response = await axios.post('http://localhost:3000/users', { params: { user } });

        }

    });
});
