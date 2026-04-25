let calculation = localStorage.getItem('calculation') || '';

let updateCalculation = (value) => {
    calculation += value;
    document.querySelector('.jsDisplay').innerHTML = calculation;
    //save in localStorage
    localStorage.setItem('calculation', calculation);
}
let showResult = () => {
    calculation = eval(calculation) ;
    if(calculation === 0){
        console.log("Can't divide by zero.");
    }else{
    document.querySelector('.jsDisplay').innerHTML = `${calculation}`;
    }
}

let clearAll = () => {
    calculation = '';
    document.querySelector('.jsDisplay').innerHTML = 'Cleared.';
}