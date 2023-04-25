import { fulfillRequest } from "./module";

function mainFunc( options ) {
    const { spanUrl, inputUrl, button} = options;

    button.addEventListener('click', async (event) => {
        event.preventDefault();
        const { fulfillRequest } = await import('./module.js');
        const regExp = '(/[a-z]+/\d+/$|/\//)';
        const validateInput = regExp.test(inputUrl);
        if (validateInput) {
            const response = fulfillRequest(spanUrl.textContent, inputUrl.value);
            console.log('Response: ', response)
        }



    })
}
mainFunc({
    spanUrl: document.querySelector('.js--url-span'),
    inputUrl: document.querySelector('.js--url-input'),
    button: document.querySelector('.js--button-request'),
});


