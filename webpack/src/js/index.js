
function GetInfoAboutUser({ buttonPosts, buttonComments, input, elementError }) {
    buttonPosts.addEventListener('click', () => {
        this.validateInput();
    })
    this.validateInput = function () {
        const regExp = /^([1-9]|[1-9][0-9]|100)$/;
        regExp.test(input.value) ? this.requestPost() : this.showError();
    }
    this.showError = function () {
        elementError.style.display = 'block';
        this.clearContentPost();
    }
    this.requestPost = function ()  {
        const promisePost = fetch('https://jsonplaceholder.typicode.com/posts');
        promisePost
            .then(dataPost => {
                console.log('DatePost: ', dataPost);
                return  dataPost.json();
            })
            .then(updateDataPost => {
                console.log('Result: ', updateDataPost);
                const userPost = updateDataPost.filter(item => item.id === Number(input.value));
                console.log('userInfo: ', userPost);
                document.querySelector('.js--userId').innerHTML = `UserId:  ${userPost[0].userId}`
                document.querySelector('.js--id').innerHTML = `Id:  ${userPost[0].id}`
                document.querySelector('.js--title').innerHTML = `Title: ${userPost[0].title}`;
                document.querySelector('.js--body').innerHTML = `Body: ${userPost[0].body}`
                console.log(userPost)
            })
            .catch(err => console.error('Проверьте данные, ' ,err));


        elementError.style.display = 'none';
        buttonComments.addEventListener('click', () => {
            this.requestComment();
        })
    }



    this.requestComment = () => {
        const promiseComment = fetch('https://jsonplaceholder.typicode.com/comments');
        promiseComment
            .then(dataComment => {
                console.log('DateComment: ', dataComment)
                return dataComment.json()
            })
            .then(updateDataComment => {
                console.log('ResultComment: ', updateDataComment);
                const userComment = updateDataComment.filter(item => item.id === Number(input.value));
                document.querySelector('.js--commentId').innerHTML = `CommentId: ${userComment[0].postId}`;
                document.querySelector('.js--id-comment').innerHTML = `Id: ${userComment[0].id}`;
                document.querySelector('.js--name').innerHTML = `Name: ${userComment[0].name}`;
                document.querySelector('.js--email').innerHTML = `Email: ${userComment[0].email}`;
                document.querySelector('.js--body-comment').innerHTML = `Body: ${userComment[0].body}`
            })
            .catch(err => console.error('Проверьте данные, ' ,err));
    }


    this.clearContentPost = () => {
        document.querySelector('.js--userId').innerHTML = '';
        document.querySelector('.js--id').innerHTML = '';
        document.querySelector('.js--title').innerHTML = '';
        document.querySelector('.js--body').innerHTML = '';
        document.querySelector('.js--commentId').innerHTML = '';
        document.querySelector('.js--id-comment').innerHTML = '';
        document.querySelector('.js--name').innerHTML = '';
        document.querySelector('.js--email').innerHTML = '';
        document.querySelector('.js--body-comment').innerHTML = '';
    }
}
new GetInfoAboutUser({
    buttonPosts: document.querySelector('.js--button-post'),
    buttonComments: document.querySelector('.js--button-comments'),
    input: document.querySelector('.js--input'),
    elementError: document.querySelector('.js--small'),
})