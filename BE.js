document.addEventListener("DOMContentLoaded", function()
  {
    const form = document.getElementById("calculador");

    form.addEventListener("submit", function(event)
    {
      event.preventDefault();

      let num1= parseInt(document.getElementById("primer").value);
      let num2= parseInt(document.getElementById("segundo").value);
      let signo= document.getElementById("signo").value;
      let resu;console.log(num1, num2, signo);
      switch (signo)
        {
          case "+":
           resu= num1 + num2;
           alert("Resultado de la suma: " + resu);
           break;
          case "-":
           resu = num1- num2;
           alert("Resultado de la resta: " + resu);
           break;
          case "*":
            resu= num1*num2;
            alert("Resultado de la multiplicacion: "+ resu);
            break;
          case "/":
            if (num2 === 0)
              {
                alert("Capo, Como vas a dividir por 0?");
                break;
              }else {
                resu = Math.floor(num1/num2);
                alert("El resultado de la division es: " + resu);
              }
        }

      });


  });
