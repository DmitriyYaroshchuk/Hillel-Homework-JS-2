import { fulfillRequest } from "./module.js";

class MainFunc {
    constructor(options) {
        const { spanUrl, inputUrl, button, idBlock, controllerBlock, resultBlock, loader } = options;
        this.spanUrl = spanUrl;
        this.inputUrl = inputUrl;
        this.button = button;
        this.idBlock = idBlock;
        this.controllerBlock = controllerBlock;
        this.resultBlock = resultBlock;
        this.loader = loader;
    }
    listenEvent() {
        this.button.addEventListener('click', async (event) => {
            event.preventDefault();
            const { fulfillRequest } = await import('./module.js');
            const fixInputUrl = this.inputUrl.value.trim();
            // console.log(typeof fixInputUrl, fixInputUrl);
            const regExp = /^\/([a-z]*\/\d+\/)?$/;
            const validateInput = regExp.test(fixInputUrl);
            // console.log('inputUrl:', inputUrl);
            // console.log('validateInput:', validateInput);
            if (validateInput) {
                this.loader.style.display = 'block';
                const response = await fulfillRequest(this.spanUrl.textContent, fixInputUrl);
                // console.log('Response: ',response);
                // console.log('Response-data: ', (await response).data);
                // console.log('withoutTrim:', inputUrl.value, inputUrl.value.length);
                // console.log('Trim:', inputUrl.value.trim(), inputUrl.value.trim().length);
                if ((await response).status === 'success') {
                    this.loader.style.display = 'none';
                    const parseUrl = fixInputUrl.split('/');
                    // console.log('parseUrl:', parseUrl);
                    this.controllerBlock.style.display = 'block';
                    this.idBlock.style.display = 'block'
                    this.controllerBlock.innerHTML = parseUrl[1];
                    this.idBlock.innerHTML = parseUrl[2];
                    this.resultBlock.innerHTML = JSON.stringify((await response).data, null, 2);
                    console.log(fixInputUrl)
                    if (fixInputUrl === '/') {
                        this.controllerBlock.style.display = 'none';
                        this.idBlock.style.display = 'none'
                    }
                }
                else {
                    this.controllerBlock.style.display = 'none';
                    this.idBlock.style.display = 'none';
                }
            }
            else {
                alert('Please check again the correctness of the data of the field');
                console.error('Please check again the correctness of the data of the field');
            }
        });
    }

}
try {
    document.addEventListener('DOMContentLoaded', () => {
        const newFunc = new MainFunc({
            spanUrl: document.querySelector('.js--url-span'),
            inputUrl: document.querySelector('.js--url-input'),
            button: document.querySelector('.js--button-request'),
            idBlock: document.querySelector('.js--id-swapi'),
            controllerBlock: document.querySelector('.js--controller-swapi'),
            resultBlock: document.querySelector('.js--code'),
            loader: document.querySelector('.js--loader'),
        })
        newFunc.listenEvent();
    })
} catch (error) {
    console.error(error);
}




