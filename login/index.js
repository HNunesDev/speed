const btnd = document.getElementById("btnd");

btnd.addEventListener("change", e => {
    document.body.classList.toggle("dark", e.target.checked);
})




function logar(){

    var emailc = document.getElementById('email').value;
    var senha = document.getElementById('pass').value;
    
    if (emailc == "henriqueguilhem77@gmail.com" && senha == "1234"){
        alert("Login Efetuado");
        location.href = "loged.html";
    } else{
        alert("Falha no login")
    }
    
    }

    function voltar(){
        location.href = "index.html";
    }

    function register(){

        location.href = "register.html"

    }

    function confirmar(){
        var emailr = document.getElementById('emailr').value;
        var senhar = document.getElementById('senhar').value;
        var emaial_confirmacao = document.getElementById('email_confirmacao').value;
        var senha_confirmacao = document.getElementById('senha_confirmacao').value;

        if( emailr == emaial_confirmacao && senhar == senha_confirmacao){
            alert("Usuário registrado");
            location.href = "index.html"
        } else {
            alert("Usuário ou senha diferentes")
        }

    }
    