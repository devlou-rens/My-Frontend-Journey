//eachButtons
let Gaming = () =>{
    let btnElement = document.querySelector('.gaming');

    if(btnElement.innerHTML === 'Gaming'){
        btnElement.innerHTML = 'Gaming ';
        btnElement.classList.add('onGaming');
    }else {
        btnElement.innerHTML = 'Gaming';
        btnElement.classList.remove('onGaming');
    }
}
let Music = () =>{
    let btnElement = document.querySelector('.music');

    if(btnElement.innerHTML === 'Music'){
        btnElement.innerHTML = 'Music ';
        btnElement.classList.add('onMusic');
    }else {
        btnElement.innerHTML = 'Music';
        btnElement.classList.remove('onMusic');
    }
}

let Tech = () =>{
    let btnElement = document.querySelector('.tech');

    if(btnElement.innerHTML === 'Tech'){
        btnElement.innerHTML = 'Tech ';
        btnElement.classList.add('onTech');
    }else {
        btnElement.innerHTML = 'Tech';
        btnElement.classList.remove('onTech');
    }
}

//allButtons
let onToggled = (clickBtn) =>{
    let allBtn = document.querySelectorAll('.btn');

    allBtn.forEach(btn => {
        btn.classList.remove('is-toggled');
    });
    clickBtn.classList.add('is-toggled');

}
