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

checkLogin(
        getSessionUserData(), 
        function () {}, 
        function () {},
        true
  );