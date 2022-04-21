
import { getPhoto } from './helpers/api.js';
import { options } from './helpers/api.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const btn = document.querySelector('#btn');

// async function loadPictures() {
//   try {
//       const photo = await getPhoto();
//       console.log(photo);
//   } catch  {
   
//   }
// }


form.addEventListener('submit', onFormSubmit );
        
function onFormSubmit(event) {
    event.preventDefault();

    options.q = input.value;
    

    loadPictures();
}


async function loadPictures() {
    try {
        const response = await getPhoto();
    
    } catch (error){
            Notify.failure('Something went wrong, please try again...');
    }
}