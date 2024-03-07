const MAINBUTTON = document.getElementById("generateButton");
const copybutton = document.getElementById("copypassword");
function generatePassword() {
    console.log("conta")
    var forcadasenha = 0
    var gerada = document.getElementById("generatedpass")
    const length = document.getElementById("passLength").value;
    const b1 = document.getElementById("checkbox1").checked;
    const b2 = document.getElementById("checkbox2").checked;
    const b3 = document.getElementById("checkbox3").checked;
    const b4 = document.getElementById("checkbox4").checked;
    let charset = "";
    const charm = "abcdefghijklmnopqrstuvwxyz";
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[{]}|;:'\",<.>/?`\\~";

    if (b1) {
        charset += char;
        forcadasenha += 20
    }
    if (b2) {
        charset += charm;
        forcadasenha += 20
    }

    if (b3) {
        charset += numbers;
        forcadasenha += 20
    }

    if (b4) {
        charset += symbols;
        forcadasenha += 20
    }

    if(!b1 && !b2 && !b3 && !b4){
        alert("Senha invalida, selecione alguma opção.")
    }
    
    let password = "";

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * charset.length);
        password += charset[random];
    }

    console.log(password);
    gerada.value = password

    if(password.length > 10){
        forcadasenha += 20
    }else if(password.length > 6){
        forcadasenha += 0
    }else if(password.length < 6 && password.length > 0){
        forcadasenha += -50
    }else{
        alert("Senha invalida, sem tamanho.")
    }

    function alterarCorbarra(nivel) {
        var barraForca = document.getElementById('barraForca');
        console.log(barraForca)
        barraForca.classList.remove('forca-1', 'forca-2', 'forca-3', 'forca-4', 'forca-5');
        barraForca.classList.remove('barra-1', 'barra-2', 'barra-3', 'barra-4', 'barra-5');
        
        barraForca.classList.add('forca-' + nivel);
        barraForca.classList.add('barra-' + nivel);
    }
    console.log(forcadasenha)
    if(forcadasenha == 100){
        alterarCorbarra(5)
        
    }else if(forcadasenha > 80 && forcadasenha <= 100){
        alterarCorbarra(4)
    }else if(forcadasenha < 80 && forcadasenha >= 60){
        alterarCorbarra(3)
    }else if(forcadasenha < 60 && forcadasenha >= 40){
        alterarCorbarra(2)
    }else if(forcadasenha < 40 && forcadasenha >=20){
        alterarCorbarra(1)
    }else{
        alterarCorbarra(0)
    }
}

if (MAINBUTTON) {
    MAINBUTTON.addEventListener("onclick", generatePassword);
}

function copy(){
    var copyText = document.getElementById("generatedpass");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);

}

if(copybutton){
    copybutton.addEventListener("click", copy);

}

