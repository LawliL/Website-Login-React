const { Route, BrowserRouter, Link, Switch} = window.ReactRouterDOM;
const {useEffect, useState} = React;
function Panel() {
useEffect(() => {
    checkLogin(
        getSessionUserData(),
        function () {
            document.querySelector("#register").style.display = "none";
            
            var btnLogin = document.querySelector("#login");
            btnLogin.innerHTML = "<i class='fa fa-user'></i> Logout"
            btnLogin.href = "/logout.php";
        },
        function () {},
        true
    );    
}, []);
    return (
        <header>
            <div className="heading">
            <button className="header-burger burger"><i className="fa fa-bars"></i></button>
            <NavBar/>
            <div className="heading">
                <div className="heading-content">
                <div>
                   <Switch>
                    <Route exact path='/'>
                        <HomePag/>
                    </Route>
                    <Route path="/">
                        <OtherPag/>
                    </Route>
                   </Switch>
                </div>
                </div><br/><br/>
                </div><br/><br/><br/><br/><br/>
                <div className="section-divider2 slide"></div>
                <div className="about">
                    <div className="about-part slide">
                        <p style={{color: '#ffffff'}}><strong>Text</strong></p>
                    </div>
                </div>
            </div>
        </header>
    );
}
function HomePag() {
  return (
        <h1>Página 1</h1>
  );
}
function OtherPag() {
    return (
          <h1>Página 2</h1>
    );
  }
function NavBar() {
  return (
      <header className="header">
                      <button className="header-burger burger"><i className="fa fa-bars"></i></button>
                <nav className="header-nav">
                    <div>
                    <Link className="header-nav-button" alt-button="" to="/pag2">OtherPag</Link>
                    </div>
                    <div>
                    <a className="header-nav-button" alt-button="" id="login" href="/API/login/login.html"><i className="fa fa-user"></i>Login</a>
                    <a className="header-nav-button" alt-button="" id="register" href="/API/register/registrar.html"><i className="fa fa-user"></i>Register</a>
                    </div>
                </nav>
      </header>
  );
}
ReactDOM.render(
<BrowserRouter><Panel/></BrowserRouter>,
  document.getElementById('root')
);