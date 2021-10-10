// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h1 {\n    color: #AC2B37;\n    background-color: white;\n    text-align:center;\n}\n.inner {\n    width:100%;\n    position: absolute;\n}\nbody {\nbackground:#475d62 url(../../wpi.png);\n    height:100%;\n\n}\n\nhtml,body,#app,#app>div {\n    height:100%;\n}\n\n\n.login-light {\n   height:100%;\n\n}\n\n.login-light form {\n  max-width:320px;\n  width:90%;\n  background-color:#ffffff;\n  padding:40px;\n  border-radius:4px;\n  transform:translate(-50%, 0%);\n  position:absolute;  \n  top:250px;\n  left:50%;\n  color:#000;\n  box-shadow:3px 3px 4px rgba(0,0,0,0.2);\n       padding-bottom: 300px;\n}\n\n.login-light .illustration {\n  text-align:center;\n  padding:15px 0 20px;\n  font-size:100px;\n  color:#AC2B37;\n}\n\n.login-light form .form-control {\n  background:none;\n  border:none;\n  border-bottom:1px solid #434a52;\n  border-radius:0;\n  box-shadow:none;\n  outline:none;\n  color:inherit;\n}\n\n\n.login-light form .btn-primary:active:focus {\n  background:#b8091b;\n  border:none;\n  border-radius:4px;\n  padding:11px;\n  box-shadow:none;\n  margin-top:26px;\n  text-shadow:none;\n}\n.login-light form .btn-primary {\n  width:100%;\n  background:#AC2B37;\n  border:none;\n  border-radius:4px;\n  padding:11px;\n  box-shadow:none;\n  margin-top:26px;\n  text-shadow:none;\n  outline:none;\n}\n\n.login-light form .btn-primary:hover, .login-light form .btn-primary:active {\n  background:#751d26;\n  outline:none;\n}\n.login-light form .signUpAthlete, .login-light form .signUpAlumni {\n  display:block;\n  text-align:center;\n  font-size:12px;\n  color:#6f7a85;\n  opacity:0.9;\n  text-decoration:none;\n}\n.login-light form .signUpAthlete:hover, .login-light form .signUpAlumni:hover,.login-light form .signUpAthlete:active, .login-light form .signUpAlumni:active{  \n  opacity:1;\n  text-decoration:none;\n}\n\n.login-light form .btn-primary:active {\n  transform:translateY(1px);\n}\n.login-light form .btn-link:focus, .login-light form .btn-link:active {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.login-light form .btn-link {\n  color:#808080 !important;\n}\n\n.login-light form input{\n    width:100%;\n}\n\n.form-control{\n\n}\n\n/* form starting stylings ------------------------------- */\n.group \t\t\t  { \n  position:relative; \n  margin-bottom:45px; \n}\ninput \t\t\t\t{\n  font-size:18px;\n  padding:10px 10px 10px 5px;\n  display:block;\n  width:300px;\n  border:none;\n  border-bottom:1px solid #757575;\n}\ninput:focus \t\t{ outline:none; }\n\n/* LABEL ======================================= */\nlabel \t\t\t\t {\n  color:#999; \n  font-size:18px;\n  font-weight:normal;\n  position:absolute;\n  pointer-events:none;\n  left:5px;\n  top:10px;\n  transition:0.2s ease all; \n  -moz-transition:0.2s ease all; \n  -webkit-transition:0.2s ease all;\n}\n\n/* active state */\ninput:focus ~ label, input:valid ~ label \t\t{\n  top:-20px;\n  font-size:14px;\n  color:#5264AE;\n}\n\n/* BOTTOM BARS ================================= */\n.bar \t{ position:relative; display:block; width:80%; }\n.bar:before, .bar:after \t{\n  content:'';\n  height:2px; \n  width:0;\n  bottom:1px; \n  position:absolute;\n  background:#5264AE; \n  transition:0.2s ease all; \n  -moz-transition:0.2s ease all; \n  -webkit-transition:0.2s ease all;\n}\n.bar:before {\n  left:50%;\n}\n.bar:after {\n  right:50%; \n}\n\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}