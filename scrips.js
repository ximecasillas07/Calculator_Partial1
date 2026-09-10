document.addEventListener('DOMContentLoaded', () => {
    let userInputs = []; // array donde se van a guardar los datos
    const displayEl = document.getElementById('display'); // donde se va mostrar el texto
    const buttons = document.querySelectorAll('.key'); //agarra el data-key de cada botón

    // actuliza la pantalla de lo que ingresa el usuario
    function updateDisplay(){
        const text = userInputs.join(''); //concatenar el array
        displayEl.textContent = text || '0'; //se muestra cuando esta vacío
    }

    //eliminar ultimo dato que metio el usuario
    function deleteLast() {
        userInputs.pop();
        updateDisplay();
    }

    // eliminar todo los datos del array
    function resetAll() {
        userInputs.length = 0;
        updateDisplay();
    }

    // determina numero, operadores y puntos
    function handleKeyPress(value){
        const operators = ['+', '-', 'x', '/'];
        const last = userInputs[userInputs.length-1]; // asegurar que no es un operador el ultimo dato ingresado en el array

        if(operators.includes(value)){
            if(!last && value !== '-') return; // no se puede empezar con otro operador solo con "-"
            if(operators.includes(last)){
                userInputs[userInputs.length -1] = value; // reemplazar operador
                updateDisplay();
                return;
            }
            userInputs.push(value);
            updateDisplay();
            return;
        }

        // evitar que pongan doble punto
        if(value === '.'){
            let i = userInputs.length - 1;
            while(i>=0 && !operators.includes(userInputs[i])) i--;
            const currentNumber = userInputs.slice(i+1).join('');
            if(currentNumber.includes('.')) return; // por si ya tiene punto
            if(currentNumber === '') userInputs.push('0.');
            else userInputs.push('.');
            updateDisplay();
            return;
        }

        // si es numero
        userInputs.push(value);
        updateDisplay();
    }

    // se prepara para evaluar
    function prepareExpression(){
        let expr = userInputs.join('');
        expr = expr.replace(/x/g, '*');
        if(/[+\-*/]$/.test(expr)){
            expr = expr.slice(0, -1);
        }
        return expr;
    }

    // evalua y muestra el dato
    function showResult(){
        const expr = prepareExpression();
        if(!expr) return;
        try{
            const result = eval(expr);
            const text = Number.isInteger(result) ? String(result) : String(parseFloat(result.toFixed(6)));
            displayEl.textContent = text;
            userInputs = [text]; // permite que se pueda calcula con el resultado
        }catch (e){
            displayEl.textContent = 'Error';
            setTimeout(() => {
                userInputs.length = 0;
                updateDisplay();
            }, 1000);
        }
    }

    // click para los botones
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.dataset.key;

            if (value === 'DEL') {
                deleteLast();
                return;
            }
            if (value === 'RESET') {
                resetAll();
                return;
            }
            if (value === '=') {
                showResult();
                return;
            }

            // número, operador o punto
            handleKeyPress(value);
        });
    });

    // para usarlo con el teclado
    window.addEventListener('keydown', (e) => {
        const map = { '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','.':'.','+':'+','-':'-','*':'x','/':'/','Enter':'=','=':'=','Backspace':'DEL','Delete':'RESET' };
        const key = map[e.key];
        if (!key) return;
        e.preventDefault();

        if (key === 'DEL') { deleteLast(); return; }
        if (key === 'RESET') { resetAll(); return; }
        if (key === '=') { showResult(); return; }

        handleKeyPress(key);
    });

    updateDisplay();
});