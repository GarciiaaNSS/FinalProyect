String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

var palabras = ["supra", "gtr", "turbo", "llanta", "suspension", "frenos", "intercooler", "bujia", "correas", "escape", "volante", "aleron", "airbag", "luces", "maletero", "motor", "luna"];

var palabra = palabras[Math.floor(Math.random() * palabras.length)];
let BarraBaja = palabra.replace(/./g, "_ ");
let fallos = 0;
let intentos = 4;



var input = document.getElementById("letras");
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("hallar").click();
  }
});


document.querySelector('#problema').innerHTML = BarraBaja;
document.querySelector('#hallar').addEventListener('click', () => {
    var letra = document.querySelector('#letras').value;
    letra = letra.toLowerCase();
    let haFallado = true;

    for (const i in palabra) {
        if (letra == palabra[i]) {
            BarraBaja = BarraBaja.replaceAt(i * 2, letra);

            haFallado = false;
        }
    }

    if (haFallado) {
        fallos++;
        intentos--;
        document.getElementById("intentos").innerHTML = intentos;
        document.querySelector('#ahorcado').style.backgroundPosition = -(264 * fallos) + 'px 0';
        if (fallos == 4) {
            document.getElementById("perdicion").innerHTML = ('HAS PERDIDO!!');
            document.getElementById("perdedor").innerHTML = ('La palabra era: ' + palabra + '.');
            clearInterval(id);
        }
    } else {
        if (BarraBaja.indexOf('_') < 0) {
            document.getElementById("ganador").innerHTML = ('HAS GANADO!!');
            clearInterval(id);
            document.getElementById('contador').innerHTML=('Te han sobrado: ' + counter + ' segundos.');
        }
    }

    if (fallos == 5) {
        location.reload();
       // alert("Quieres una nueva palabra?");
    };

    document.querySelector('#problema').innerHTML = BarraBaja;
    document.querySelector('#letras').value = '';

});



var counter=121;
var id = setInterval(function(){ 
   if(counter==0){
       document.getElementById("perdicion").innerHTML = ('HAS PERDIDO!!');
        document.getElementById("perdedor").innerHTML = ('La palabra era: ' + palabra + '.');
            clearInterval(id);
        document.getElementById('contador').innerHTML=('Te has quedado sin tiempo'); 
       
   }
      
   else
   {
      counter=counter-1; 
      document.getElementById('contador').innerHTML=('Te quedan: ' + counter + ' segundos.'); 
   }
}, 1000);

























