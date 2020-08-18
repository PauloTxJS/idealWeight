(function() {

    let button = document.querySelector('#button');

    button.addEventListener('click', function(){
        
        let height = parseFloat(document.querySelector("#height").value);
        let weight = document.querySelector("#weight").value;
        let show = document.querySelector("#show");
        let geral = document.querySelector("#geral");
        let h1 = document.querySelector("#h1");
        let imc = weight / ( height * height );
        imc = imc.toFixed(1)
            
        if (height && weight) {

            let msg = `Altura = ${height}<br>Peso = ${weight}<br>IMC = ${imc}<br>`;

            if ( imc < 18.5 ) {

                h1.style.color = 'red';
                show.style.color = 'red';
                geral.style.background = 'red';
                show.innerHTML = `${msg} <br> Você está abaixo do peso.`;

            } else if ( imc >= 18.5 && imc <= 24.9 ) {

                h1.style.color = 'green';
                show.style.color = 'green';
                geral.style.background = 'green';
                show.innerHTML = `${msg} Você está no peso ideal.`;

            } else if ( imc >= 25 && imc <= 29.9 ) {

                h1.style.color = '#FFA500';
                show.style.color = '#FFA500';
                geral.style.background = '#FFA500';
                show.innerHTML = `${msg} Você está com sobrepeso.`;

            } else if ( imc >= 30 && imc <= 34.99 ) {
                h1.style.color = '#B22222';
                show.style.color = '#B22222';
                geral.style.background = '#B22222';
                show.innerHTML = `${msg} Você está com obesidade grau I.`;

            } else if ( imc >= 35 && imc <= 39.99 ) {

                h1.style.color = '#A52A2A';
                show.style.color = '#A52A2A';
                geral.style.background = '#A52A2A';
                show.innerHTML = `${msg} Você está com obesidade grau II (SEVERA).`;

            } else {
                
                h1.style.color = 'black';
                show.style.color = 'black';
                geral.style.background = 'black';
                show.innerHTML = `${msg} Você está com obesidade grau III (MÓRBIDA).`;

            }        

        } else {

            alert('Digite seu peso e altura...');

        }

    })

})();