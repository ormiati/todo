'use strict'

const input = document.querySelector('.write');
const add = document.querySelector('.add'); 
const list = document.querySelector('.list');

const addToList = () => {
    if(input.value){
    const todo = document.createElement('div');
    todo.classList.add('list-item');
    todo.textContent = input.value;
    list.insertBefore(todo, list.firstchild);
    input.value = '';
    };
};

const addListener = () => add.addEventListener('click', addToList);

addListener();