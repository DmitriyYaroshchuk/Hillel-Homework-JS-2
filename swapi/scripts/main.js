import { fulfillRequest } from "./module.js";

function mainFunc( options ) {
    const { spanUrl, inputUrl, button, idBlock, controllerBlock, resultBlock, loader } = options;
    button.addEventListener('click', async (event) => {
        event.preventDefault();
        const { fulfillRequest } = await import('./module.js');
        const fixInputUrl = inputUrl.value.trim();
        // console.log(typeof fixInputUrl, fixInputUrl);
        const regExp = /^\/[a-z]*\/?\d*\/?$/;
        const validateInput = regExp.test(fixInputUrl);
        // console.log('inputUrl:', inputUrl);
        // console.log('validateInput:', validateInput);
        if (validateInput) {
            loader.style.display = 'block';
            const response = await fulfillRequest(spanUrl.textContent, fixInputUrl);
            // console.log('Response: ',response);
            // console.log('Response-data: ', (await response).data);
            // console.log('withoutTrim:', inputUrl.value, inputUrl.value.length);
            // console.log('Trim:', inputUrl.value.trim(), inputUrl.value.trim().length);
            if ((await response).status === 'success') {
                loader.style.display = 'none';
                const parseUrl = fixInputUrl.split('/');
                // console.log('parseUrl:', parseUrl);
                controllerBlock.style.display = 'block';
                idBlock.style.display = 'block'
                controllerBlock.innerHTML = parseUrl[1];
                idBlock.innerHTML = parseUrl[2];
                resultBlock.innerHTML = JSON.stringify((await response).data, null, 2);
                console.log(fixInputUrl)
                if (fixInputUrl === '/') {
                    controllerBlock.style.display = 'none';
                    idBlock.style.display = 'none'
                }
            }
            else {
                controllerBlock.style.display = 'none';
                idBlock.style.display = 'none';
            }
        }
        else {
            console.error('Please check again the correctness of the data of the field');
        }
    })
}
try {
    document.addEventListener('DOMContentLoaded', () => {
        mainFunc({
            spanUrl: document.querySelector('.js--url-span'),
            inputUrl: document.querySelector('.js--url-input'),
            button: document.querySelector('.js--button-request'),
            idBlock: document.querySelector('.js--id-swapi'),
            controllerBlock: document.querySelector('.js--controller-swapi'),
            resultBlock: document.querySelector('.js--code'),
            loader: document.querySelector('.js--loader'),
        })
    })
} catch (error) {
    console.error(error);
}




