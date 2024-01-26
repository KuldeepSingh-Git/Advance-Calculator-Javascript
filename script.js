/* This code is implementing a basic calculator functionality using JavaScript. */
let expression = "";
let res = '';
let val = document.getElementById('input');

/* This code is adding an event listener to the document object for the 'keydown' event. It means that the calculator will listen the keys and execute the code
    according to their conditions.
*/
document.addEventListener('keydown', (e) =>
{
    k = e.key;
    if( k == 1 || k == 2 || k == 3 || k == 4 || k == 5 || k == 6 || k == 7 || k == 8 || k == 9 || k == 0 || k == '+' || k == '-' || k == '*' || k == '/' || k == '.' )
        numbers(e.key);
    else if ( k == 'Enter' )
    {
        e.preventDefault();
        result();
    }
    else if ( k == 'Backspace' )
        backspace();
    else if ( k == 'Escape' )
        clr();
})

/*
    * This function takes a input and appends it to an expression and updating the input field of calculator.
 */
const numbers = (num) => {
    expression += num;
    val.value = expression;
}

/**
    * This is the main function, which checks if the expression is valid, then evaluates it and updates the result of expression in the input field of calculator.
 */
const result = () =>{
    if (expression != "" )
    {
        if ( !(expression.toString().indexOf('**') == -1) || !(expression.toString().indexOf('//') == -1) )
        {
            alert('invalid expression');
            val.value = '';
            expression = '';
        }
        else
        {
            try {
                res = eval(expression);
                if ( res == val.value || res == undefined)
                {
                    val.value = '';
                    expression = "";
                }
                else
                {
                    val.value = res;
                    expression = res;
                }
            } catch (error) {
                alert('invalid expression');
                val.value = '';
                expression = '';
            }
        }
    }
    else
    {
        val.value = '';
        expression = '';
    }
}

/**
    * This function calculates the square root of a given expression and updates the input field of calculator.
 */
const squrt = () =>{
    res = Math.sqrt(expression);
    expression = res;
    val.value = res;
}

/**
    * This function clears the value of the expression and the input field of calculator.
 */
const clr = () => {
    expression = "";
    val.value = expression;
}

/**
    * This function removes the last character from the expression and updates the input field of calculator.
 */
const backspace = () =>{
    expression = expression.toString().slice(0,-1);
    val.value = expression
}