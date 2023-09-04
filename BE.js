document.addEventListener("DOMContentLoaded", function()
  {
    const form = document.getElementbyId("Calculador");

    form.addEventListener("submit", function (event)
    {
      event.preventDefault();

      let num1= document.getElementbyId("primer");
      let num2= document.getElementbyId("segundo");
      let signo= document.getElementbyid("signo");
      switch (signo)
        {
          case "+":
           let resu= num1 + num2;
           alert ("Resultado de la suma: ", resu);
          

        }


    }

  )
  }
)
