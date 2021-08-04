// import functions
import { saveUser, getUser, findByUser } from './data/data-functions.js';
import { createUser } from './user/create-user.js';

// reference needed DOM elements

const userForm = document.getElementById('user-form');
const logInBtn = document.getElementById('login-btn');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const newUser = createUser(formData);
    saveUser(newUser);
    window.location.replace('./choice-page');
});

logInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(userForm);
    const oldUser = getUser();
    findByUser(formData);
    if (oldUser.password === formData.get('password')) {
        window.location.replace('./choice-page');
        return alert('Welcome Back');
    } else {
        return alert('Wrong Password');
    }
});