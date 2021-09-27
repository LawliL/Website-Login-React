/**
 * @param {FormData} data
 * @param {boolean} isLogged
 * @param {Function} sucess
 * @param {Function} fail 
 */
var $botao = $("#botao");
function checkLogin(data, sucess, fail, isLogged = false)
{
    var redirector = new XMLHttpRequest();
    redirector.open('POST', isLogged ? 'http://localhost/verifica.php' : 'http://localhost/API/login/login.php');

    redirector.onload = () => {
        if (redirector.responseText == '1') {
            sucess();
            return;
        }
        fail();
    };

    redirector.send(data);
}

function getSessionUserData() {
    let dadosLogin = new FormData();

    dadosLogin.append('username', sessionStorage.getItem('username'))
    dadosLogin.append('password', sessionStorage.getItem('password'))
    
    return dadosLogin;
}
function saveFormUserData() {
    dadosLogin = getFormUserData();
    sessionStorage.setItem('username', dadosLogin.get('username'));
    sessionStorage.setItem('password', dadosLogin.get('password'));
}

function getFormUserData() {
    let dadosLogin = new FormData();

    dadosLogin.append('username', document.querySelector('#login').value)
    dadosLogin.append('password', document.querySelector('#senha').value)

    return dadosLogin;
}

function redirectToPanel() {
    window.location.replace('http://localhost')
}

function redirectToLoginPage() {
    window.location.replace('http://localhost/API/login/login.html')
}

$botao.click(function () {
checkLogin(
        getFormUserData(), 
        function () {
            saveFormUserData();
            redirectToPanel();
        },
        function () {
            window.alert('Usuário e/ou senha inválidos!');
            return;
        }
    );
});