function GetInfoAboutUser({ button, inputValue, url }) {
    button.addEventListener('click', () => {
        this.checkInput();
    })
    this.checkInput = function () {
        const regExp = /^([1-9]|[1-9][0-9]|100)$/;
        regExp.test(inputValue) ? this.requestPost() : this.showError()
    }
    this.showError = function () {
        document.querySelector('.js--small').style.display = 'block'
    }
    this.requestPost = function ()  {
        const promise = fetch(url);
        promise
            .then(data => {
                console.log(data);
                return  data.json();
            })
            .then(updateData => {
                console.log('Result: ', updateData);
                const userInfo = updateData.filter(item => item.id === inputValue);
                document.querySelector('.js--userId').innerHTML = `UserId:  ${userInfo[0].userId}`
                document.querySelector('.js--id').innerHTML = `id:  ${userInfo[0].id}`
                document.querySelector('.js--title').innerHTML = `Title: ${userInfo[0].title}`;
                document.querySelector('.js--body').innerHTML = `Body: ${userInfo[0].body}`
                console.log(userInfo)
            })
            .catch(err => console.log('Проверьте данные, ',err));
    }
}


new GetInfoAboutUser({
    button: document.querySelector('.js--button'),
    inputValue: document.querySelector('.js--input').value,
    url: 'https://jsonplaceholder.typicode.com/posts'
})