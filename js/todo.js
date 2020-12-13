'use strict'

const input = document.querySelector('.write');
const add = document.querySelector('.add'); 
const list = document.querySelector('.list');
const done = document.querySelector('.doneit');
const tex = document.querySelector('.tex')
let jel = 1;

const deleteStorage = (id) => {
    document.querySelector(`[data-id="${id}"]`).parentElement.remove();
    localStorage.removeItem(id);
  };

const addDelEventListener = (id) => document.querySelector(`[data-id="${id}"]`).addEventListener('click', () => deleteStorage(id));

const didItStorage = (id) => {
    const didItItem = document.querySelector(`[data-num="${id}"]`).parentElement
    didItItem.remove();
    done.insertBefore(didItItem, done.firstchild);
};

const addDidEventListener = (id) => document.querySelector(`[data-num="${id}"]`).addEventListener('click', () => didItStorage(id));

const listeners = (id) => {
    addDelEventListener(id);
    addDidEventListener(id);
};

const addList = (first, second) => {
    const todo = document.createElement('div');
    todo.classList.add('list-item');
    todo.innerHTML = `<input class="didit" data-num="${second}" type="checkbox"> ${first} <button class="delete fa fa-trash" data-id="${second}"></button>`;
    list.insertBefore(todo, list.firstchild);
    tex.style.display = "none";
};

const addStorage = () => {
    if(input.value){
    addList(input.value, jel);
    localStorage.setItem(jel.toString(), input.value);
    listeners(jel);
    jel += 1;
    input.value = '';
    };
};

Object.keys(localStorage).forEach((key) => {
        addList(localStorage.getItem(key), key);    
        listeners(key);
        if(parseInt(key) >= jel) {
            jel = parseInt(key);
            jel +=1;
        }
});

const addListener = () => add.addEventListener('click', addStorage);

addListener();